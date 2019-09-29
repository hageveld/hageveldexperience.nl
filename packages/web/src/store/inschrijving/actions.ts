import { ActionCreator } from 'redux';
import {
  INSCHRIJF,
  InschrijfAction, UITGESCHREVEN,
  INGESCHREVEN,
  UitgeschrevenAction,
  IngeschrevenAction
} from './types';

export const inschrijf: ActionCreator<InschrijfAction> = () => ({
  type: INSCHRIJF
});

export const ingeschreven: ActionCreator<IngeschrevenAction> = (payload: any) => ({
  type: INGESCHREVEN,
  payload
});

export const uitgeschreven: ActionCreator<UitgeschrevenAction> = (payload?: Error) => ({
  type: UITGESCHREVEN,
  payload
});