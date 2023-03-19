const { model, Schema } = require("mongoose");

const mongoose = require("mongoose");
const postSchema = new Schema(
  {
    link: {
      type: String,
      default: null,
      required:true
    },
    name:{
      type: String,
      required:true
    },
    type: {
      type: String,
      required:true,
    },
    userId:{
      type:Schema.Types.ObjectId,
      ref:'company'
    },
    applicants:{
      type: Array,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = model("post", postSchema);
