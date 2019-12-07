import axios, { AxiosPromise } from 'axios';

export type SignUpData = {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignInData = {
  loginValue: string;
  password: string;
};

const signUp = (data: SignUpData): AxiosPromise => {
  return axios.post('/signup', data);
};

const signIn = (data: SignInData): AxiosPromise => {
  return axios.post('/signin', data);
};

export { signUp, signIn };
