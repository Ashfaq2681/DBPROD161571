const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userImageSchema = new Schema(
    {
        image: Object
    },
    {
        collection: "UserImageDetails",
    }
)

module.exports = mongoose.model("UserImageDetails", userImageSchema)