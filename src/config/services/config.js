import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://dev-pp.firebaseio.com',
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
