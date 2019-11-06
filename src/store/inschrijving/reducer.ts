import { Reducer } from 'redux';
import {
    INSCHRIJF,
    UITSCHRIJF,
    INGESCHREVEN,
    UITGESCHREVEN,
    InschrijfActions,
    InschrijfState
} from './types';

const INITIAL_STATE: InschrijfState = {
    DAGEN: 0
};

export const reducer: Reducer<InschrijfState, InschrijfActions> = (
    state = INITIAL_STATE,
    action
): InschrijfState => {
    switch (action.type) {
        case INSCHRIJF:
            return {
                ...state,
                [action.id]: true,
                [`DAG-${action.dag}`]: true,
                DAGEN: state.DAGEN + 1
            };
        case UITSCHRIJF:
            return {
                ...state,
                [action.id]: false,
                [`DAG-${action.dag}`]: false,
                DAGEN: state.DAGEN - 1
            };
        case INGESCHREVEN:
            return {
                ...state,
                [action.id]: true,
                [`DAG-${action.dag}`]: true,
                DAGEN: state.DAGEN + 1
            };
        case UITGESCHREVEN:
            return {
                ...state,
                [action.id]: false,
                [`DAG-${action.dag}`]: false,
                DAGEN: state.DAGEN - 1
            };
        default:
            return state;
    }
};
