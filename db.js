//Database connection
const Pool = require ("pg").Pool;

//Creation of Pool object where we hace the 
//dates for the DB connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "Aurorasl2972",
    port: 5432,
});

module.exports = pool;