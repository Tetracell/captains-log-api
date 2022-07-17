const express = require("express");
const logs = express.Router();
const logsData = require("../models/log")

logs.get("/", (req, res) => {
    res.json(logsData);
});
logs.get("/:id", (req, res) => {
    console.log(req.params);
    const logChoice = req.params
    if (Number(logChoice.id) > logsData.length){
        res.status(404).redirect('/error');
    }
    res.json(logsData[Number(logChoice.id)]);
})

module.exports = logs;