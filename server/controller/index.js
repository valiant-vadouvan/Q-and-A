const model = require('../model');

module.exports = {
  getQuestions: (req, res) => {
    model.getQuestionsFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send(data.rows);
        console.log(data.rows);
      }
    })
  },
  getAnswers: (req, res) => {
    model.getAnswersFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send(data.rows);
        console.log(data.rows);
      }
    })
  },
  getPhotos: (req, res) => {
    model.getPhotosFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send(data.rows);
        console.log(data.rows);
      }
    })
  }
}