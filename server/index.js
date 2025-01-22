const express = require("express");
const { getUrlPreview } = require("./url.controller");
const cors = require("cors");
const app = express();

// Use built-in express.json() instead of body-parser
app.use(express.json());
app.use(cors());

// Default route to check if the server is running
app.get("/", (req, res) => {
  return res.status(200).json({ data: "Server is running" });
});

// POST route to get URL preview
app.post("/preview", getUrlPreview);

// Set the port either from the environment or default to 3000

app.listen(3000, () => {
  console.log(`Server running at 3000`);
});

// Handle uncaught errors
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Depending on your setup, you may want to log this and shut down the server.
});
