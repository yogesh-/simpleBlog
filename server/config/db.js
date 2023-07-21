const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"simpleBlog"
})

module.exports = db