const db = require('../db/connection');

function showAllEmployees() {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.table(rows);
    })
}

module.exports = showAllEmployees;