const dotenv = require("dotenv");
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_NAME,
    database: "employee_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

// db.query("SELECT * FROM students", function (err, results) {
//   console.log(results);
// });
