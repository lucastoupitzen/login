const sql = require("mysql")

module.exports = sql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "*ltfg737737",
    database: "login-database"

})