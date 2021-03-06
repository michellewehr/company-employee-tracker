const inquirer = require('inquirer');
const chalk = require('chalk')
const mysql = require('mysql2');
const cTable = require('console.table');
const showAllDep = require('./js/departmentFunc');
const showAllRoles = require('./js/rolesFunc');
const showAllEmployees = require('./js/employeesFunc');
const addDepartment = require('./js/addDep');
const { addRole } = require('./js/addRole');
const { addEmployee } = require('./js/addEmployee');
const { updateEmployee }= require('./js/updateEmployee');
const { updateManager } = require('./js/updateManager');
const viewEmpByMan = require('./js/viewEmpByMan');
const viewEmpByDep = require('./js/viewEmpByDep');
const { deleteDepartment, deleteRole, deleteEmployee } = require('./js/delete');
const getDepBudget = require('./js/depBudget');
const db = require('./db/connection');


//welcome users with init function
function init() {
    console.log(chalk.cyan(` 
    ███████ ███    ███ ██████  ██       ██████  ██    ██ ███████ ███████     ███    ███  █████  ███    ██  █████   ██████  ███████ ██████  
    ██      ████  ████ ██   ██ ██      ██    ██  ██  ██  ██      ██          ████  ████ ██   ██ ████   ██ ██   ██ ██       ██      ██   ██ 
    █████   ██ ████ ██ ██████  ██      ██    ██   ████   █████   █████       ██ ████ ██ ███████ ██ ██  ██ ███████ ██   ███ █████   ██████  
    ██      ██  ██  ██ ██      ██      ██    ██    ██    ██      ██          ██  ██  ██ ██   ██ ██  ██ ██ ██   ██ ██    ██ ██      ██   ██ 
    ███████ ██      ██ ██      ███████  ██████     ██    ███████ ███████     ██      ██ ██   ██ ██   ████ ██   ██  ██████  ███████ ██   ██
    `));
    promptUser();
}

//promptUser function that will be called again after the selected choice functions
module.exports = promptUser = async () => {
   const data = await inquirer 
        .prompt (
        {
            type: 'list',
            name: 'action', 
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee',
                'Update employee manager',
                'View employees by manager',
                'View employees by department',
                'Delete department',
                'Delete role',
                'Delete employee',
                'View department budget',
                'Exit app'
            ]})

    switch(data.action) {
        case "View all departments" : 
            showAllDep();
            break;
        case "View all roles":
            showAllRoles();
            break;
        case "View all employees":
            showAllEmployees();
            break;
        case "Add a department":
            addDepartment();
            break;
        case "Add a role":
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update an employee':
            updateEmployee();
            break;
        case 'Update employee manager':
            updateManager();
            break;
        case 'View employees by manager':
            viewEmpByMan();
            break;
        case 'View employees by department':
            viewEmpByDep();
            break;
        case 'Delete department':
            deleteDepartment();
            break;
        case 'Delete role':
            deleteRole();
            break;
        case 'Delete employee':
            deleteEmployee();
            break;
        case 'View department budget':
            getDepBudget();
            break;
        case 'Exit app':
            console.log(chalk.cyan(`
            ========================
            ====Exiting App=========
            ========================`));
            db.end();
            break;
    }
}



init();