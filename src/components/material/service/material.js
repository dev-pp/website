import axios from 'axios';

const _http = axios.create({
  baseURL: 'https://dev-pp.firebaseio.com',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default {
  list: () => {
    return _http.get('material.json');
  },
  fetchByDate: (date) => {
    return _http.get('material/' + date + '.json');
  },
}
