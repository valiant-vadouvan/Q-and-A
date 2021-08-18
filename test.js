import http from 'k6/http';
import { sleep } from 'k6';
// import { Counter } from 'k6/metrics';

// let CounterErrors = new Counter('Errors');

export let options = {
  // vus: 100,
  // duration: '3s',
  // stages: [
  //   { duration: '1m', target: 10 },
  //   { duration: '10m', target: 10 },
  //   { duration: '1m', target: 0 },
  // ]

  // Stress test
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ]
};

export default function () {
  // http.get('http://localhost:5000/qa/questions');

  const API_BASE_URL = 'http://localhost:5000';

  http.batch([
    ['GET', `${API_BASE_URL}/qa/questions`],
    ['GET', `${API_BASE_URL}/qa/questions/1/answers`],
    ['POST', `${API_BASE_URL}/qa/questions/?body=this is test 123&name=test123&email=test123@test123.com&product_id=1`],
    ['POST', `${API_BASE_URL}/qa/questions/?body=this is test 123&name=test123&email=test123@test123.com&photos=URLfortesting123`],
    ['PUT', `${API_BASE_URL}/qa/questions/1/helpful`],
    ['PUT', `${API_BASE_URL}/qa/questions/1/report`],
    ['PUT', `${API_BASE_URL}/qa/answers/1/helpful`],
    ['PUT', `${API_BASE_URL}/qa/answers/1/report`],
  ]);

  sleep(1);
}
