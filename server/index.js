const express = require("express");
const bodyParser = require("body-parser");
const { getUrlPreview } = require("./url.controller");
const app = express();
app.use(bodyParser.json());
const cors = require("cors");

app.use(cors());
app.get("/health", (req, res) => {
  return res.status(200).json({ data: "Server is running" });
});

app.post("/preview", getUrlPreview);

app.listen(3000, () => {
  console.log("server running at 3000");
});
