const db = require('../db/connection');
const updateManager = require('./updateManager');

function showAllManagers() {
    const sql = `SELECT * FROM managers`;
   
    db.query(sql, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.table('Departments:', rows);
    });
    // init();
}

module.exports = showAllManagers;
