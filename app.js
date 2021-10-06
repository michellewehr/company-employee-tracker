const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

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
}

init()