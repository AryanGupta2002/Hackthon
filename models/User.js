const { model, Schema } = require("mongoose");
// User Model
const mongoose = require("mongoose");
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    type: {
        type: String,
        required:true,
    },
    cv: {
        type:String,
        requried:true,
    }
  },
  { timestamps: true }
);

module.exports = model("user", userSchema);
