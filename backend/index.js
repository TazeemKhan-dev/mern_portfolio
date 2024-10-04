const dotenv = require("dotenv"); // Load dotenv first
dotenv.config(); // Call config method to load .env variables

const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const app = express();
const mongoose = require("mongoose");

// Import the portfolio route
const portfolioRouter = require("./routes/routes"); // Assuming it's saved as portfolio.js

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.use(cors());
app.use(express.json());

// Use the portfolio route for handling requests
app.use("/portfolio", portfolioRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
