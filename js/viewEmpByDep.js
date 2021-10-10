const db = require('../db/connection');
const inquirer = require('inquirer');
const { managerChoices } = require('./updateManager');
const { departmentChoices } = require('./addRole');
const prompts = require('../app');


function showEmpByDep(department) {
    const sql = `SELECT employees.first_name, employees.last_name FROM employees WHERE dep_id = ?`;
    const params = department;
    db.query(sql, params, (err, res) => {
        if(err) {
            console.log(err);
        }
        console.table(res);
        promptUser();
    })
}


viewEmpByDep = async () => {
    const userChoice = await inquirer.prompt(
        {
            type: 'list',
            name: 'dep',
            message: 'Select the department to view employees within that department.',
            choices: await departmentChoices()
        }
    )
    const depId = userChoice.dep.charAt(0);
    showEmpByDep(depId)
}



module.exports = viewEmpByDep;