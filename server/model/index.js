const pool = require('../db');

module.exports = {
  getQuestionsFromDB: (callback) => {
    console.log('in model')
    pool.query('SELECT * FROM questions', callback);
  },
  getAnswersFromDB: (callback) => {
    pool.query('select * from answers', callback);
  },
  getPhotosFromDB: (callback) => {
    pool.query('select * from photos', callback);
  }
}