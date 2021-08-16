CREATE DATABASE q_and_a;
CREATE TABLE IF NOT EXISTS questions (
  ID BIGSERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written TEXT NOT NULL,
  asker_name VARCHAR(30) NOT NULL,
  asker_email VARCHAR(50) NOT NULL,
  reported BOOLEAN,
  helpfulness INT
);
CREATE TABLE IF NOT EXISTS answers (
  ID BIGSERIAL NOT NULL PRIMARY KEY,
  questions_id INT NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written TEXT NOT NULL,
  answerer_name VARCHAR(30) NOT NULL,
  answerer_email VARCHAR(50) NOT NULL,
  reported BOOLEAN,
  helpfulness SMALLINT,
  FOREIGN KEY (questions_id) REFERENCES questions(id)
);
CREATE TABLE IF NOT EXISTS photos (
  ID BIGSERIAL NOT NULL PRIMARY KEY,
  answer_id INT NOT NULL,
  photo_url VARCHAR(200),
  FOREIGN KEY (answer_id) REFERENCES answers(id)
);
-- load database
COPY questions (
  id,
  product_id,
  body,
  date_written,
  asker_name,
  asker_email,
  reported,
  helpfulness
)
FROM '/Users/seanpark/desktop/questions.csv' DELIMITER ',' CSV HEADER;
COPY answers (
  id,
  questions_id,
  body,
  date_written,
  answerer_name,
  answerer_email,
  reported,
  helpfulness
)
FROM '/Users/seanpark/desktop/answers.csv' DELIMITER ',' CSV HEADER;
COPY photos(id, answer_id, photo_url)
FROM '/Users/seanpark/desktop/answers_photos.csv' DELIMITER ',' CSV HEADER;
-- CREAT INDEX
CREATE INDEX productID on questions(product_id);
CREATE INDEX questionID on questions(id);
CREATE INDEX answerID on answers(id);
CREATE INDEX questionsID on answers(questions_id);
CREATE INDEX answersID on photos(answer_id);
CREATE INDEX photoID on photos(id);
-- CREATE INDEX productId_index ON questions (question)
-- UPDATE questions SET reported = 'true' WHERE reported = 1;
-- CREATE INDEX productID_index ON reviews (product_id);
-- ALTER TABLE skus ADD INDEX style_skus (styleId);
-- CREATE INDEX [index name] ON [table name] (COLUMN NAME);