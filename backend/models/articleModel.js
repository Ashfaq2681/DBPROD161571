// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const ArticleSchema = new Schema(
//   {
//     mainTitle: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: Object,
//       required: true,
//     },
//     mainDescription: {
//       type: String,
//       required: true,
//     },
//     heading1: {
//       type: String,
//     },
//     description1: {
//       type: String,
//     },
//     expertise: {
//       type: String,
//     },
//     author: {
//       type: String,
//     },
//     authorTitle: {
//       type: String,
//     },
//     heading2: {
//       type: String,
//     },
//     title2: {
//       type: String,
//     },
//     description2_1: {
//       type: String,
//     },
//     highlight: {
//       type: String,
//     },
//     writer: {
//       type: String,
//     },
//     description2_2: {
//       type: String,
//     },
//     heading3: {
//       type: String,
//     },
//     title3: {
//       type: String,
//     },
//     description3_1: {
//       type: String,
//     },
//     description3_2: {
//       type: String,
//     },
//   },
//   {
//     collection: "ArticleDetails",
//   }
// );

// module.exports = mongoose.model("ArticleDetails", ArticleSchema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    mainTitle: {
      type: String,
      required: true,
    },
    mainDescription: {
      type: String,
      required: true,
    },
    descriptionImage: {
      type: Object, 
      required: false, 
    },
    heading1: {
      type: String,
      required: false,
    },
    description1: {
      type: String,
      required: false,
    },
    description1Image: {
      type: Object,
      required: false,
    },
    heading2: {
      type: String,
      required: false,
    },
    description2_1: {
      type: String,
      required: false,
    },
    description2_2: {
      type: String,
      required: false,
    },
    heading3_1: {
      type: String,
      required: false,
    },
    description3_1: {
      type: String,
      required: false,
    },
    description3_1Image: {
      type: Object,
      required: false,
    },
    heading3_2: {
      type: String,
      required: false,
    },
    description3_2: {
      type: String,
      required: false,
    },
    description3_2Image: {
      type: Object,
      required: false,
    },
    heading3_3: {
      type: String,
      required: false,
    },
    description3_3: {
      type: String,
      required: false,
    },
    description3_3Image: {
      type: Object,
      required: false,
    },
    conclusion: {
      type: String,
      required: false,
    }
  },
  {
    collection: "ArticleDetails",
  }
);

module.exports = mongoose.model("ArticleDetails", ArticleSchema);
