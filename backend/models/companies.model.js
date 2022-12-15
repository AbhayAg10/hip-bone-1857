const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  industry: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  logo: {
    type: String,
    default: "https://img.naukimg.com/logo_images/groups/v1/233602.gif",
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  about: {
    type: String,
    required: true,
  },
  companysize: {
    type: Number,
    required: true,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
