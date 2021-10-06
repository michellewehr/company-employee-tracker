const db = require('../db/connection');

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

function showAllDep() {
    const sql = `SELECT * FROM departments`;
   
    db.query(sql, (err, rows) => {
        if(err) {
            console.log(err);
            return;
        }
        console.table(rows);
    })
}





module.exports = showAllDep;
