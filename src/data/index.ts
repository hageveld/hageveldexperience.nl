import rawActiviteiten from './activiteiten';
import rawVakken from './vakken';
import rawDagen from './dagen';

import Activiteit from '../models/activiteit';

export const activiteiten = rawActiviteiten.map(rawActiviteit => {
    const vak = rawVakken.find(vakItem => vakItem.id === rawActiviteit.vak);
    const dag = rawDagen.find(dagItem => dagItem.id === rawActiviteit.dag);
    if (!vak) {
        throw new Error(`Vak "${rawActiviteit.vak}" niet gevonden`);
    }
    if (!dag) {
        throw new Error(`Dag "${rawActiviteit.dag}" niet gevonden`);
    }
    const activiteit: Activiteit = {
        id: rawActiviteit.id,
        vak,
        dag,
        maxDeelnemers: rawActiviteit.maxDeelnemers
    };
    return activiteit;
});

export const vakken = rawVakken;

export const dagen = rawDagen;

export const locked = false;
