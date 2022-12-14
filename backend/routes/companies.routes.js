const express = require("express");

const { getCompanies } = require("../controllers/companies.controler");

const companies = express.Router();

companies.get("/", getCompanies);

module.exports = companies;
