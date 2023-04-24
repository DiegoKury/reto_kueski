// server/index.js

const path = require("path");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Kueski"
})


const app = express();

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({message: "API en funcionamiento :)"});
});

app.get("/api/requests", (req, res) => {
    connection.connect()

    connection.query("SELECT * FROM requests", (err, result, fields) => {
        if (err){
            console.log("Error: ", err);
        }
        console.log("Result: ", result);
        res.json(result);
    })

    connection.end()
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); 
