import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000'
});
const TOKEN = '';
const authInterceptor = config => {
  config.headers.Authorization = `Bearer ${TOKEN}`;
  return config;
}

httpClient.interceptors.request.use(authInterceptor)

export default httpClient;