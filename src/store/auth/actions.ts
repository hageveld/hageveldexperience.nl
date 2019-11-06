import { ActionCreator } from 'redux';
import {
    LOGIN,
    LoginAction,
    LOGOUT,
    LOGIN_SUCCESSFUL,
    LogoutAction,
    LoginSuccessfulAction
} from './types';

export const connect: ActionCreator<LoginAction> = () => ({
    type: LOGIN
});

export const login: ActionCreator<LoginSuccessfulAction> = (payload: any) => ({
    type: LOGIN_SUCCESSFUL,
    payload
});

export const logout: ActionCreator<LogoutAction> = () => ({
    type: LOGOUT
});
