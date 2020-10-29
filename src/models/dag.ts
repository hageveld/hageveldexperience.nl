export default interface Dag {
    id: number;
    titel: string;
    datum: string;
    startTijd: string;
    eindTijd: string;
    beschrijving?: string;
    hidden?: boolean;
}
