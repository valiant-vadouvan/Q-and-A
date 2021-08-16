const pool = require('../db');

module.exports = {
  getQuestionsFromDB: (queryParams, callback) => {
    let queryRequest = `SELECT (JSON_AGG(
      JSON_BUILD_OBJECT(
        'question_id', q.id,
        'question-body', q.body,
        'question_date', q.date_written,
        'asker_name', q.asker_name,
        'question_helpfulness', q.helpfulness,
        'reported', q.reported,
        'answers', (
          SELECT (JSON_OBJECT_AGG(
            a.id, JSON_BUILD_OBJECT(
              'id', a.id,
              'body', a.body,
              'date', a.date_written,
              'answerer_name', a.answerer_name,
              'helpfulness', a.helpfulness,
              'photos', (
                SELECT JSON_AGG(
                  JSON_BUILD_OBJECT(
                    'id', p.id,
                    'url', p.photo_url
                )) FROM photos p WHERE p.answer_id = a.id
          )))) FROM answers a WHERE a.questions_id = q.id
        )))) FROM questions q
        WHERE q.product_id = ${queryParams.product_id}
        limit ${queryParams.count}`

    pool.query(queryRequest, callback);
  },
  getAnswersByIdFromDB: (queryParams, callback) => {
    let queryRequest = `SELECT (JSON_AGG(
        JSON_BUILD_OBJECT(
          'answer_id', a.id,
          'body', a.body,
          'date', a.date_written,
          'answerer_name', a.answerer_name,
          'helpfulness', a.helpfulness,
          'photos', (
            SELECT JSON_AGG(
              JSON_BUILD_OBJECT(
                'id', p.id,
                'url', p.photo_url
              )
            ) FROM photos p WHERE p.answer_id = a.id
          )
        )
      ))
    FROM answers a
    WHERE a.questions_id = ${queryParams.question_id}
    limit ${queryParams.count}`

    pool.query(queryRequest, callback);
  },
  getPhotosByIdFromDB: (id, callback) => {
    pool.query(`SELECT * from photos WHERE answer_id = ${id.answers_id}`, callback);
  },
  postQuestionsToDB: (data, queryParams, callback) => {
    console.log(data);
  },
  markQuestionHelpfulinDB: (id, callback) => {
    let queryRequest = `UPDATE questions SET helpfulness = helpfulness + 1 WHERE id = ${id}`
    pool.query(queryRequest, callback);
  }
}