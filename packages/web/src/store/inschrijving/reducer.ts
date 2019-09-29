import { Reducer } from 'redux';
import { INSCHRIJF, UITSCHRIJF, INGESCHREVEN, UITGESCHREVEN, InschrijfActions, InschrijfState } from './types';

const INITIAL_STATE: InschrijfState = {};

export const reducer: Reducer<InschrijfState, InschrijfActions> = (
  state = INITIAL_STATE,
    action
): InschrijfState => {
  switch (action.type) {
    case INSCHRIJF:
      return {
        ...state,
        [action.id]: true,
        [`DAG-${action.dag}`]: true
      };
    case UITSCHRIJF:
        return {
          ...state,
          [action.id]: false,
          [`DAG-${action.dag}`]: false
        };
    case INGESCHREVEN:
      return {
        ...state,
        [action.id]: true,
        [`DAG-${action.dag}`]: true
      };
    case UITGESCHREVEN:
      return {
        ...state,
        [action.id]: false,
        [`DAG-${action.dag}`]: false
      };
    default:
      return state;
  }
};