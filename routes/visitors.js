const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const q = "SELECT name, review FROM visitors";
    db.query(q, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    const q = "INSERT INTO visitors SET ?";
    db.query(q, req.body, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = router;