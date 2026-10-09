
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("All students");
});


router.get("/:id", (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

module.exports = router;
