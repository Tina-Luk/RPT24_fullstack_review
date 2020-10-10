const mysql = require('mysql');

const connection = mysql.createConnection({
    user: "root",
    password: "password",
    database: "Groceries"
})

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database is connected');
    }
})

module.exports = connection;