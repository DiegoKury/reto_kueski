// server/index.js

const path = require("path");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({message: "API en funcionamiento :)"});
});

app.get("/api/requests", (req, res) => {
    res.json({message: "Requests endpoint en funcionamiento)"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); 
