const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const q =
        "select movies.id as id,movies.url as url, dayofmonth(released) as date,monthname(released) as month, year(released) as year, movies.title as title, ratings.rev_stars as rating, directors.name as director, movies.description as description from movies join directors on movies.director = directors.id join ratings on ratings.movie_id = movies.id";
    db.query(q, (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

router.get("/:id", (req, res) => {
    const q = "select title, description from movies where id=?";
    db.query(q, [req.params.id], (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

router.put("/:id", (req, res) => {
    const q = "update `movies` set `description`=? where `id`=?";
    db.query(q, [req.body.description, req.params.id], (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});
module.exports = router;