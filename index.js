const dotenv = require("dotenv");
const cTable = require("console.table");
const inquirer = require("inquirer");
const { left } = require("inquirer/lib/utils/readline");

async function loadMainPromt() {
  return inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: [
        {
          name: "View all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add a departments",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "Add an employees",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update employee",
          value: "UPDATE_EMPLOYEE",
        },
      ],
    },
  ]);
}
