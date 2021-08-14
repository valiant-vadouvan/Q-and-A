const { Pool } = require('pg')

const pool = new Pool({
  user: 'seanpark',
  database: 'q_and_a',
  host: 'localhost',
  port: 5432,
});

pool.connect()
  .then(() => console.log(`Connected successfully to postgreSQL`))
  .catch((err) => console.log(`error connection: ${err}`))

module.exports = pool;