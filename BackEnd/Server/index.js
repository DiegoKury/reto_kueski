// server/index.js
const keys = require("./keys")
const path = require("path");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;


const connection = mysql.createConnection({
    host: keys.host,
    user: keys.user,
    password: keys.password,
    database: "kueski",
    ssl: {
        ca: fs.readFileSync(path.resolve(__dirname, "../DigiCertGlobalRootCA.crt.pem"))
    }
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
        host: keys.host,
        user: keys.user,
        password: keys.password,
        database: "kueski",
        ssl: {
            ca: fs.readFileSync(path.resolve(__dirname, "../DigiCertGlobalRootCA.crt.pem"))
        }
    });
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
        console.log(result);
        for (i = 0; i < result.length; i++){
            if (result[i].request_status == "Complete" || result[i].request_status == "Rejected"){
                action = `<p>No action available</p>`;
            } else if (result[i].request_arco_right == "Access"){
                action = `<button variant="primary" class="btn btn-primary" onClick=mostrarModalAccess(${result[i].request_id}) style="font-size: 12px;"><i class fa fa-bars></i>Details</button>`;
            } else if (result[i].request_arco_right == "Rectify"){
                action = `<button type="button" class="btn btn-primary" onClick=mostrarModalRectify(${result[i].request_id}) style="font-size: 12px;"><i class fa fa-bars></i>Details</button>`;
            } else if (result[i].request_arco_right == "Cancel"){
                action = `<button type="button" class="btn btn-primary" onClick=mostrarModalCancel(${result[i].request_id}) style="font-size: 12px;"><i class fa fa-bars></i>Details</button>`;
            } else {
                action = `<button type="button" class="btn btn-primary" onClick=mostrarModalOppose(${result[i].request_id}) style="font-size: 12px;"><i class fa fa-bars></i>Details</button>`;
            }
            result[i].action = action;
        }
        res.json(result);
    })
});


// Endpoint for /api/request/:request_id
app.get("/api/request/:request_id", (req, res) => {
    const connection = mysql.createConnection({
        host: keys.host,
        user: keys.user,
        password: keys.password,
        database: "kueski",
        ssl: {
            ca: fs.readFileSync(path.resolve(__dirname, "../DigiCertGlobalRootCA.crt.pem"))
        }
    })
    request_id = req.params.request_id;
    connection.connect()
    sql = "SELECT * FROM requests INNER JOIN clients ON requests.client_id = clients.client_id WHERE request_id = " + request_id;
    connection.query(sql, (err, result, fields) => {
        if (err){
            console.log("Error: ", err);
        }
        console.log(result);
        res.json(result);
    });
});



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
}); 
