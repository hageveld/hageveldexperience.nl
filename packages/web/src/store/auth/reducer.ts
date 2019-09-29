import { Reducer } from 'redux';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESSFUL, AuthActions, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  isLoggedIn: false
};

export const reducer: Reducer<AuthState, AuthActions> = (
  state = INITIAL_STATE,
    action
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: false,
        auth: action.payload
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};