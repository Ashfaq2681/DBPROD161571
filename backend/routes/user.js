const express = require("express");
const multer = require("multer");
const images = require("../models/imageModel.js");
const userImages = require("../models/userImageModel.js");
const article = require("../models/articleModel.js");

const storageHome = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname.replace(" ", "-"));
  },
});
const uploadHome = multer({ storage: storageHome });

const storageArticle = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/articleImages");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const uploadArticle = multer({ storage: storageArticle });

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images/user");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const uploadUser = multer({ storage: storageUser });

//controller functions
const {
  signupUser,
  loginUser,
  createcheckoutSession,
} = require("../controllers/userController");

const router = express.Router();

//login route
router.post("/login", loginUser);

//google login route

//signup route
router.post("/signup", signupUser);

//create-checkout-session route
router.post("/create-checkout-session", createcheckoutSession);


router.post(
  "/uploadimage/home",
  uploadHome.fields([
    { name: 'preview', maxCount: 1 },  // For preview images
    { name: 'file', maxCount: 1 }      // For the main file
  ]),
  async (req, res) => {
    const { category } = req.body;  // Extract category
    const files = req.files;  // Access uploaded files

    // Debugging log
    console.log("Files received: ", req.files);

    try {
      // Initialize an object for the image details
      const imageDetails = { category };

      // Validate and handle based on the category
      switch (category) {
        case 'photos':
          if (!files.file) {
            return res.status(400).json({ message: "File for photos is missing" });
          }
          imageDetails.photos = [files.file[0].filename.replace(" ", "-")];
          break;

        case 'psds':
        case 'mockups':
        case 'vectors':
        case 'pngs':
        case 'socialMedia':
          if (!files.preview || !files.file) {
            return res.status(400).json({ message: "Preview and category file are required" });
          }
          imageDetails[category] = [
            {
              preview: files.preview[0].filename.replace(" ", "-"),  // Preview image
              file: files.file[0].filename.replace(" ", "-")         // Actual file
            }
          ];
          break;

        default:
          return res.status(400).json({ message: "Invalid category" });
      }

      imageDetails["title"] = req.body.title;

      // Save to the database
      await images.create(imageDetails);
      res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "File upload failed", error });
    }
  }
);

// Get psds route
router.get("/getpsds", async (req, res) => {
  try {
    // Fetch only images that have psds populated
    const psdsImages = await images.find({ psds: { $exists: true, $ne: [] } });
    
    if (!psdsImages || psdsImages.length === 0) {
      return res.status(404).json({ message: "No psds found" });
    }

    res.status(200).json({
      status: "ok",
      data: psdsImages,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve psds", error });
    console.log(error);
  }
});

// // Get images route
router.get("/getimages", async (req, res) => {
  try {
    // Fetch all images from the 'images' collection in MongoDB
    const allImages = await images.find({});
    
    // Check if images exist
    if (!allImages || allImages.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    // Send the image data as a JSON response
    res.status(200).json({
      status: "ok",
      data: allImages,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: "Failed to retrieve images", error });
    console.log(error);
  }
});




// Article Upload route with multiple images handling
router.post(
  "/uploadarticle",
  uploadArticle.fields([
    { name: "descriptionImage", maxCount: 1 },   // Image for main description
    { name: "description1Image", maxCount: 1 },  // Image for section 1 description
    { name: "description3_1Image", maxCount: 1 }, // Image for section 3.1 description
    { name: "description3_2Image", maxCount: 1 }, // Image for section 3.2 description
    { name: "description3_3Image", maxCount: 1 }, // Image for section 3.3 description
  ]),
  async (req, res) => {
    const files = req.files;

    // Extract text fields from request body
    const {
      mainTitle,
      mainDescription,
      heading1,
      description1,
      heading2,
      description2_1,
      description2_2,
      heading3_1,
      description3_1,
      heading3_2,
      description3_2,
      heading3_3,
      description3_3,
      conclusion,
    } = req.body;

    // Ensure title and description are provided
    if (!mainTitle || !mainDescription) {
      return res.status(400).json({ error: "Main title and description are required" });
    }

    try {
      // Create a new article record with text fields and image paths
      await article.create({
        mainTitle: mainTitle,
        mainDescription: mainDescription,
        descriptionImage: files.descriptionImage ? files.descriptionImage[0].filename : null,
        heading1: heading1,
        description1: description1,
        description1Image: files.description1Image ? files.description1Image[0].filename : null,
        heading2: heading2,
        description2_1: description2_1,
        description2_2: description2_2,
        heading3_1: heading3_1,
        description3_1: description3_1,
        description3_1Image: files.description3_1Image ? files.description3_1Image[0].filename : null,
        heading3_2: heading3_2,
        description3_2: description3_2,
        description3_2Image: files.description3_2Image ? files.description3_2Image[0].filename : null,
        heading3_3: heading3_3,
        description3_3: description3_3,
        description3_3Image: files.description3_3Image ? files.description3_3Image[0].filename : null,
        conclusion: conclusion,
      });

      res.status(200).json({ message: "Article uploaded successfully" });
    } catch (error) {
      res.status(500).json({ error: "Article upload failed" });
      console.log(error);
    }
  }
);


// Get all articles route
router.get("/getarticles", async (req, res) => {
  try {
    const articles = await article.find({});
    res.status(200).json({ status: "ok", data: articles });
  } catch (error) {
    res.status(404).json({ error: "Failed to retrieve articles" });
    console.log(error);
  }
});

//user image upload route
router.post("/uploadimage/user", uploadUser.any("file"), async (req, res) => {
  console.log(req.body);
  const fileName = req.body;

  try {
    await userImages.create({ image: fileName });
    res.status(200);
  } catch (error) {
    res.status(404);
    console.log(error);
  }
});

// Delete article route
router.delete("/deletearticle/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await article.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete article" });
    console.log(error);
  }
});

// generic search
router.get("/search", async (req, res) => {
  const { keyword } = req.query;

  try {
    const imageList = await images.find({
      title: { $regex: keyword, $options: "i" }
    });

    res.status(200).json({ status: "ok", data: imageList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Failed to search imageList" });
  }
});


module.exports = router;
