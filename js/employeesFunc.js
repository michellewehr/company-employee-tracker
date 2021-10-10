const db = require('../db/connection');
const prompts = require('../app');

//show all employees function using sql commands
showAllEmployees = async () => {
    const sql = `
    SELECT employees.id, employees.first_name, employees.last_name, 

    roles.title AS job_title,

    managers.manager_name AS manager, 

    departments.dep_name AS department,

    roles.salary AS salary
    
    FROM employees

    LEFT JOIN roles
    ON employees.role_id = roles.id

    LEFT JOIN managers
    ON employees.manager_id = managers.id

    LEFT JOIN departments
    ON employees.dep_id = departments.id;

    `;

    db.query(sql, (err, rows) => {
        if(err) throw err;
        console.table('Employees:', rows);
        promptUser();
    })
}

module.exports = showAllEmployees;