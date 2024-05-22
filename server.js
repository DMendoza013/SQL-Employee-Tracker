let inquirer = require('inquirer');

const options = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    },
]

function init() {
    inquirer.prompt(options)
    .then(function(data){
        console.log(data);
    })
}

init();