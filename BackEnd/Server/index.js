// server/index.js

const path = require("path");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;


const connection = mysql.createConnection({
    host: "10.43.81.152",
    user: "root",
    password: "root",
    database: "kueski"
})


const app = express();

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({message: "API en funcionamiento :)"});
});

app.get("/api/requests", (req, res) => {
    const connection = mysql.createConnection({
        host: "10.43.81.152",
        user: "root",
        password: "root",
        database: "kueski"
    })
    
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
