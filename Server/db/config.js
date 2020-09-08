const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: process.env.DB_PASS,
    host: 'localhost',
    port: 5432,
    database: "habits"
});

function run(q, values, callback){
    return pool.query(q, values, callback)
};

module.exports= { run };
