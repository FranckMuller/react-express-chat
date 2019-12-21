import { UPDATE_AUTH_STATE, AuthState } from './reducer';
import { Thunk } from '../types';
import { signIn, SignInData } from '../../api/auth';
import { push } from 'connected-react-router';
import { State } from '../rootReducer';
import { clearAlertState, updateAlertState } from '../alert/actions';

const updateAuthState = (data: AuthState) => ({
  type: UPDATE_AUTH_STATE,
  payload: data
});

export const authentication = (data: SignInData): Thunk => {
  return async (dispatch, getState: () => State) => {
    try {
      const res = await signIn(data);
      window.localStorage.setItem('authState', JSON.stringify(res.data));
      if (getState().alert.items.length > 0) {
        dispatch(clearAlertState());
      }
      dispatch(updateAuthState(res.data));
      dispatch(push('/im'));
    } catch (error) {
      if (!error.response) {
        dispatch(updateAlertState('error', 'ошибка сети, попробуйте повторить попытку позже'));
      } else {
        dispatch(updateAlertState('error', error.response.data.message));
      }
      throw Error(error);
    }
  };
};
