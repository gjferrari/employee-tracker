const dotenv = require("dotenv");
const cTable = require("console.table");
const inquirer = require("inquirer");
const { left } = require("inquirer/lib/utils/readline");

async function loadMainPromt() {
  return (
    inquirer
      .prompt([
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
              name: "Add a department",
              value: "ADD_DEPARTMENT",
            },
            {
              name: "Add a role",
              value: "ADD_ROLE",
            },
            {
              name: "Add an employee",
              value: "ADD_EMPLOYEE",
            },
            {
              name: "Update employee",
              value: "UPDATE_EMPLOYEE",
            },
          ],
        },
      ])

      // https://www.w3schools.com/js/js_switch.asp
      .then((answers) => {
        switch (answers.choice) {
          case "View all deparments":
            viewDepartments();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add a department":
            addDeparment();
            break;
          case "Add a role":
            addRole();
            break;
          case "Add an employee":
            addEmployee();
            break;
          case "Update employee":
            updateEmployee();
            break;
        }
      })
  );
}

function viewDepartments() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log("Here are your available departments: \n");
    console.table(res);
    loadMainPromt();
  });
}
function viewRoles() {}
function viewEmployees() {}
function addDeparment() {}
function addRole() {}
function addEmployee() {}
function updateEmployee() {
  const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
  const params = [req.body.review, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Movie not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
}
