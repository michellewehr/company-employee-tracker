const db = require('../db/connection');

function addDepartment() {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'addEmployee', 
            message: 'Enter the first name of the employee to add: '
        },
        {
            type: 'input',
            name: 'addEmployee', 
            message: 'Enter the last name of the employee to add: '
        }
    ])
        // .then(response => {
        //     console.log(response.addDep);
        //     const sql = `INSERT INTO departments (dep_name) VALUES (?)`
        //     const userInput = response.addDep;
        //     db.query(sql, userInput, (err, result) => {
        //         if(err) {
        //             console.log(err);
        //             return;
        //         }
        //         console.log('Input added to departments table.');
        //     })
        // })
}