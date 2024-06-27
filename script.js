import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1000,
  duration: '30s',
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function ()
{
  const res = http.get('http://localhost:5046/WeatherForecast');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
