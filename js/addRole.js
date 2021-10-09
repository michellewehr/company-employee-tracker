const db = require('../db/connection');
const inquirer = require('inquirer');
const showAllRoles = require('./rolesFunc');
const showAllDep = require('./departmentFunc');
const promise = require('mysql2/promise');



function departmentChoices() {
    const departments = [];
    return new Promise ((resolve, reject) => {
        const sql = `SELECT id, dep_name FROM departments`;
        db.query(sql, (err, res) => {
            if(err) {
                reject(err);
            }
            let responses = JSON.parse(JSON.stringify(res));
            responses.forEach(element => {
                departments.push(element.id + '. ' + element.dep_name);
            }); 
        resolve(departments);
     })
    })
}

function addToDepTable(title, salary, depId) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [title, salary, depId]
    db.query(sql, params, (err, result) => {
        if(err) throw err;
        console.log('Role added to roles table.')
        showAllRoles();
    } )
}

addRole = async () => {
 const roleRes = await inquirer.prompt([
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
            choices: await departmentChoices()
        }
    ])
    const depId = roleRes.roleDep.charAt(0);
    addToDepTable(roleRes.roleTitle, roleRes.roleSalary, depId);
}


module.exports = { addRole, departmentChoices}; 

