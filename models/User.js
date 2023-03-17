const { model, Schema } = require("mongoose");

const mongoose = require("mongoose");
const userSchema = new Schema(
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

  },
  { timestamps: true }
);

module.exports = model("user", userSchema);
