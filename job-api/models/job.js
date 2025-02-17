// models/job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  openings: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
