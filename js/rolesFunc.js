const db = require('../db/connection');
const prompts = require('../app');


//show all roles function using sql commands
function showAllRoles() {
    const sql = `SELECT roles.title, roles.id, roles.salary,

    departments.dep_name AS department

    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id;`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table('Roles:', rows);
        promptUser();
    })
}



module.exports = showAllRoles;