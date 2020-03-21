const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const q = "SELECT ID, NAME, DESCRIPTION, URL FROM DIRECTORS";
    db.query(q, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

router.get("/:id", (req, res) => {
    const q = "SELECT NAME, DESCRIPTION FROM DIRECTORS WHERE ID=?";
    db.query(q, [req.params.id], (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

router.put("/:id", (req, res) => {
    const q = "UPDATE `directors` SET `DESCRIPTION`=? where `ID`=?";
    db.query(q, [req.body.DESCRIPTION, req.params.id], (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = router;