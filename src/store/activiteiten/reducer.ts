import { Reducer } from 'redux';
import {
    INSCHRIJVING,
    UITSCHRIJVING,
    INGESCHREVEN,
    UITGESCHREVEN,
    UPDATE_ACTIVITEITEN,
    ActiviteitenActions,
    ActiviteitenState
} from './types';

const INITIAL_STATE: ActiviteitenState = {
    lastUpdated: 0,
    items: {},
    dagen: {}
};

export const reducer: Reducer<ActiviteitenState, ActiviteitenActions> = (
    state = INITIAL_STATE,
    action
): ActiviteitenState => {
    if (action.type === UPDATE_ACTIVITEITEN) {
        const items = {};
        const dagen = {};
        action.items.forEach(item => {
            if (item.ingeschreven) {
                if (!(item.dag in dagen)) {
                    dagen[item.dag] = 0;
                }
                dagen[item.dag]++;
            }
            items[item.id] = {
                id: item.id,
                dag: item.dag,
                ingeschreven: item.ingeschreven,
                deelnemers: item.deelnemers,
                loading: false
            };
        });
        return {
            ...state,
            items,
            dagen
        };
    } else {
        const item = { ...state.items[action.id] };
        const dagen = { ...state.dagen };
        switch (action.type) {
            case INSCHRIJVING:
                item.loading = true;
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.id]: item
                    }
                };
            case UITSCHRIJVING:
                item.loading = true;
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.id]: item
                    }
                };
            case INGESCHREVEN:
                if (!(item.dag in dagen)) {
                    dagen[item.dag] = 0;
                }
                dagen[item.dag]++;
                item.loading = false;
                item.ingeschreven = true;
                item.deelnemers++;
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.id]: item
                    },
                    dagen
                };
            case UITGESCHREVEN:
                if (!(item.dag in dagen)) {
                    dagen[item.dag] = 1;
                }
                dagen[item.dag]--;
                item.loading = false;
                item.ingeschreven = false;
                item.deelnemers--;
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.id]: item
                    },
                    dagen
                };
            default:
                return state;
        }
    }
};
