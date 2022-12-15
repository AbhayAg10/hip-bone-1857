const express = require("express");

const {
  getCompanies,
  createCompany,
} = require("../controllers/companies.controler");

const companies = express.Router();

companies.get("/", getCompanies);
// companies.get("/:id", getCompanies);

companies.post('/', createCompany)

module.exports = companies;
