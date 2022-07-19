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
  res.json(logsData[logsData.length - 1]);
});

logs.delete("/:id", (req, res) => {
  const index = req.param;
  const flushedLog = logsData.splice(index, 1);
  res.json(flushedLog);
});

logs.put("/id", (req, res) => {
    const index = req.params;
    logsData[index] = req.body;
    res.json(logsData[index]);
})

module.exports = logs;
