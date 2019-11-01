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

export const inschrijf: ActionCreator<InschrijfAction> = (id: string, dag: number) => ({
  type: INSCHRIJF,
  id,
  dag
});

export const uitschrijf: ActionCreator<UitschrijfAction> = (id: string, dag: number) => ({
  type: UITSCHRIJF,
  id,
  dag
});

export const ingeschreven: ActionCreator<IngeschrevenAction> = (id: string, dag: number) => ({
  type: INGESCHREVEN,
  id,
  dag
});

export const uitgeschreven: ActionCreator<UitgeschrevenAction> = (id: string, dag: number) => ({
  type: UITGESCHREVEN,
  id,
  dag
});