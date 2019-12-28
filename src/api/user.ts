import axios from '../core';

export const getUser = (byFindValue: string) => {
  console.log(byFindValue);
  return axios.get(`user/${byFindValue}`);
};
