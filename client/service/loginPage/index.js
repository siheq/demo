import * as loginRepository from '../../repository/loginPage';

export const login = async loginForm => {
  let result = await loginRepository.loginRequest(loginForm);
  return result;
};
