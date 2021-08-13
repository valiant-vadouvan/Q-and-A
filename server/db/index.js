const { Pool } = require('pg')

const pool = new Pool({
  user: 'seanpark',
  database: 'q_and_a',
  host: 'localhost',
  port: 5432,
});

pool.connect()
  .then(() => console.log(`Connected successfully to postgreSQL`))
  // .then(() => pool.query('SELECT * FROM answers'))
  // .then((data) => console.log(data.rows))
  // .then((data) => console.table(data.rows))
  .catch((err) => console.log(`error connection: ${err}`))
// .finally(() => pool.end());
// console.table(data.rows)

module.exports = pool;