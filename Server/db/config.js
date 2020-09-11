const Pool = require("pg").Pool;
require("dotenv").config();

// HEROKU CONFIG
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

// Use this config on local machine
// const pool = new Pool({    
//   user: 'postgres',
//   password: process.env.DB_PASS,
//   host: 'localhost',
//   port: 5432,
//   database: 'habits'
// });

function run(q, values, callback){
  return pool.query(q, values, callback)
};

module.exports = { run };