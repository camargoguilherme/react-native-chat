import axios from 'axios';
import {
  URL_SERV
} from '../constants';

const api = axios.create({
  baseURL: URL_SERV
})

export const SIGNUP = async (username, password) => {
  const response = await api.post('/user', {
    username,
    password
  })
  return response.data;
}

export const LOGIN = async (username, password) => {
  const response = await api.post('/login', {
    username,
    password
  })
  return response.data;
}

export const UPDATE = async (params) => {

  const response = await api.put({
    params
  })
  return response.data;
}

export const AUTH = async (me) => {
  const response = await api.get('/auth', {
    headers: {
      'x-access-token': me.token
    }
  })
  return response.data.auth;
}


export const FINDALL = async (me) => {
  const response = await api.get('/user', {
    headers: {
      'x-access-token': me.token
    }
  })
  
  const users = response.data.filter( u => u._id !== me._id)
  return users;
}

export const SENDMESSAGE = async (params) => {
  const message = {
    chat_id,
    sender_id,
    receiver_id,
    messages:{
      _id = '',
      ...params.messages
    },
    token
  } = params
  
  const response = await api.post(`/chat/${chat_id}/message`, {message}, {
    headers:{
      'x-access-token': token
    }
  })
  
  return response.data;
}


export const CREATECHAT = async (params) => {
  const title = `${params.receiver_id}-${params.sender_id}`
  const users = [{_id: params.receiver_id},{_id: params.sender_id}]
  const response = await api.post(`/chat`, {title, users}, {
    headers:{
      'x-access-token': params.token
    }
  })
  return response.data;
}

export const FINDCHAT = async (params) => {
  const title1 = `${params.receiver_id}-${params.sender_id}`
  const title2 = `${params.sender_id}-${params.receiver_id}`
  let response = await api.get('/chat', 
  { 
    headers:{
      'x-access-token': params.token,
      'title1': title1,
      'title2': title2
    }
  })
  
  return response.data;
}

export default api;