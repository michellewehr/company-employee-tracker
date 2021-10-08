const db = require('../db/connection');
const inquirer = require('inquirer');
const roleChoices = require('./addEmployee');


// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
function employeeChoices() {
    const employees = [];
    return new Promise ((resolve, reject) => {
        const sql = `SELECT id, first_name, last_name FROM employees`;
        db.query(sql, (err, res) => {
            if(err) {
                reject(err);
            }
            let responses = JSON.parse(JSON.stringify(res));
            responses.forEach(element => {
                employees.push(element.id + '. ' + element.first_name + ' ' + element.last_name);
            })
            resolve(employees);
        })
    })
}


updateEmployee = async () => {
    const roleUpdateRes = await inquirer.prompt([
        {
            type: 'list', 
            name: 'selectEmp',
            message: 'Which employee would you like to update?',
            choices: await employeeChoices()
        }, 
        {
            type: 'list', 
            name: 'selectEmp',
            message: 'What is this employees updated role?',
            choices: await roleChoices()
        }
    ])
}









module.exports = updateEmployee;