// server/index.js

const path = require("path");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;


const connection = mysql.createConnection({
    host: "10.43.52.229",
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
        host: "192.168.1.24",
        user: "root",
        password: "root",
        database: "kueski"
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
            if (result[i].request_arco_right == "Access"){
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
        host: "192.168.1.24",
        user: "root",
        password: "root",
        database: "kueski"
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

app.get("/api/admins", (req, res) => {
    const connection = mysql.createConnection({
        host: "192.168.1.24",
        user: "root",
        password: "root",
        database: "kueski"
    })
    connection.connect();
    sql = "SELECT * FROM administrators";
    connection.query(sql, (err, result, fields) => {
        if (err){
            console.log("Error: ", err);
        }
        console.log(result);
        res.json(result);
    });
});

app.get("/api/admin/:admin_id", (req, res) => {
    const connection = mysql.createConnection({
        host: "192.168.1.24",
        user: "root",
        password: "root",
        database: "kueski"
    })
    admin_id = req.params.admin_id;
    connection.connect();
    sql = "SELECT * FROM administrators WHERE admin_id = " + admin_id;
    connection.query(sql, (err, result, fields) => {
        if (err){
            console.log("Error: ", err);
        }
        console.log(result);
        res.json(result);
    });
});

app.put("/api/client/:client_id", (req, res) => {
    const connection = mysql.createConnection({
        host: "192.168.1.24",
        user: "root",
        password: "root",
        database: "kueski"
    })
    client_id = req.params.client_id;
    connection.connect();

    //FALTA LEER LOS DATOS QUE SE QUIEREN CAMBIAR
    sql = "UPDATE clients SET client_name = '" + req.body.client_name + "', client_email = '" + req.body.client_email + "', client_phone = '" + req.body.client_phone 
        + "', client_address = '" + req.body.client_address + "' WHERE client_id = " + client_id;

    connection.query(sql, (err, result, fields) => {
        if (err){
            console.log("Error: ", err);
        }
        console.log(result);
        res.json(result);
    });
});

app.delete("/api/client/:client_id", (req, res) => {
    const connection = mysql.createConnection({
        host: "192.168.1.24",
        user: "root",
        password: "root",
        database: "kueski"
    })
    client_id = req.params.client_id;
    connection.connect();
    sql = "DELETE FROM clients WHERE client_id = " + client_id;
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
