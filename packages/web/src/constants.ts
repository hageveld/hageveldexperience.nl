// 14:00 - 15:30

interface Vak {
    id: string;
    icon: string;
    naam: string;
}

export const vakken: Vak[] = [
    {
        id: "AK",
        icon: "globe",
        naam: "Aardrijkskunde"
    },
    {
        id: "BI",
        icon: "microscope",
        naam: "Biologie"
    },
    {
        id: "DU",
        icon: "book",
        naam: "Duits"
    },
    {
        id: "EN",
        icon: "book",
        naam: "Engels"
    },
    {
        id: "GS",
        icon: "landmark",
        naam: "Geschiedenis"
    },
    {
        id: "LA",
        icon: "book",
        naam: "Latijn"
    },
    {
        id: "NT",
        icon: "rocket",
        naam: "Natuur en Techniek"
    },
    {
        id: "SK",
        icon: "flask",
        naam: "Scheikunde"
    },
    {
        id: "SP",
        icon: "book",
        naam: "Spaans"
    },
    {
        id: "TE",
        icon: "pencil-alt",
        naam: "Tekenen"
    },
    {
        id: "WW",
        icon: "compass",
        naam: "Wereldwijs"
    },
    {
        id: "WI",
        icon: "calculator",
        naam: "Wiskunde"
    }
]

export const dagen = [
    {
        dag: 1,
        datum: '20-11-2019',
        beschrijving: '(+ rondleiding)'
    },
    {
        dag: 2,
        datum: '27-11-2019',
        beschrijving: '(+ puzzeltocht)'
    },
    {
        dag: 3,
        datum: '08-01-2020',
        beschrijving: '(+ speeddate)'
    }
];

export const activiteiten = [
    {
        vak: "AK",
        dag: 1,
        maxDeelnemers: 28
    },
    {
        vak: "AK",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "BI",
        dag: 1,
        maxDeelnemers: 24
    },
    {
        vak: "BI",
        dag: 2,
        maxDeelnemers: 24
    },
    {
        vak: "BI",
        dag: 3,
        maxDeelnemers: 24
    },
    {
        vak: "DU",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "EN",
        dag: 1,
        maxDeelnemers: 28
    },
    {
        vak: "EN",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "EN",
        dag: 3,
        maxDeelnemers: 28
    },
    {
        vak: "GS",
        dag: 1,
        maxDeelnemers: 28
    },
    {
        vak: "GS",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "GS",
        dag: 3,
        maxDeelnemers: 28
    },
    {
        vak: "LA",
        dag: 1,
        maxDeelnemers: 28
    },
    {
        vak: "LA",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "LA",
        dag: 3,
        maxDeelnemers: 28
    },
    {
        vak: "NT",
        dag: 1,
        maxDeelnemers: 24
    },
    {
        vak: "NT",
        dag: 2,
        maxDeelnemers: 24
    },
    {
        vak: "NT",
        dag: 3,
        maxDeelnemers: 24
    },
    {
        vak: "SK",
        dag: 1,
        maxDeelnemers: 24
    },
    {
        vak: "SK",
        dag: 2,
        maxDeelnemers: 24
    },
    {
        vak: "SK",
        dag: 3,
        maxDeelnemers: 24
    },
    {
        vak: "SP",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "SP",
        dag: 3,
        maxDeelnemers: 28
    },
    {
        vak: "TE",
        dag: 1,
        maxDeelnemers: 24
    },
    {
        vak: "TE",
        dag: 3,
        maxDeelnemers: 24
    },
    {
        vak: "WW",
        dag: 1,
        maxDeelnemers: 28
    },
    {
        vak: "WW",
        dag: 3,
        maxDeelnemers: 28
    },
    {
        vak: "WI",
        dag: 1,
        maxDeelnemers: 28
    },
    {
        vak: "WI",
        dag: 2,
        maxDeelnemers: 28
    },
    {
        vak: "WI",
        dag: 3,
        maxDeelnemers: 28
    }
];