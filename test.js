import http from 'k6/http';
import { sleep } from 'k6';
// import { Counter } from 'k6/metrics';

// let CounterErrors = new Counter('Errors');

export let options = {
  // vus: 100,
  // duration: '1s',

  stages: [
    { duration: '1s', target: 10 },
    { duration: '2s', target: 100 },
    { duration: '1s', target: 1 },
  ]

  // Stress test
  // base line
  // stages: [
  //   { duration: '1m', target: 10 },
  //   { duration: '2m', target: 1000 },
  //   { duration: '1m', target: 10 },
  // ]

  // load test
  // stages: [
  //   { duration: '5m', target: 2000 },
  //   { duration: '15m', target: 2000 },
  //   { duration: '5m', target: 0 },
  // ]

  // spite test
  // stages: [
  //   { duration: '1m', target: 2000 },
  //   { duration: '9m', target: 2000 },
  //   { duration: '3m', target: 10000 },
  //   { duration: '7m', target: 10000 },
  //   { duration: '10m', target: 0 },
  // ],

  // stages: [
  //   { duration: '30s', target: 2000 },
  //   { duration: '540s', target: 2000 },
  //   { duration: '180s', target: 10000 },
  //   { duration: '420s', target: 10000 },
  //   { duration: '300s', target: 0 },
  // ],

  // peak test
  // stages: [
  //   { duration: '5m', target: 100 },
  //   { duration: '10m', target: 100 },
  //   { duration: '5m', target: 0 },
  // ],
  // thresholds: {
  //   http_req_duration: ['p(99)<150'],
  //   // 99% of requests must complete below 150ms
  // },

  // soak test
  // stages: [
  //   { duration: '2m', target: 400 },
  //     // ramp up to 400 users
  //   { duration: '3h56m', target: 400 },
  //     // stay at 400 for ~4 hours
  //   { duration: '2m', target: 0 },
  //     // scale down (optional)
  // ]

  // stages: [
  //   { duration: '2m', target: 100 }, // below normal load
  //   { duration: '5m', target: 100 },
  //   { duration: '2m', target: 200 }, // normal load
  //   { duration: '5m', target: 200 },
  //   { duration: '2m', target: 300 }, // around the breaking point
  //   { duration: '5m', target: 300 },
  //   { duration: '2m', target: 400 }, // beyond the breaking point
  //   { duration: '5m', target: 400 },
  //   { duration: '10m', target: 0 }, // scale down. Recovery stage.
  // ]
};

export default function () {
  // http.get('http://localhost:5000/qa/questions');

  const API_BASE_URL = 'http://localhost:5000';

  http.batch([
    ['GET', `${API_BASE_URL}/qa/questions`],
    ['GET', `${API_BASE_URL}/qa/questions/1/answers`],
    ['POST', `${API_BASE_URL}/qa/questions/`],
    ['POST', `${API_BASE_URL}/qa/questions/1/answers`],
    ['PUT', `${API_BASE_URL}/qa/questions/1/helpful`],
    ['PUT', `${API_BASE_URL}/qa/questions/1/report`],
    ['PUT', `${API_BASE_URL}/qa/answers/1/helpful`],
    ['PUT', `${API_BASE_URL}/qa/answers/1/report`],
  ]);

  sleep(1);
}
