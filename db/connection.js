const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employee_db",
});
db.connect(function (err) {
  if (err) console.log("whyyyyyyy???", err);
});
module.exports = db;
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
