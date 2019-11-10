import Vak from '../models/vak';
import Dag from '../models/dag';

export default interface Activiteit {
    id: number;
    vak: Vak;
    dag: Dag;
    maxDeelnemers: number;
}
