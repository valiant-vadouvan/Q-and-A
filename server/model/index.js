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
    limit ${queryParams.count}`;

    pool.query(queryRequest, callback);
  },
  getPhotosByIdFromDB: (id, callback) => {
    pool.query(`SELECT * from photos WHERE answer_id = ${id.answers_id}`, callback);
  },
  postQuestionsToDB: (queryParams, callback) => {
    const body = queryParams.body;
    const name = queryParams.name;
    const email = queryParams.email;
    const product_id = queryParams.product_id;
    let queryRequest = `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpfulness) VALUES (${product_id}, '${body}', current_timestamp, '${name}', '${email}', false, 0)`;
    pool.query(queryRequest, callback);
  },
  markQuestionHelpfulInDB: (id, callback) => {
    let queryRequest = `UPDATE questions SET helpfulness = helpfulness + 1 WHERE id = ${id}`;
    pool.query(queryRequest, callback);
  },
  reportQuestionInDB: (id, callback) => {
    let queryRequest = `UPDATE questions SET reported = true WHERE ID = ${id}`
    pool.query(queryRequest, callback);
  },
  markAnswerHelpfulInDB: (id, callback) => {
    let queryRequest = `UPDATE answers SET helpfulness = helpfulness + 1 WHERE id = ${id}`;
    pool.query(queryRequest, callback);
  },
  reportAnswerInDB: (id, callback) => {
    let queryRequest = `UPDATE answers SET reported = true WHERE id = ${id}`;
    pool.query(queryRequest, callback);
  }
}