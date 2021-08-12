const pool = require('../db');

module.exports = {
  getQuestionsFromDB: (callback) => {
    pool.query('SELECT * FROM questions', callback);
  },
  getAnswersFromDB: (callback) => {
    pool.query('SELECT * FROM answers', callback);
  },
  getPhotosFromDB: (callback) => {
    pool.query('SELECT * FROM photos;', callback);
  }
}