const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const q =
        "SELECT MOVIES.TITLE AS MOVIE, REV_STARS AS STARS FROM RATINGS JOIN MOVIES ON MOVIE_ID = MOVIES.ID;";
    db.query(q, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = router;