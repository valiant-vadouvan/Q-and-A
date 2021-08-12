const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'seanpark',
  database: 'q_and_a',
  host: 'localhost',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log(`error connecton : ${err}`);
  } else {
    console.log(`Connected to postgreSQL`);
  }
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// })

// const client = New Client({
//   user: 'seanpark',
//   database: 'q_and_a',
//   host: 'locahost',
//   port: 5432,
// })

// client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// })

module.export = pool;