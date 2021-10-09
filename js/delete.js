const inquirer = require('inquirer');
const db = require('../db/connection');
// const { managerChoices } = require('./updateManager');
const { departmentChoices } = require('./addRole');
const showAllDep = require('./departmentFunc');
const showAllRoles = require('./rolesFunc');
const { roleChoices } = require('./updateEmployee');
const {employeeChoices} = require('./updateEmployee');
const showAllEmployees = require('./employeesFunc');
const init = require('../app');

function deleteFromDepTable(depId) {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = depId;
    db.query(sql, params, (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log('Department deleted.');
        showAllDep();
    })
}

function deleteFromRolesTable(roleId) {
    const sql = `DELETE FROM roles WHERE id = ?`;
    const params = roleId;
    db.query(sql, params, (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log('Role deleted.');
        showAllRoles();
    })
}

function deleteFromEmployeeTable(employee) {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = employee;
    db.query(sql, params, (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log('Employee deleted.');
        showAllEmployees();
    })
}

deleteDepartment = async () => {
    const data = await inquirer.prompt(
        {
            type: 'list',
            name: 'department',
            message: 'Select the department you wish to delete.',
            choices: await departmentChoices()
        }
    )
    const dep = data.department.charAt(0);
    deleteFromDepTable(dep);
}

deleteRole = async() => {
    const data = await inquirer.prompt(
        {
            type: 'list',
            name: 'role',
            message: 'Select the role you wish to delete.',
            choices: await roleChoices()
        }
    )
    const role = data.role.charAt(0);
    deleteFromRolesTable(role);
}

deleteEmployee = async () => {
    const data = await inquirer.prompt(
        {
            type: 'list',
            name: 'emp',
            message: 'Select the employee you wish to delete from the database.',
            choices: await employeeChoices()
        }
    )
    const employee = data.emp.charAt(0);
    deleteFromEmployeeTable(employee);
}

module.exports = {deleteDepartment, deleteRole, deleteEmployee};