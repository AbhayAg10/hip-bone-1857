const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  jobApplication: {
    type: Number,
    default: 0,
  },
  openings: {
    type: Number,
    default: 1,
  },
  jobHighlights: {
    type: String,
  },
  qualifications: {
    type: String,
  },
  niceToHave: {
    type: String,
  },
  keySkills: {
    type: String,
  },
  website: {
    type: String,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
