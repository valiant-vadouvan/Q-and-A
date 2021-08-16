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
  },
  postQuestions: (req, res) => {
    const queryParams = {
      body: '',
      name: '',
      email: '',
      product_id: '1'
    }

    if (req.query.body) {
      queryParams.body = req.query.body;
    }
    if (req.query.name) {
      queryParams.name = req.query.name;
    }
    if (req.query.email) {
      queryParams.email = req.query.email;
    }
    if (req.query.product_id) {
      queryParams.product_id = req.query.product_id;
    }

    model.postQuestionsToDB(req.body, queryParams, (err) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.status(200);
      }
    })
  },
  markQuestionHelpful: (req, res) => {
    const question_id = req.params.question_id

    // console.log(question_id)

    model.markQuestionHelpfulinDB(question_id, (err) => {
      if (err) {
        console.log(`${err}`);
      } else {
        res.status(200);
      }
    })
  }
};