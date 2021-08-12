const express = require('express');
const app = express();
const pool = require('./db');
const path = require('path');
const port = 3000;

const logRequests = (req, res, next) => {
  console.log(`Received a ${req.method} request from ${req.path}`);
}

app.use(logRequests);
app.use(express.json()); // req.body

// ROUTES

// GET QUESTIONS

// GET ANSWERS

// GET PHOTOS

// POST QUESTIONS
app.post('/photos', async (req, res) => {
  try {
    // await
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
})

// POST ANSWERS

// POST PHOTOS

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Q-and-A listening at http://localhost:${port}`);
})