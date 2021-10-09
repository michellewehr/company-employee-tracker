const db = require('../db/connection');
const inquirer = require('inquirer');
const promise = require('mysql2/promise');
const { departmentChoices} = require('./addRole');
const showAllEmployees = require('./employeesFunc');

function roleChoices() {
    const roles = [];
    return new Promise ((resolve, reject) => {
        const sql = `SELECT title, id FROM roles`;
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            let responses = JSON.parse(JSON.stringify(res));
            responses.forEach(element => {
                roles.push(element.id + '. ' + element.title);
            });
            resolve(roles);
        })
    })
}

function managerChoices() {
    const managers = [];
    return new Promise ((resolve, reject) => {
        const sql = `SELECT id, manager_name FROM managers`;
        db.query(sql, (err, res) => {
            if(err) {
                reject(err);
            }
            let responses = JSON.parse(JSON.stringify(res));
            responses.forEach(element => {
                managers.push(element.id + '. ' + element.manager_name);
            })
            resolve(managers);
        })
    })
}

function addToEmpTable(first, last, role, manager, department) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id, dep_id) VALUES (?, ?, ?, ?, ?)`;
    const params = [first, last, role, manager, department] 
    db.query(sql, params, (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(first + ' ' + last + 'added to employees table.');
        // showAllEmployees();
    })
}

addEmployee = async () => {
    const employeeRes = await inquirer
        .prompt([
        {
            type: 'input',
            name: 'empFirst', 
            message: 'Enter the first name of the employee to add: '
        },
        {
            type: 'input',
            name: 'empLast', 
            message: 'Enter the last name of the employee to add: '
        }, 
        {
            type: 'list',
            name: 'empRole',
            message: 'Select the role for this employee.',
            choices: await roleChoices()
        }, 
        {
            type: 'list', 
            name: 'empManager', 
            message: 'Enter the manager to whom this employee will report to.',
            choices: await managerChoices()
        }, 
        {
            type: 'list',
            name: 'empDep',
            message: 'Which department does this employee work within?',
            choices: await departmentChoices()
        }
    ])
    const roleId = employeeRes.empRole.charAt(0);
    const managerId = employeeRes.empManager.charAt(0);
    const depId = employeeRes.empDep.charAt(0);
    addToEmpTable(employeeRes.empFirst, employeeRes.empLast, roleId, managerId, depId);
}

// module.exports = addEmployee;
// module.exports = roleChoices;

module.exports = { addEmployee, roleChoices };