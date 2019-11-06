import { Action } from 'redux';

export interface AuthState {
    isLoggedIn: boolean;
    auth?: any;
}

export const LOGIN = 'LOGIN';
export interface LoginAction extends Action {
    type: typeof LOGIN;
}

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export interface LoginSuccessfulAction extends Action {
    type: typeof LOGIN_SUCCESSFUL;
    payload: any;
}

export const LOGOUT = 'LOGOUT';
export interface LogoutAction extends Action {
    type: typeof LOGOUT;
    payload?: Error;
}

export type AuthActions = LoginAction | LoginSuccessfulAction | LogoutAction;
