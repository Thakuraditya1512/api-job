// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Create a new job listing
router.post('/', async (req, res) => {
  const { title, description, logoUrl, openings, location } = req.body;
  try {
    const newJob = new Job({ title, description, logoUrl, openings, location });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job listing' });
  }
});

// Get all job listings
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

// Get a specific job listing by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job' });
  }
});

// Update a job listing
router.put('/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job' });
  }
});

// Delete a job listing
router.delete('/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job' });
  }
});

module.exports = router;
