require("dotenv").config();
const cTable = require("console.table");

const db = require("./db/connection");
const inquirer = require("inquirer");
// const { left } = require("inquirer/lib/utils/readline");

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
function viewRoles() {
  db.query("SELECT * FROM roles", (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log("Here are the company roles: \n");
    console.table(res);
    loadMainPromt();
  });
}
function viewEmployees() {
  db.query("SELECT * FROM employees", (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log("Here are your current employees: \n");
    console.table(res);
    loadMainPromt();
  });
}
function addDeparment() {
  inquirer
    .prompt({
      type: "input",
      name: "departmentName",
      message: "What is the name of the department?",
    })
    .then((answer) => {
      const sql = `INSERT INTO department (name)
      VALUES (?)`;
      const params = [answer.department_name];
      db.query(sql, params, (err, res) => {
        if (err) {
          console.error(err);
        }
        console.log("Added" + res.departmentName + "to Database");
        loadMainPromt();
      });
    });
}
function addRole() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "title",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
      {
        type: "input",
        name: "departmentID",
        message: "What is the deparment ID for this role",
      }
    )
    .then((answer) => {
      const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?,?,?)`;
      const params = [answer.title, answer.salary, answer.departmentID];
      db.query(sql, params, (err, res) => {
        if (err) {
          console.error(err);
        }
        console.log("Added" + res.title + "to Database");
        loadMainPromt();
      });
    });
}
function addEmployee() {
  inquirer
    .prompt(
      {
        type: "input",
        name: "firstName",
        message: "What the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "roleID",
        message: "What is the role ID for this employee",
      }
    )
    .then((answer) => {
      const sql = `INSERT INTO role (first_name, last_name, role_id)
  VALUES (?,?,?)`;
      const params = [answer.firstName, answer.lastName, answer.roleID];
      db.query(sql, params, (err, res) => {
        if (err) {
          console.error(err);
        }
        console.log("Added" + res.firstName + "to Database");
        loadMainPromt();
      });
    });
}
// function updateEmployee() {
//   inquirer
//     .prompt(
//       {
//         type: "input",
//         name: "firstName",
//         message: "What is the first name of the employee you'd like to update",
//       },
//       {
//         type: "input",
//         name: "lastName",
//         message: "What is the employee's last name?",
//       },
//       {
//         type: "input",
//         name: "roleID",
//         message: "What is their employee ID",
//       }
//     )
//     .then((answer) => {
//       const sql = `UPDATE employee SET role_id = ? WHERE first_name = ?`;
//       const params = [req.body.roleID, req.params.id];

//       db.query(sql, params, (err, result) => {
//         if (err) {
//           res.status(400).json({ error: err.message });
//         } else if (!result.affectedRows) {
//           res.json({
//             message: "Movie not found",
//           });
//         } else {
//           res.json({
//             message: "success",
//             data: req.body,
//             changes: result.affectedRows,
//           });
//         }
//       });
//     });
// }

loadMainPromt();
