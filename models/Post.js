const { model, Schema } = require("mongoose");

const mongoose = require("mongoose");
const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    profession: {
        type: String,
        required:true,
    },
    cv: {
        type:String,
        requried:true,
    },
    skills: {
      type: String,
    },
    regno:{
      type:Number,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = model("post", postSchema);
