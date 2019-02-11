const mysql = require("mysql");

let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  db = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("connected to the db");
});

module.exports = db;