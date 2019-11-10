import { combineReducers } from 'redux';
import { ApplicationState } from './index';
import { authReducer, AuthActions } from './auth';
import { activiteitenReducer, ActiviteitenActions } from './activiteiten';

export type ApplicationActions = AuthActions | ActiviteitenActions;

const rootReducer = combineReducers<ApplicationState>({
    auth: authReducer,
    activiteiten: activiteitenReducer
});

export default rootReducer;
