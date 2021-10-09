const mysql = require('mysql2');
const init = require('../app');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        //your sql password
        password: 'michelle12',
        database: 'company'
    },
);


module.exports = db;