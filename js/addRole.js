const db = require('../db/connection');
const inquirer = require('inquirer');
const showAllRoles = require('./rolesFunc');
const showAllDep = require('./departmentFunc');

const sql = `SELECT dep_name FROM departments`;
const choicesArr = [];
function choices() {
    db.query(sql, (res, rows) => {
    for(row of rows) {
        choicesArr.push(row.dep_name);
    }
    return choicesArr;
})
}


addRole = async () => {
  
  const data = await inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle', 
            message: 'Enter the title of the role to add: '
        },
        {
            type: 'input', 
            name: 'roleSalary',
            message: 'Enter the salary for this role: '
        },
        {
            type: 'list',
            name: 'roleDep',
            message: 'Which department would you like to add this role to?',
            choices: choices()
        }
    ])

}

module.exports = addRole;