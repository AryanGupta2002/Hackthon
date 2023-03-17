const { model, Schema } = require("mongoose");

const mongoose = require("mongoose");
const companySchema = new Schema(
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
    website: {
        type: String,
        required:true,
    },
  },
  { timestamps: true }
);

module.exports = model("company", companySchema);
