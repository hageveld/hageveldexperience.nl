import { ActionCreator } from 'redux';
import {
    Activiteit,
    INSCHRIJVING,
    UITSCHRIJVING,
    UITGESCHREVEN,
    INGESCHREVEN,
    UPDATE_ACTIVITEITEN,
    InschrijfAction,
    UitschrijfAction,
    UitgeschrevenAction,
    IngeschrevenAction,
    UpdateActiviteitenAction
} from './types';

export const schrijfIn: ActionCreator<InschrijfAction> = (id: number) => ({
    type: INSCHRIJVING,
    id
});

export const schrijfUit: ActionCreator<UitschrijfAction> = (id: number) => ({
    type: UITSCHRIJVING,
    id
});

export const ingeschreven: ActionCreator<IngeschrevenAction> = (id: number) => ({
    type: INGESCHREVEN,
    id
});

export const uitgeschreven: ActionCreator<UitgeschrevenAction> = (id: number) => ({
    type: UITGESCHREVEN,
    id
});

export const updateActiviteiten: ActionCreator<UpdateActiviteitenAction> = (
    items: Activiteit[]
) => ({
    type: UPDATE_ACTIVITEITEN,
    items
});
