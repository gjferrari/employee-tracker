const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_NAME,
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);

mondel.exports = db;
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
