import axios from 'axios';

const signUp = data => {
  return axios.post('/signup', data);
};

export { signUp };
