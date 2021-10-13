import Dag from '../models/dag';

const dagen: Dag[] = [
    {
        id: 1,
        titel: 'Dag 1',
        datum: '24-11-2021',
        startTijd: '14:00',
        eindTijd: '15:30',
        beschrijving: '(+ rondleiding)',
        hidden: true
    },
    {
        id: 2,
        titel: 'Dag 2',
        datum: '01-12-2021',
        startTijd: '14:00',
        eindTijd: '15:30',
        beschrijving: '(+ puzzeltocht)',
        hidden: true
    },
    {
        id: 3,
        titel: 'Dag 3',
        datum: '19-01-2022',
        startTijd: '14:00',
        eindTijd: '15:30',
        beschrijving: '(+ speeddate)',
        hidden: true
    },
    {
        id: 4,
        titel: 'Dag 1',
        datum: '08-12-2021',
        startTijd: '14:00',
        eindTijd: '16:00',
        beschrijving: 'VIA Experience'
    },
    {
        id: 5,
        titel: 'Dag 2',
        datum: '09-02-2022',
        startTijd: '14:00',
        eindTijd: '16:00',
        beschrijving: 'VIA Experience'
    }
];

export default dagen;
