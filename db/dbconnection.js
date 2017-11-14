const pg = require('pg-promise')({});


const config = {
  host:process.env.HOST,
  port:process.env.DB_PORT,
  database:process.env.DB,
  user:process.env.USER,
  password:process.env.PASSWORD

}

const db = pg(config || process.env.DATABASE_URL)

module.exports = db;
