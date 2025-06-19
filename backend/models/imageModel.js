const mongoose = require("mongoose")

const Schema = mongoose.Schema


// const imageSchema = new Schema(
//     {
//         image: String
//     },
//     {
//         collection: "ImageDetails",
//     }
// )

const fileSchema = new Schema({
    preview: { type: String, required: true }, // URL for the preview image
    file: { type: String, required: true }     // URL for the category-specific file
});

const imageSchema = new Schema(
    {
        photos: { type: [String] },
        psds: { type: [fileSchema] }, 
        mockups: { type: [fileSchema] }, 
        vectors: { type: [fileSchema] }, 
        pngs: { type: [fileSchema] }, 
        socialMedia: { type: [fileSchema] },
        category: { type: String, required: true },
        title: { type: String, required: true }
    },
    {
        collection: "ImageDetails",
        timestamps: true
    }
);

module.exports = mongoose.model("ImageDetails", imageSchema)



