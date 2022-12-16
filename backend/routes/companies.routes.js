const express = require("express");

const {
  getCompanies,
  createCompany,
  getCompany,
} = require("../controllers/companies.controler");

const companies = express.Router();

companies.get("/", getCompanies);
companies.get("/:id", getCompany);

companies.post('/', createCompany)

module.exports = companies;
