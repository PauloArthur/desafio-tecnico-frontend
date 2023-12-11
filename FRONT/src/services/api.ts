import { LocalStorage } from '@consts/localStorage';
import axios, { type InternalAxiosRequestConfig } from 'axios';

const { VITE_API_URL } = import.meta.env;

const api = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const handleLogin = async (): Promise<void> => {
  try {
    const jwtToken = await api.post('/login', {
      login: 'letscode',
      senha: 'lets@123',
    });
    localStorage.setItem(LocalStorage.ACCESS_TOKEN, jwtToken.data as string);
  } catch (error) {
    console.log(error);
  }
};

const requestInterceptor = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const authAccessToken = localStorage.getItem(LocalStorage.ACCESS_TOKEN);
  if (authAccessToken !== null) {
    config.headers.set('Authorization', `Bearer ${authAccessToken}`);
  }
  return config;
};

api.interceptors.request.use(requestInterceptor);

export default api;
