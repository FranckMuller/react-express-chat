import { TypedAction } from '../types';

export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';
export const CLEAR_ATUTH_STATE = 'CLEAR_ATUTH_STATE';

type AuthAction = TypedAction<typeof UPDATE_AUTH_STATE, AuthState> | TypedAction<typeof CLEAR_ATUTH_STATE, undefined>;

export interface IAuthState {
  userId: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  authToken: string;
}

export type AuthState = IAuthState | {};

const initialState = {};

export const AuthReducer = (state = initialState, { type, payload }: AuthAction): AuthState => {
  switch (type) {
    case UPDATE_AUTH_STATE:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};
