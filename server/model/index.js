const pool = require('../db');

module.exports = {
  getQuestionsFromDB: (queryParams, callback) => {
    // pool.query(`SELECT * FROM questions WHERE product_id = ${queryParams.product_id} limit ${queryParams.count} INNER JOIN ON SELECT * FROM answers WHERE questions.id = answers.questions_id `, callback);
    pool.query(`SELECT * FROM questions WHERE product_id = ${queryParams.product_id} limit ${queryParams.count}`, callback);
  },
  getAnswersFromDB: (callback) => {
    pool.query('SELECT * FROM answers', callback);
  },
  getAnswersByIdFromDB: (id, callback) => {
    pool.query(`SELECT * FROM answers WHERE questions_id = ${id.question_id}`, callback);
  },
  getPhotosFromDB: (callback) => {
    pool.query('SELECT * FROM photos', callback);
  },
  getPhotosByIdFromDB: (id, callback) => {
    pool.query(`SELECT * from photos WHERE answer_id = ${id.answers_id}`, callback);
  }
}