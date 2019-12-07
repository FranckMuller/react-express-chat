import { UPDATE_AUTH_STATE, AuthState } from '../reducers/auth';
import { Thunk } from '../types';
import { signIn, SignInData } from '../../api/auth';
import { push } from 'connected-react-router';

export const fetchAuth = (data: SignInData): Thunk => {
  return async (dispatch, getState) => {
    try {
      const res = await signIn(data);
      console.log(res);
      dispatch(push('/im'));
      // dispatch({
      //   type: UPDATE_AUTH_STATE,
      //   payload: res,
      // })
    } catch (error) {
      if (!error.response) {
        dispatch(push('/im'));
        console.log('ошибка сети, попробуйте повторить попытку позже');
        return;
      }
      dispatch(push('/im'));
      console.log(error.response.data.message);
    }
  };
};
