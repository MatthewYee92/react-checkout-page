/*
  
*/


// establish connection framework for database
const mysql = require("mysql");

// establishing connection to database
exports.connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "checkout"
});


