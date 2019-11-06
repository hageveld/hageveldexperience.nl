import Vak from '../models/vak';
import Dag from '../models/dag';

export default class Activiteit {
    id: number;
    vak: Vak;
    dag: Dag;
    maxDeelnemers: number;

    constructor(id: number, vak: Vak, dag: Dag, maxDeelnemers: number) {
        this.id = id;
        this.vak = vak;
        this.dag = dag;
        this.maxDeelnemers = maxDeelnemers;
    }
}
