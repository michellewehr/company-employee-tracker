const db = require('../db/connection');


function showAllRoles() {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    })
}



module.exports = showAllRoles;