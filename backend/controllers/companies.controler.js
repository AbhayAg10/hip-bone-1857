const asyncHandler = require("express-async-handler");

const Company = require("../models/companies.model");

const getCompanies = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const show = parseInt(req.query.show) || 10;
  const companies = await Company.find({})
    .limit(show)
    .skip((page - 1) * show)
    .exec();
  res.status(200).json(companies);
});

const createCompany = asyncHandler(async (req, res) => {
  const company = new Company(req.body);
  company.save((err, company) => {
    if (err) {
      console.log(err);
      res.status(500).json(err.message);
    } else {
      res.status(201).json(company);
    }
  });
});

module.exports = {
  getCompanies,
  createCompany,
};