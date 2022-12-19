const asyncHandler = require("express-async-handler");

const Company = require("../models/companies.model");

const getCompanies = asyncHandler(async (req, res) => {
  let industries = [
    "Pharmaceutical & Life Sciences",
    "Public",
    "Corporate",
    "B2C",
    "B2B",
    "Printing & Publishing",
    "Advertising / PR / Events",
    "Private",
    "Indian MNC",
    "Conglomerate",
    "IT Services & Consulting",
    "Internet",
    "Foreign MNC",
    "SaaS",
  ];
  let page = parseInt(req.query.page) || 1;
  let show = parseInt(req.query.show) || 10;
  let sort = req.query.sort || "rating";
  let industry = req.query.industry || "all";

  industry === "all"
    ? (industry = [...industries])
    : (industry = req.query.industry?.split(" "));
  req.query.sort ? (sort = req.query.sort) : (sort = [sort]);

  const companies = await Company.find({})
    .where("industry")
    .in([...industry]);
  // .limit(show)
  // .skip((page - 1) * show);

  const total = await Company.countDocuments({
    industry: { $in: [...industry] },
  });

  const response = {
    error: null,
    total,
    page: page,
    show,
    industry: industries,
    companies,
  };

  res.status(200).json(response);
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
