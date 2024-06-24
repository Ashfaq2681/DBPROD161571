const express = require("express");
const multer = require("multer");
const images = require("../models/imageModel.js");
const userImages = require("../models/userImageModel.js");


const storageHome = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images/home");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const uploadHome = multer({ storage: storageHome });

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
const { signupUser, loginUser, createcheckoutSession } = require("../controllers/userController");

const router = express.Router();

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

//create-checkout-session route
router.post("/create-checkout-session", createcheckoutSession)

//admin image upload route
router.post(
  "/uploadimage/home",
  uploadHome.single("file"),
  async (req, res) => {
    console.log(req.body);
    const fileName = req.file.filename;

    try {
      await images.create({ image: fileName });
      res.status(200);
    } catch (error) {
      res.status(404);
      console.log(error);
    }
  }
);

//user image upload route
router.post(
  "/uploadimage/user",
  uploadUser.any("file"),
  async (req, res) => {
    console.log(req.body);
    const fileName = req.body;

    try {
      await userImages.create({ image: fileName });
      res.status(200);
    } catch (error) {
      res.status(404);
      console.log(error);
    }
  }
);

//home image retrieval route
router.get("/getimage", async (req, res) => {
  try {
    images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.status(404);
    console.log(error);
  }
});

module.exports = router;
