const inquirer = require('inquirer');
const db = require('../db/connection');
const showAllManagers = require('./showAllManagers');
const prompts = require('../app');


function managerChoices() {
    const managers = [];
    return new Promise((resolve, reject) => {
        const sql = `SELECT id, manager_name FROM managers `;
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

function editManagerTable(id, name) {
    const sql = `UPDATE managers SET manager_name = ? WHERE id = ?`;
    const params = [name, id];
    db.query(sql, params, (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log('Manager updated!');
        // showAllManagers();
        promptUser();
    })
}

updateManager = async () => {
    const managerRes = await inquirer 
        .prompt([
            {
                type: 'list',
                name: 'selectedMan',
                message: 'Which manager would you like to update?',
                choices: await managerChoices()
            },
            {
                type: 'input',
                name: 'updatedMan',
                message: 'Enter the new managers name: '
            }
        ])
        const manId = managerRes.selectedMan.charAt(0);
        editManagerTable(manId, managerRes.updatedMan);
}

module.exports = { updateManager, managerChoices };