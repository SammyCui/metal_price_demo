const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tiger980330!",
  database: "AI_Lab"
});

module.exports = connection
