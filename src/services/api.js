import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/felipekejo/iibit-json-server',
});

export default api;
