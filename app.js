const express = require("express");
const app = express();
app.use(express.json()); // Important to be able to parse html data in as body
const logsController = require("./controllers/logsController");

app.get("/", (req, res) => {
  res.send("Welcome to Captain's Log!");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.send("Error : Page not found");
});

module.exports = app;
