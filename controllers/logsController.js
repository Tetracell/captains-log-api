const express = require("express");
const logs = express.Router();
const logsData = require("../models/log");

logs.get("/", (req, res) => {
  res.json(logsData);
});

logs.get("/:id", (req, res) => {
  const logChoice = req.params;
  if (Number(logChoice.id) > logsData.length) {
    res.status(404).redirect("/error");
  }
  res.json(logsData[Number(logChoice.id)]);
});

logs.post("/", (req, res) => {
  logsData.push(req.body);
  console.log("Creating log");
  res.json(logsData[logsData.length - 1]);
});

logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  const flushedLog = logsData.splice(id, 1);
  res.status(200).json(flushedLog);
  console.log("I am deleting index " + id);
});

logs.put("/id", (req, res) => {
    const index = req.params;
    logsData[index] = req.body;
    res.json(logsData[index]);
})

module.exports = logs;
