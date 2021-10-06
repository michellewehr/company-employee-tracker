const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const showAllDep = require('./js/departmentFunc');
const showAllRoles = require('./js/rolesFunc');
const showAllEmployees = require('./js/employeesFunc');


function init() {
    console.log(`
    =========================
    ====Begin Application====
    =========================`);
    startQ();
}

function startQ() {
    return inquirer 
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
                'Update an employee'
            ]})
            .then(data => {
                handleAction(data);
            })
}

function handleAction(data) {
    console.log(data.action);
    if (data.action === 'View all departments') {
       return showAllDep();
    }
    else if (data.action === 'View all roles') {
        return showAllRoles();
    }
    else if (data.action === 'View all employees') {
        return showAllEmployees();
    }
}

init()