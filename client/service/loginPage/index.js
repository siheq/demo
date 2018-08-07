import * as loginRepository from '../../repository/loginPage';

export const login = async loginForm => {
  console.log('service');
  await loginRepository.loginRequest(loginForm);
};
