const express = require("express");
const app = express();
const logsController = require("./controllers/logsController");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Captain's Log!");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.send("Error : Page not found");
});

module.exports = app;
