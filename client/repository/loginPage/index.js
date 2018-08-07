import axios from 'axios';

export const loginRequest = async loginForm => {
  console.log('repository');
  let result = await axios.request({url: 'localhost:8000/api/login', method: 'POST', data: loginForm});
  console.log(result);
};

