const sql = require("mysql")

module.exports = sql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.userMYSQL,
    password: process.env.senhaMYSQL,
    database: "login-database"

})