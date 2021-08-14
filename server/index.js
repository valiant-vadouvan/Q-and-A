const express = require('express');
const app = express();
const pool = require('./db');
const controller = require('./controller');
const path = require('path');
const port = 5000;

const logRequests = (req, res, next) => {
  console.log(`Received a ${req.method} request from ${req.path}`);
  next();
}

app.use(logRequests);
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true }))

// ROUTES
const questionsAPI = '/qa/questions/';

// GET QUESTIONS
app.get(questionsAPI, controller.getQuestions);

// GET ANSWERS
app.get(`${questionsAPI}:question_id/answers`, controller.getAnswersById);

// GET PHOTOS
app.get(`${questionsAPI}:question_id/answers/:answers_id/photos`, controller.getPhotosById);

// POST QUESTIONS
// app.post('/photos', async (req, res) => {
//   try {
//     // await
//     console.log(req.body);
//   } catch (err) {
//     console.error(err.message);
//   }
// })

// POST ANSWERS
// POST PHOTOS

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Q_and_A listening at http://localhost:${port}`);
})