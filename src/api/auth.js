import axios from 'axios';

const signUp = data => {
  return axios
    .post('/signup', data)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err.response.data.message;
    });
};

export { signUp };
