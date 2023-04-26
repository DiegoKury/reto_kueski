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

/*app.get("/api/requests", (req, res) => {
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
});*/

// Endpoint for /api/requests?type=:request_status
app.get("/api/requests", (req, res) => {
    const connection = mysql.createConnection({
        host: "10.43.81.152",
        user: "root",
        password: "root",
        database: "kueski"
    })
    request_status = req.query.type;
    connection.connect()
    if (request_status == "all"){
        sql = "SELECT * FROM requests";
    } else {
        sql = "SELECT * FROM requests WHERE request_status = '" + request_status + "'";
    }
    connection.query(sql, (err, result, fields) => {
        if (err){
            console.log("Error: ", err);
        }
        console.log("Result: ", result);
        res.json(result);
    })
});



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); 
