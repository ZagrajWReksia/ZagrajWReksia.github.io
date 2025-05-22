export interface Download {
    name: string;
    description: string;
    url: string;
    size?: string;
    source: string;
}

export interface Language {
    langCode: string;
    langIcon: string;
    downloads: Download[];
}

export interface Index {
    title: string;
    description: string;
    coverImage: string;
    year: number;
    languages: Language[];
}

const games: Record<string, Index> = {
    "skarbpiratow": {
        title: "reksioAndPirates",
        description: "reksioAndPiratesDescription",
        coverImage: "/covers/reksioiskarbpiratow.jpg",
        year: 2002,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "🌐 Zagraj w przeglądarce",
                        description: "Bez pobierania gry",
                        url: "/play/reksioiskarbpiratow",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "Wersja poprawiona z łatkami",
                        description: "Wszystkie oficjalne łatki + łatki społeczności + łatki dla współczesnnych systemów operacyjnych",
                        url: "#",
                        size: "123 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
            {
                langCode: "cz",
                langIcon: "🇨🇿",
                downloads: []
            },
            {
                langCode: "hu",
                langIcon: "🇭🇺",
                downloads: []
            },
            {
                langCode: "en",
                langIcon: "🇬🇧",
                downloads: []
            }
        ],
    },
    "ufo": {
        title: "reksioAndUFO",
        description: "reksioAndUFODescription",
        coverImage: "/covers/reksioiufo.jpg",
        year: 2003,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
            {
                langCode: "cz",
                langIcon: "🇨🇿",
                downloads: []
            },
            {
                langCode: "hu",
                langIcon: "🇭🇺",
                downloads: []
            },
        ],
    },
    "czarodzieje": {
        title: "reksioAndWizards",
        description: "reksioAndWizardsDescription",
        coverImage: "/covers/reksioiczarodzieje.jpg",
        year: 2004,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
    "wehikul": {
        title: "reksioAndTimeMachine",
        description: "reksioAndTimeMachineDescription",
        coverImage: "/covers/reksioiwehikulczasu.jpg",
        year: 2004,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
    "nemo": {
        title: "reksioAndCaptainNemo",
        description: "reksioAndCaptainNemoDescription",
        coverImage: "/covers/reksioikapitannemo.jpg",
        year: 2006,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
    "inaction": {
        title: "reksioAndKretesInAction",
        description: "reksioAndKretesInActionDescription",
        coverImage: "/covers/reksioikreteswakcji.jpg",
        year: 2007,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
    "thirddimension": {
        title: "reksioAndKretesInAction",
        description: "reksioAndKretesInActionDescription",
        coverImage: "/covers/reksioikreteswakcji.jpg",
        year: 2007,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "Oryginalna wersja z płyty",
                        description: "Wersja dokładnie taka jak na płycie. Może nie działać na współczesnych systemach operacyjnych.",
                        url: "#",
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: []
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
}

export default games;