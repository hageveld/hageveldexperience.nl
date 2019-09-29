import { Reducer } from 'redux';
import { INSCHRIJF, INGESCHREVEN, UITGESCHREVEN, InschrijfActions, InschrijfState } from './types';

const INITIAL_STATE: InschrijfState = {
  ingeschreven: false
};

export const reducer: Reducer<InschrijfState, InschrijfActions> = (
  state = INITIAL_STATE,
    action
): InschrijfState => {
  switch (action.type) {
    case INSCHRIJF:
      return {
        ...state,
        ingeschreven: true
      };
    case INGESCHREVEN:
      return {
        ...state,
        ingeschreven: false
      };
    case UITGESCHREVEN:
      return {
        ...state,
        ingeschreven: false
      };
    default:
      return state;
  }
};