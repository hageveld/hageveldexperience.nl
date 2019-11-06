import { AuthState } from './auth';
import { InschrijfState } from './inschrijving';

export interface ApplicationState {
    auth: AuthState;
    inschrijf: InschrijfState;
}

export * from './configureStore';
