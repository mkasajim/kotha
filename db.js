const mysql = require('mysql');

var sql;
// Connection details
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
  });
// Connect to DB
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
//Create Database
/*sql = `CREATE DATABASE kotha`;
db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  */
// Create a Table
//sql = `CREATE TABLE conversation(id INTEGER PRIMARY KEY, user VARCHAR(1024), kotha VARCHAR(1024))`;

//db.query(sql);

//DROP Table
//db.run("DROP TABLE conversation");

// INSERT Data
/*sql = `INSERT INTO conversation(user,kotha) VALUES(?,?)`;
db.query(sql,
    ["Who is Muhammad (sm)?","He is the last prophet (sm) of Islam"],
    (err) => {
    if(err) return console.error(err.message);
});
*/
//UPDATE Data
/*sql = `UPDATE conversation SET user = ? WHERE id = ?`;
db.run(sql,
    ["Hi, Kotha", 2],
    (err) => {
    if(err) return console.error(err.message);
});
*/

// DELETE Data
/*
sql = `DELETE FROM conversation WHERE id >= ?`;
db.query(sql,
    [0],
    (err) => {
    if(err) return console.error(err.message);
});
*/
// Query the data
//sql = `SELECT user,kotha FROM conversation`;

sql = `select * from conversation
  where id > 
  ( (select COUNT(*) from conversation) - 5)`  // Get the last 5 conversation
db.query(sql, [], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach(row => {
        console.log("User: " + row.user + "\n"+ "Kotha: " + row.kotha);
    });
});

db.end()