const asyncHandler = require("express-async-handler");

const Company = require("../models/companies.model");

const getCompanies = asyncHandler(async (req, res) => {
  // console.log(req.query)
  // if(req.query){

  //   // const companies = await Company.find().where();
  //   res.status(200).json(companies);
  // }else{

    const page = parseInt(req.query.page) || 1;
    const show = parseInt(req.query.show) || 10;
    const companies = await Company.find({})
      .limit(show)
      .skip((page - 1) * show)
      .exec();
      res.status(200).json(companies);
  // }
});

const getCompany = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const company = await Company.findById(id).exec();
  res.status(200).json(company);
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
  getCompany,
};
