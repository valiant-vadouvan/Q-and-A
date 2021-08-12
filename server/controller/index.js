const model = require('../model');

module.exports = {
  getQuestions: (req, res) => {
    model.getQuestionsFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        console.log(data);
      }
    })
  },
  getAnswers: (req, res) => {
    model.getAnswersFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        console.log(data);
      }
    })
  },
  getPhotos: (req, res) => {
    model.getPhotosFromDB((err, data) => {
      if (err) {
        console.log(`${err}`);
      } else {
        console.log(data);
      }
    })
  }
}

// const getQuestions = (req, res) => {
//   console.log('in controller');
//   // return new Promise((resolve, reject) => {
//   //   model.getQuestionsFromDB((err, data) => {
//   //     if (err) {
//   //       reject(err);
//   //     } else {
//   //       resolve(data);
//   //     }
//   //   })
//   // })
//   //   .then((data) => {
//   //     console.table(data.rows);
//   //     res.send(data);
//   //   })
//   //   .catch((err) => {
//   //     console.log(`Failed to receive results from db: ${err}`);
//   //     res.status(404).send('not found');
//   //   })
//   model.getQuestionsFromDB((err, data) => {
//     if (err) {
//       console.log(`${err}`);
//     } else {
//       console.table(data.rows);
//     }
//   })
// }