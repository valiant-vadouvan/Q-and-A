const { Pool } = require('pg')

const pool = new Pool({
  user: 'seanpark',
  database: 'q_and_a',
  host: 'localhost',
  port: 5432,
});

pool.connect()
  .then(() => console.log(`Connected successfully to postgreSQL`))
  .then(() => pool.query('SELECT * FROM questions'))
  .then((data) => console.log(data))
  .catch((err) => console.log(`error connection: ${err}`))
// .finally(() => pool.end());
// console.table(data.rows)

module.export = pool;