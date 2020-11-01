const activiteiten = [
    {
        id: 1,
        vak: 'AK',
        dag: 1,
        maxDeelnemers: 30
    },
    {
        id: 2,
        vak: 'AK',
        dag: 3,
        maxDeelnemers: 30
    },
    {
        id: 3,
        vak: 'BI',
        dag: 1,
        maxDeelnemers: 20
    },
    {
        id: 4,
        vak: 'BI',
        dag: 2,
        maxDeelnemers: 20
    },
    {
        id: 5,
        vak: 'BI',
        dag: 3,
        maxDeelnemers: 20
    },
    {
        id: 6,
        vak: 'DU',
        dag: 2,
        maxDeelnemers: 30
    },
    {
        id: 7,
        vak: 'EN',
        dag: 1,
        maxDeelnemers: 24
    },
    {
        id: 8,
        vak: 'EN',
        dag: 2,
        maxDeelnemers: 24
    },
    {
        id: 9,
        vak: 'EN',
        dag: 3,
        maxDeelnemers: 24
    },
    {
        id: 10,
        vak: 'GS',
        dag: 1,
        maxDeelnemers: 30
    },
    {
        id: 11,
        vak: 'GS',
        dag: 2,
        maxDeelnemers: 30
    },
    {
        id: 12,
        vak: 'GS',
        dag: 3,
        maxDeelnemers: 30
    },
    {
        id: 13,
        vak: 'LA',
        dag: 1,
        maxDeelnemers: 24
    },
    {
        id: 14,
        vak: 'LA',
        dag: 2,
        maxDeelnemers: 24
    },
    {
        id: 15,
        vak: 'MU',
        dag: 3,
        maxDeelnemers: 30
    },
    {
        id: 16,
        vak: 'NT',
        dag: 1,
        maxDeelnemers: 20
    },
    {
        id: 17,
        vak: 'NT',
        dag: 2,
        maxDeelnemers: 20
    },
    {
        id: 18,
        vak: 'NT',
        dag: 3,
        maxDeelnemers: 20
    },
    {
        id: 19,
        vak: 'SK',
        dag: 1,
        maxDeelnemers: 24
    },
    {
        id: 20,
        vak: 'SK',
        dag: 2,
        maxDeelnemers: 24
    },
    {
        id: 21,
        vak: 'SP',
        dag: 1,
        maxDeelnemers: 30
    },
    {
        id: 22,
        vak: 'SP',
        dag: 2,
        maxDeelnemers: 30
    },
    {
        id: 23,
        vak: 'SP',
        dag: 3,
        maxDeelnemers: 30
    },
    {
        id: 24,
        vak: 'TE',
        dag: 2,
        maxDeelnemers: 24
    },
    {
        id: 25,
        vak: 'TE',
        dag: 3,
        maxDeelnemers: 24
    },
    {
        id: 26,
        vak: 'WW',
        dag: 1,
        maxDeelnemers: 30
    },
    {
        id: 27,
        vak: 'WW',
        dag: 3,
        maxDeelnemers: 24
    },
    {
        id: 28,
        vak: 'WI',
        dag: 1,
        maxDeelnemers: 30
    },
    {
        id: 29,
        vak: 'WI',
        dag: 2,
        maxDeelnemers: 30
    },
    {
        id: 30,
        vak: 'WI',
        dag: 3,
        maxDeelnemers: 30
    },
    {
        id: 31,
        vak: 'AK',
        dag: 6,
        maxDeelnemers: 30
    },
    {
        id: 32,
        vak: 'FR',
        dag: 5,
        maxDeelnemers: 25
    },
    {
        id: 33,
        vak: 'BI',
        dag: 4,
        maxDeelnemers: 20
    },
    {
        id: 34,
        vak: 'BI',
        dag: 5,
        maxDeelnemers: 20
    },
    {
        id: 35,
        vak: 'BI',
        dag: 6,
        maxDeelnemers: 20
    },
    {
        id: 36,
        vak: 'EN',
        dag: 4,
        maxDeelnemers: 30
    },
    {
        id: 37,
        vak: 'EN',
        dag: 5,
        maxDeelnemers: 30
    },
    {
        id: 38,
        vak: 'EN',
        dag: 6,
        maxDeelnemers: 30
    },
    {
        id: 39,
        vak: 'GS',
        dag: 4,
        maxDeelnemers: 30
    },
    {
        id: 40,
        vak: 'GS',
        dag: 5,
        maxDeelnemers: 30
    },
    {
        id: 41,
        vak: 'GS',
        dag: 6,
        maxDeelnemers: 30
    },
    {
        id: 42,
        vak: 'LA',
        dag: 4,
        maxDeelnemers: 25
    },
    {
        id: 43,
        vak: 'LA',
        dag: 5,
        maxDeelnemers: 25
    },
    {
        id: 44,
        vak: 'NT',
        dag: 4,
        maxDeelnemers: 20
    },
    {
        id: 45,
        vak: 'NT',
        dag: 5,
        maxDeelnemers: 20
    },
    {
        id: 46,
        vak: 'NT',
        dag: 6,
        maxDeelnemers: 20
    },
    {
        id: 47,
        vak: 'SK',
        dag: 4,
        maxDeelnemers: 16
    },
    {
        id: 48,
        vak: 'SK',
        dag: 5,
        maxDeelnemers: 16
    },
    {
        id: 49,
        vak: 'SP',
        dag: 4,
        maxDeelnemers: 30
    },
    {
        id: 50,
        vak: 'SP',
        dag: 5,
        maxDeelnemers: 30
    },
    {
        id: 51,
        vak: 'SP',
        dag: 6,
        maxDeelnemers: 30
    },
    {
        id: 52,
        vak: 'TE',
        dag: 5,
        maxDeelnemers: 25
    },
    {
        id: 53,
        vak: 'TE',
        dag: 6,
        maxDeelnemers: 25
    },
    {
        id: 54,
        vak: 'WW',
        dag: 4,
        maxDeelnemers: 30
    },
    {
        id: 55,
        vak: 'WW',
        dag: 6,
        maxDeelnemers: 30
    },
    {
        id: 56,
        vak: 'WI',
        dag: 4,
        maxDeelnemers: 30
    },
    {
        id: 57,
        vak: 'WI',
        dag: 5,
        maxDeelnemers: 30
    },
    {
        id: 58,
        vak: 'WI',
        dag: 6,
        maxDeelnemers: 30
    },
    {
        id: 59,
        vak: 'MU',
        dag: 4,
        maxDeelnemers: 25
    },
    {
        id: 60,
        vak: 'MU',
        dag: 6,
        maxDeelnemers: 25
    },
    {
        id: 61,
        vak: 'VIA',
        dag: 7,
        maxDeelnemers: 60
    },
    {
        id: 62,
        vak: 'VIA',
        dag: 8,
        maxDeelnemers: 60
    }
];

export default activiteiten;
