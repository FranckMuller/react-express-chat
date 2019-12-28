import axios from '../core';

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

export const signUp = (data: SignUpData) => {
  return axios.post('/signup', data);
};

export const signIn = (data: SignInData) => {
  return axios.post('/signin', data);
};
