import { ActionCreator } from 'redux';
import {
  LOGIN,
  LoginAction, LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  LoginFailedAction,
  LoginSuccessfulAction
} from './types';

export const connect: ActionCreator<LoginAction> = () => ({
  type: LOGIN
});

export const connectionSuccessful: ActionCreator<LoginSuccessfulAction> = (payload: any) => ({
  type: LOGIN_SUCCESSFUL,
  payload
});

export const connectionFailed: ActionCreator<LoginFailedAction> = (payload?: Error) => ({
  type: LOGIN_FAILED,
  payload
});