const router = require("express").Router();
const Portfolio = require("../models/Model");

// Get portfolio data
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne(); // Assuming you have only one portfolio document
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Create or update portfolio data
router.post("/", async (req, res) => {
  const { projects, home, about } = req.body;

  try {
    // Check if a portfolio document already exists
    let portfolio = await Portfolio.findOne();

    if (portfolio) {
      // Update the existing document
      portfolio.projects = projects || portfolio.projects;
      portfolio.home = home || portfolio.home;
      portfolio.about = about || portfolio.about;

      await portfolio.save();
      return res
        .status(200)
        .json({ message: "Portfolio updated successfully", portfolio });
    }

    // If no portfolio exists, create a new one
    portfolio = new Portfolio({
      projects,
      home,
      about,
    });

    await portfolio.save();
    res
      .status(201)
      .json({ message: "Portfolio created successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.put("/projects", async (req, res) => {
  const { projects } = req.body;

  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    portfolio.projects = projects || portfolio.projects;
    await portfolio.save();

    res
      .status(200)
      .json({ message: "Projects updated successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update the "home" section of the portfolio
router.put("/home", async (req, res) => {
  const { home } = req.body;

  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    portfolio.home = home || portfolio.home;
    await portfolio.save();

    res
      .status(200)
      .json({ message: "Home section updated successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update the "about" section of the portfolio
router.put("/about", async (req, res) => {
  const { about } = req.body;

  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    portfolio.about = about || portfolio.about;
    await portfolio.save();

    res
      .status(200)
      .json({ message: "About section updated successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
router.patch("/projects", async (req, res) => {
  const { newProject } = req.body;

  if (!newProject || Object.keys(newProject).length === 0) {
    return res.status(400).json({ message: "New project data is required" });
  }

  try {
    let portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    // Push the new project into the projects array
    portfolio.projects.push(newProject);
    await portfolio.save();

    res
      .status(200)
      .json({ message: "New project added successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
