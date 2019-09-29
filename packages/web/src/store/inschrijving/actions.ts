import { ActionCreator } from 'redux';
import {
  INSCHRIJF,
  UITSCHRIJF,
  UITGESCHREVEN,
  INGESCHREVEN,
  InschrijfAction,
  UitschrijfAction,
  UitgeschrevenAction,
  IngeschrevenAction
} from './types';

export const inschrijf: ActionCreator<InschrijfAction> = (id: string) => ({
  type: INSCHRIJF,
  id
});

export const uitschrijf: ActionCreator<UitschrijfAction> = (id: string) => ({
  type: UITSCHRIJF,
  id
});

export const ingeschreven: ActionCreator<IngeschrevenAction> = (id: string) => ({
  type: INGESCHREVEN,
  id
});

export const uitgeschreven: ActionCreator<UitgeschrevenAction> = (id: string) => ({
  type: UITGESCHREVEN,
  id
});