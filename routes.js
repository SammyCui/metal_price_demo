const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');
const router = express.Router();

const app = express();
const PORT = 3000;

app.use(express.json())

app.post("/",  function (req, res) {

    const start = req.body.start;
    const end = req.body.end;
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Content-Length, Access-Control-Request-Method, Access-Control-Request-Headers");
    console.log(end);
    db.query(`SELECT * FROM silver_price where datetime > '${start}' and datetime < '${end}'` , function (error, results, fields) {
    const jsonData = JSON.parse(JSON.stringify(results));

     if(error) {
     console.log(error)
     }

     res.send(jsonData)
     console.log('data:', jsonData)
     console.log(`SELECT * FROM silver_price where datetime > ${start} and datetime < ${end}`)
     });
    });

// Starting our server.
app.listen(PORT, () => {
 console.log(`Server is running on ${PORT}`);
});
