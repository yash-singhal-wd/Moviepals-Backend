const express = require("express");
const cors = require("cors");
const app = express();
const directors = require("./routes/directors");
const actors = require("./routes/actors");
const movies = require("./routes/movies");
const visitors = require("./routes/visitors");

app.use(cors());

//middleware function to parse request to body
app.use(express.json());
// routes
app.use("/movies", movies);
app.use("/actors", actors);
// app.use("/ratings", ratings);
// app.use("/cast", cast);
app.use("/directors", directors);
app.use("/visitors", visitors);

app.listen(3001, () => console.log("listening on port 3001"));
//connect to the database here...