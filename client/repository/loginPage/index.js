import axios from 'axios';

export const loginRequest = async loginForm => {
  let result = await axios.request({url: 'http://localhost:8000/api/login', method: 'POST', data: loginForm});
  return result ? result.data : undefined;
};
