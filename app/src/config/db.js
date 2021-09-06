const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    passwd: process.env.DB_PASSWD,
    database: process.env.DB_DATABASE,
});

db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

module.exports = db;