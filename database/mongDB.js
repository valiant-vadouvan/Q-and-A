const mongoose = require('mongoose');

const questions = new mongoose.Schema({
  id: Number,
  product_id: Number,
  body: String,
  date: Date,
  asker_name: String,
  helpfulness: Number,
  reported: Boolean,
});

const answers = new mongoose.Schema({
  id: Number,
  qusetions_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
});

const photos = new mongoose.Schema({
  id: Number,
  url: String,
  answers_id: Number,
});

