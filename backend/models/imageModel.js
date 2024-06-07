const mongoose = require("mongoose")

const Schema = mongoose.Schema

const imageSchema = new Schema(
    {
        image: String
    },
    {
        collection: "ImageDetails",
    }
)

module.exports = mongoose.model("ImageDetails", imageSchema)
