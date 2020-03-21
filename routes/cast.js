const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const q =
        " select actors.name as actor, movies.title as movie, role from movie_cast join actors on actor_id=actors.id join movies on movies.id = movie_id;";
    db.query(q, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = router;