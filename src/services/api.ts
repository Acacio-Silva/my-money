import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://my-money-virutal.netlify.app//api'
});
