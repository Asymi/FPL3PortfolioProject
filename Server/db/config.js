const { Pool } = require('pg');

const pool = new Pool({ 
    user: "postgres",
    host: "localhost",
    database: "habits",
    password: process.env.DB_PASS,
    port: 5432
});

function run(q, values, callback){
    return pool.query(q, values, callback)
};

module.exports= { run };