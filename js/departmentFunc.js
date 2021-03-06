const init = require('../app');
const db = require('../db/connection');
const prompts = require('../app');

//show all department information from departments table in db
function showAllDep() {
    const sql = `SELECT * FROM departments`;
   
    db.query(sql, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.table('Departments:', rows);
        promptUser();
    });
}


module.exports = showAllDep;
