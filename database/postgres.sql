CREATE DATABASE Q_and_A;
CREATE TABLE IF NOT EXISTS questions (
  ID BIGSERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written TEXT NOT NULL,
  asker_name VARCHAR(30) NOT NULL,
  asker_email VARCHAR(50) NOT NULL,
  reported SMALLINT,
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
  FOREIGN KEY (questions_id) REFERENCES questions(ID)
);
CREATE TABLE IF NOT EXISTS photos (
  ID BIGSERIAL NOT NULL PRIMARY KEY,
  answer_id INT NOT NULL,
  url VARCHAR(200),
  FOREIGN KEY (answer_id) REFERENCES answers(ID)
);