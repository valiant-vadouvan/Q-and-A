const model = require('../model');

module.exports = {
  getQuestions: (req, res) => {
    const queryParams = {
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
        res.send({
          product_id: queryParams.product_id,
          results: data.rows[0].json_agg
        })
      }
    })
  },
  getAnswersById: (req, res) => {
    const queryParams = {
      question_id: req.params.question_id,
      page: '1',
      count: '5'
    }
    if (req.query.count) {
      queryParams.count = req.query.count;
    }
    if (req.query.page) {
      queryParams.page = req.query.page;
    }
    model.getAnswersByIdFromDB(queryParams, (err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send({
          question: queryParams.question_id,
          page: Number(queryParams.page),
          count: Number(queryParams.count),
          results: data.rows[0].json_agg
        })
      }
    })
  },
  getPhotosById: (req, res) => {
    model.getPhotosByIdFromDB(req.params, (err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.send(data.rows);
      }
    })
  }
};