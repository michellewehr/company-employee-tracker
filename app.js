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
const updateEmployee = require('./js/updateEmployee');
const updateManager = require('./js/updateManager');
const db = require('./db/connection');

db.connect(err => {
    if(err) throw err;
    init();
})

function init() {
    console.log(chalk.cyan(`
    ==============================
    ======Employee Tracker========
    ==============================`));
    promptUser();
}

function promptUser() {
     inquirer 
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
                'Exit app'
            ]})
            .then(data => {
                handleAction(data);
            })
}

function handleAction(data) {
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
        case 'Exit app':
            console.log(chalk.cyan(`
            ========================
            ====Exiting App=========
            ========================`));
            db.end();
            break;
    }
}


// init();

module.exports = init;