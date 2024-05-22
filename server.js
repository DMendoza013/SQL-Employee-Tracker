// installing inquirer 
const inquirer = require('inquirer');
const express = require('express');
// creating a connection pool
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware for POST AND PUT requests, puts incoming request objects in JSON 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// creating a list of options so that the user can interact with the database
const options = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    },
]
// creating an init() function that loads the program on start up 
function init() {


    inquirer.prompt(options)
    .then(function(data){
        console.log(data.choice);
        switch(data.choice) {
            case 'View All Employees':
                pool.query('SELECT * FROM employees', function (err, {rows}) {
                    console.log(rows);
                });
                break;
            case 'View All Roles':
                pool.query('SELECT * FROM employees', function (err, {rows}) {
                    console.log(rows);
                });
                break;
            case 'View All Departments':
                pool.query('SELECT * FROM employees', function (err, {rows}) {
                    console.log(rows);
                });
                break;
        }
    });
}

// calling the initial function 
init();

const pool = new Pool ({
    user: 'postgres',
    // ENTER POSTGRES PASSWORD
    password: '',
    host: 'localhost',
    database: 'employess_db'
},
console.log('\nConnected to the employess_db database!')
)

pool.connect();
//npm start to run the program