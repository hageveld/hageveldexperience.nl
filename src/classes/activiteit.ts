import Vak from '../models/vak';
import Dag from '../models/dag';

export default class Activiteit {
    vak: Vak;
    dag: Dag;
    maxDeelnemers: number;

    constructor(vak: Vak, dag: Dag, maxDeelnemers: number) {
        this.vak = vak;
        this.dag = dag;
        this.maxDeelnemers = maxDeelnemers;
    }

    get id() {
        return `${this.vak.id}-${this.dag.id}`;
    }
}