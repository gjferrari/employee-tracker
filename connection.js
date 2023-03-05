const dotenv = require("dotenv");
const cTable = require("console.table");
const inquirer = require('inquirer');
const { left } = require("inquirer/lib/utils/readline");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_NAME,
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);

async fuction loadMainPromt () {
  return inquirer
  .prompt([
    {
    type: "list",
    name: "choice",
    message: "What do you want to do?",
    choices: [{
        name: "View all departments",
        value: "VIEW_DEPARTMENTS",
      },
      {
        name: "View all roles",
        value:"VIEW_ROLES",

      },
      {
        name: "View all employees",
        valuee:"VIEW_EMPLOYEES",

      },
      {
        name: "Add a departments",
        value: "ADD_DEPARTMENT",
      },
      {
        name: "Add a role",
        valuee:"ADD_ROLE",

      },
      {
        name: "Add an employees",
        valuee:"ADD_EMPLOYEE",

      },
      {
        name: "Update employee",
        valuee:"UPDATE_EMPLOYEE",

      },
    ]} ])
  

//     {
//       type: "input",
//       name: "username",
//       message: "What is your github username?",
//     },

//     {
//       type: "input",
//       name: "email",
//       message: "What is your email address?",
//     },
// }) =>
//   `#`




// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);;