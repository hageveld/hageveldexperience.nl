import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { authReducer, AuthActions } from './auth';
import { inschrijfReducer, InschrijfActions } from './inschrijving';

export type ApplicationActions = AuthActions | InschrijfActions;

const rootReducer = combineReducers<ApplicationState>({
  auth: authReducer,
  inschrijf: inschrijfReducer
});

export default rootReducer;