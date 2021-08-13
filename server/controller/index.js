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
    // need to accept id from api request and pass it down to getAnswersFromDB as an argument
    model.getAnswersFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send(data.rows);
        console.log(data.rows);
      }
    })
  },
  getAnswersById: (req, res) => {
    model.getAnswersByIdFromDB(req.params, (err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        const result = data.rows;
        res.send(result);
        console.log(result);
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
  },
  getPhotosById: (req, res) => {
    model.getPhotosByIdFromDB(req.params, (err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        const result = data.rows;
        res.send(result);
        console.log(result);
      }
    })
  }
};