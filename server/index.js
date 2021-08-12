const express = require('express')
const app = express()
const path = require('path');
const port = 3000

const logREquests = (req, res, next) => {
  console.log(`Received a ${req.method} request from ${req.path}`);
}

app.use(logRequests);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Q-and-A listening at http://localhost:${port}`)
})