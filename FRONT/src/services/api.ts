import axios from 'axios';
import { LocalStorage } from '../consts/localStorage';

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

export default api;
