const init = require('../app');
const db = require('../db/connection');

function showAllDep() {
    const sql = `SELECT * FROM departments`;
   
    db.query(sql, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.table('Departments:', rows);
    });
    init();
}


module.exports = showAllDep;
