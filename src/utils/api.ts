import axios from 'axios';
import { navigate } from 'gatsby';
import { createHash } from 'crypto';
import { store } from '../store';

const API_ENDPOINT = 'https://api.hageveldexperience.nl';

const api = axios.create({
    baseURL: API_ENDPOINT
});

const reportError = (error: Error) => {
    const time = Date.now();
    const data = {
        time,
        error: {
            message: error.message,
            stack: error.stack
        },
        data: {
            type: 'API_INTERACTION_FAILURE'
        }
    };

    navigate('/error', {
        state: {
            data
        }
    });
};

export const register = async (email: string) => {
    await api
        .post('/register', {
            email: email.toLowerCase()
        })
        .catch(error => {
            reportError(error);
        });
};

export const login = async (email: string, wachtwoord: string) => {
    const hash = createHash('sha256')
        .update(wachtwoord)
        .digest('hex');
    const response: any = await api
        .post('/login', {
            email: email.toLowerCase(),
            wachtwoord: hash
        })
        .catch(error => {
            reportError(error);
        });
    return response.data;
};

export const activate = async (token: string, formData: any) => {
    const response: any = await api
        .post('/activate', {
            token,
            ...formData
        })
        .catch(error => {
            reportError(error);
        });
    return response.data.result;
};

export const getActivities = async () => {
    const state = store.getState();
    if (state.auth.isLoggedIn) {
        const response: any = await api
            .post('/activities', {
                email: state.auth.auth.email.toLowerCase(),
                wachtwoord: state.auth.auth.wachtwoord
            })
            .catch(error => {
                reportError(error);
            });
        return response.data.result;
    } else {
        const response: any = await api.get('/activities').catch(error => {
            reportError(error);
        });
        return response.data.result;
    }
};

export const addInschrijving = async (id: number) => {
    const state = store.getState();
    await api
        .post('/activity', {
            email: state.auth.auth.email.toLowerCase(),
            wachtwoord: state.auth.auth.wachtwoord,
            type: 'inschrijving',
            id: id.toString()
        })
        .catch(error => {
            reportError(error);
        });
};

export const removeInschrijving = async (id: number) => {
    const state = store.getState();
    await api
        .post('/activity', {
            email: state.auth.auth.email.toLowerCase(),
            wachtwoord: state.auth.auth.wachtwoord,
            type: 'uitschrijving',
            id: id.toString()
        })
        .catch(error => {
            reportError(error);
        });
};

export const getAdminData = async () => {
    const state = store.getState();
    const response: any = await api
        .post('/admin', {
            email: state.auth.auth.email.toLowerCase(),
            wachtwoord: state.auth.auth.wachtwoord
        })
        .catch(error => {
            reportError(error);
        });
    return response.data.result;
};

export const getAdminCloudWatchData = async () => {
    const state = store.getState();
    const response: any = await api
        .post('/admin/cloudwatch', {
            email: state.auth.auth.email.toLowerCase(),
            wachtwoord: state.auth.auth.wachtwoord
        })
        .catch(error => {
            reportError(error);
        });
    return response.data.result;
};
