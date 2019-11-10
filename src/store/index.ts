import { AuthState } from './auth';
import { ActiviteitenState } from './activiteiten';
import { configureStore } from './configureStore';

const { store, persistor } = configureStore();

export interface ApplicationState {
    auth: AuthState;
    activiteiten: ActiviteitenState;
}

export * from './configureStore';

export { store, persistor };
