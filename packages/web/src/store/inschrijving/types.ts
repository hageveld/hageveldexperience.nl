import { Action } from 'redux';

export interface InschrijfState {
  [key: string]: boolean;
}

export const INSCHRIJF = 'INSCHRIJF';
export interface InschrijfAction extends Action {
  type: typeof INSCHRIJF;
  id: string;
  dag: number;
}

export const UITSCHRIJF = 'UITSCHRIJF';
export interface UitschrijfAction extends Action {
  type: typeof UITSCHRIJF;
  id: string;
  dag: number;
}

export const INGESCHREVEN = 'INGESCHREVEN';
export interface IngeschrevenAction extends Action {
  type: typeof INGESCHREVEN;
  id: string;
  dag: number;
}

export const UITGESCHREVEN = 'UITGESCHREVEN';
export interface UitgeschrevenAction extends Action {
  type: typeof UITGESCHREVEN;
  id: string;
  dag: number;
}

export type InschrijfActions =
  | InschrijfAction
  | UitschrijfAction
  | IngeschrevenAction
  | UitgeschrevenAction;