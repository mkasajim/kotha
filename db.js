const sqlite3 = require('sqlite3').verbose();

var sql;

// Connect to DB
const db = new sqlite3.Database('./context.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
})
// Create a Table
/*sql = `CREATE TABLE conversation(id INTEGER PRIMARY KEY, user, kotha)`;

db.run(sql);
*/
//DROP Table
//db.run("DROP TABLE conversation");

// INSERT Data
/*sql = `INSERT INTO conversation(user,kotha) VALUES(?,?)`;
db.run(sql,
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
db.run(sql,
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
db.all(sql, [], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach(row => {
        console.log("User: " + row.user + "\n"+ "Kotha: " + row.kotha);
    });
});
