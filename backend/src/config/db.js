const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "duy",
  password: "duy15102004",
  database: "shoe_shop",
});

module.exports = pool;