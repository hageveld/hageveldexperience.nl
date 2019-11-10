import { Action } from 'redux';

export interface Activiteit {
    id: number;
    dag: number;
    ingeschreven: boolean;
    deelnemers: number;
    loading: boolean;
}

export interface ActiviteitenState {
    lastUpdated: number;
    items: {
        [key: number]: Activiteit;
    };
    dagen: {
        [key: number]: number;
    };
}

export const UPDATE_ACTIVITEITEN = 'UPDATE_ACTIVITEITEN';
export interface UpdateActiviteitenAction extends Action {
    type: typeof UPDATE_ACTIVITEITEN;
    items: {
        id: number;
        dag: number;
        ingeschreven: boolean;
        deelnemers: number;
    }[];
}

export const INSCHRIJVING = 'INSCHRIJVING';
export interface InschrijfAction extends Action {
    type: typeof INSCHRIJVING;
    id: number;
}

export const UITSCHRIJVING = 'UITSCHRIJVING';
export interface UitschrijfAction extends Action {
    type: typeof UITSCHRIJVING;
    id: number;
}

export const INGESCHREVEN = 'INGESCHREVEN';
export interface IngeschrevenAction extends Action {
    type: typeof INGESCHREVEN;
    id: number;
}

export const UITGESCHREVEN = 'UITGESCHREVEN';
export interface UitgeschrevenAction extends Action {
    type: typeof UITGESCHREVEN;
    id: number;
}

export type ActiviteitenActions =
    | InschrijfAction
    | UitschrijfAction
    | IngeschrevenAction
    | UitgeschrevenAction
    | UpdateActiviteitenAction;
