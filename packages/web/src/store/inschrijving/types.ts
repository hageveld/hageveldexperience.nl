import { Action } from 'redux';

export interface InschrijfState {
  ingeschreven: boolean;
}

export const INSCHRIJF = 'INSCHRIJF';
export interface InschrijfAction extends Action {
  type: typeof INSCHRIJF;
}

export const INGESCHREVEN = 'INGESCHREVEN';
export interface IngeschrevenAction extends Action {
  type: typeof INGESCHREVEN;
  payload: any;
}

export const UITGESCHREVEN = 'UITGESCHREVEN';
export interface UitgeschrevenAction extends Action {
  type: typeof UITGESCHREVEN;
  payload?: Error;
}

export type InschrijfActions =
  | InschrijfAction
  | IngeschrevenAction
  | UitgeschrevenAction;