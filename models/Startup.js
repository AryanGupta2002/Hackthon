const { model, Schema } = require("mongoose");

const mongoose = require("mongoose");
const startupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    domain: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    teamSize: {
        type: Number,
        required:true,
    },
    uniqueId:{
        type: String,
        required: true,
        unique: true,
    }
  },
  { timestamps: true }
);

module.exports = model("startup", startupSchema);
