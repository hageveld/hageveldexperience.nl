import { Reducer } from 'redux';
import { LOGIN, LOGOUT, LOGIN_SUCCESSFUL, AuthActions, AuthState } from './types';

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
        isLoggedIn: true,
        auth: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        auth: {}
      };
    default:
      return state;
  }
};