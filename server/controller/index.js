const model = require('../model');

module.exports = {
  getQuestions: (req, res) => {
    var queryParams = {
      product_id: '1',
      page: '1',
      count: '5'
    }
    if (req.query.count) {
      queryParams.count = req.query.count;
    }
    if (req.query.page) {
      queryParams.page = req.query.page;
    }
    if (req.query.product_id) {
      queryParams.product_id = req.query.product_id;
    }
    model.getQuestionsFromDB(queryParams, (err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send(data.rows);
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