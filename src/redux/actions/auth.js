import { signUp } from '../../api';

const fetchAuth = data => async dispatch => {
  signUp(data)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
};

export { fetchAuth };
