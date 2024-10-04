const mongoose = require("mongoose");

// Subschema for project information
const projectSchema = new mongoose.Schema({
  name: String,
  des: String,
  demo_url: String,
  img_url: String,
  git_url: String,
  categories: Array,
  technologies: Array,
});

// Subschema for home section
const homeSchema = new mongoose.Schema({
  title: String,
  heading_title: String,
  des: String,
  resume: String,
  project_types: Array,
});

// Subschema for about section
const aboutSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: true,
  },
  skills: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  experience: {
    type: [Object],
    required: true,
  },
});

// Main schema combining different sections
const unifiedSchema = new mongoose.Schema({
  projects: [projectSchema], // Array of project objects
  home: homeSchema, // Single home object
  about: aboutSchema, // Single about object
});

module.exports =
  mongoose.models.Portfolio || mongoose.model("Portfolio", unifiedSchema);
