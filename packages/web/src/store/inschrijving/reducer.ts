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
        [action.id]: true
      };
    case UITSCHRIJF:
        return {
          ...state,
          [action.id]: false
        };
    case INGESCHREVEN:
      return {
        ...state,
        [action.id]: true
      };
    case UITGESCHREVEN:
      return {
        ...state,
        [action.id]: false
      };
    default:
      return state;
  }
};