const db = require('../db/connection');
const inquirer = require('inquirer');
const showAllDep = require('./departmentFunc');


function addDepartment() {
    return inquirer
        .prompt({
            type: 'input',
            name: 'addDep', 
            message: 'Enter the name of the department to add: ',
        })
        .then(response => {
            console.log(response.addDep);
            const sql = `INSERT INTO departments (dep_name) VALUES (?)`
            const userInput = response.addDep;
            db.query(sql, userInput, (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('Input added to departments table.');
                // showAllDep();
            })
        })
}

module.exports = addDepartment;