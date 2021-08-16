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
const answersAPI = '/qa/answers/';

// GET QUESTIONS
app.get(questionsAPI, controller.getQuestions);

// GET ANSWERS
app.get(`${questionsAPI}:question_id/answers`, controller.getAnswersById);

// GET PHOTOS
app.get(`${questionsAPI}:question_id/answers/:answers_id/photos`, controller.getPhotosById);

// // ADD QUESTION
// app.post(questionsAPI, controller.postQuestions);

// // ADD ANSWER
// app.post(`${questionsAPI}:questions_id/answers`, controller.postAnswers);

// MARK QUESTION AS HELPFUL
app.put(`${questionsAPI}:question_id/helpful`, controller.markQuestionHelpful);

// //REPORT QUESTION
// app.put(`${questionsAPI}:question_id/report`, controller.reportQuestion);

// // MARK ANSWER AS HELPFUL
// app.put(`${answersAPI}:answer_id/helpful`, controller.markAnswerHelpful);

// // REPORT ANSWER
// app.put(`${answersAPI}:answer_id/report`, controller.reportAnswer);


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Q_and_A listening at http://localhost:${port}`);
})