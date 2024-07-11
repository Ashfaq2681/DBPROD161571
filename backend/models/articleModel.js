const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ArticleSchema = new Schema(
    {
        image: Object
    },
    {
        description: String
    },
    {
        collection: "ArticleDetails",
    }
)

module.exports = mongoose.model("ArticleDetails", ArticleSchema)