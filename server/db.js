const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Chevy_1500",
    host: "localhost",
    port: 5431,
    database: "midwestern"
})

module.exports = pool