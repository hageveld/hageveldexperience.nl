import rawActiviteiten from './activiteiten';
import rawVakken from './vakken';
import rawDagen from './dagen';

import Activiteit from '../classes/activiteit';

export const activiteiten = rawActiviteiten.map(activiteit => {
    const vak = rawVakken.find(vakItem => vakItem.id === activiteit.vak);
    const dag = rawDagen.find(dagItem => dagItem.id === activiteit.dag);
    if(!vak) {
        throw new Error(`Vak "${activiteit.vak}" niet gevonden`);
    }
    if(!dag) {
        throw new Error(`Dag "${activiteit.dag}" niet gevonden`);
    }
    return new Activiteit(activiteit.id, vak, dag, activiteit.maxDeelnemers);
});

export const vakken = rawVakken;

export const dagen = rawDagen;