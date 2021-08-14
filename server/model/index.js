const pool = require('../db');

module.exports = {
  getQuestionsFromDB: (queryParams, callback) => {
    // pool.query(`SELECT * FROM questions WHERE product_id = ${queryParams.product_id} limit ${queryParams.count} INNER JOIN ON SELECT * FROM answers WHERE questions.id = answers.questions_id `, callback);
    // pool.query(`SELECT * FROM questions WHERE product_id = ${queryParams.product_id} limit ${queryParams.count}`, callback);
    let queryRequest = `SELECT product_id,
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'question_id', id,
          'question-body', body,
          'question_date', date_written,
          'asker_name', asker_name,
          'question_helpfulness', helpfulness,
          'reported', reported
        )
      ) as results
      FROM questions
      WHERE product_id = ${queryParams.product_id}
      GROUP BY product_id
      limit ${queryParams.count}`

    let queryReq = `SELECT product_id,
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'question_id', id,
          'question-body', body,
          'question_date', date_written,
          'asker_name', asker_name,
          'question_helpfulness', helpfulness,
          'reported', reported
        )
      ) as results
      FROM questions
      WHERE product_id = ${queryParams.product_id}
      GROUP BY product_id
      limit ${queryParams.count}`

    pool.query(queryReq, callback);
  },
  getAnswersByIdFromDB: (id, callback) => {
    pool.query(`SELECT * FROM answers WHERE questions_id = ${id.question_id}`, callback);
  },
  getPhotosByIdFromDB: (id, callback) => {
    pool.query(`SELECT * from photos WHERE answer_id = ${id.answers_id}`, callback);
  }
}