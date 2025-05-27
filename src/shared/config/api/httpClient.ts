import axios from 'axios';
import { BASE_URL } from './URLs';
import i18n from '@/shared/config/i18n';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  async (config) => {
    console.log(`API REQUEST to ${config.url}`, config);

    // Language configs
    const language = i18n.language;
    config.headers['Accept-Language'] = language;
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    return Promise.reject(error);
  },
);

export default httpClient;
