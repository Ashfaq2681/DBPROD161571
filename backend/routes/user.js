const express = require("express")
const multer = require("multer")
const images = require("../models/imageModel.js")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

//controller functions
const { signupUser, loginUser } = require("../controllers/userController")

const router = express.Router()

//login route
router.post("/login", loginUser)

//signup route
router.post("/signup", signupUser)

//admin route
router.post("/uploadimage", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const fileName = req.file.filename

    try {
        await images.create({ image: fileName })
        res.status(200)
    } catch (error) {
        res.status(404)
        console.log(error)
    }
})

router.get("/getimage", async (req,res) => {
    try {
        images.find({})
        .then((data) => {
            res.send({ status: "ok", data: data })
        })
    } catch (error) {
        res.status(404)
        console.log(error)
    }
})

module.exports = router