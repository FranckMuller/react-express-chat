import { signUp } from '../../api';

const fetchAuth = data => async dispatch => {
  return signUp(data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      return err.response.data.message;
    });
};

export { fetchAuth };
