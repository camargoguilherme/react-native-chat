import axios from 'axios';
import { URL_SERV } from '../constants';

const api = axios.create({
    baseURL: URL_SERV
  })


export const SIGNUP = async (username, password) => {
  const response =  await api.post('/user',{
    username,
    password
  })
  return response.data;
}

export const LOGIN = async (username, password) => {
  const response =  await api.post('/login',{
    username,
    password
  })
  return response.data;
}

export const UPDATE = async (username, password) => {
  const response =  await api.put('/user',{
    username,
    password
  })
  return response.data;
}

export default api;