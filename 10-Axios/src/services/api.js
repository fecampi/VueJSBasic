import axios from 'axios';

const api = axios.create({
  baseURL: 'https://heroic-gamma-143021-default-rtdb.firebaseio.com/',
});
export default api;