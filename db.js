const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dbms_proj"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to mysql..");
});

module.exports = connection;