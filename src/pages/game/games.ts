export interface Mirror {
    name: string;
    url: string;
}

export interface Download {
    name: string;
    description: string;
    url: string;
    mirrors?: Mirror[];
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
    "piratetreasure": {
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
                        name: "playInBrowser",
                        description: "withoutGameDownloading",
                        url: "/play/reksioiskarbpiratow",
                        source: "zagrajwreksia.pl"
                    },
                    // {
                    //     name: "Wersja poprawiona z łatkami",
                    //     description: "Wszystkie oficjalne łatki + łatki społeczności + łatki dla współczesnnych systemów operacyjnych",
                    //     url: "#",
                    //     size: "123 MB",
                    //     source: "zagrajwreksia.pl"
                    // },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20i%20Skarb%20Piratow.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/1.-reksio-i-skarb-piratow/1.%20Reksio%20i%20Skarb%20Pirat%C3%B3w.iso"
                            }
                        ],
                        size: "611 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-comoara-piratilor/Reksio%20si%20Comoara%20Piratilor.iso",
                        size: "363 MB",
                        source: "archive.org"
                    }
                ]
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
                downloads: [
                    {
                        name: "📦 ZIP Archive",
                        description: "This is a fan-made translation. Includes patches for modern operating systems. ",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20and%20the%20Pirate%20Treasure.zip",
                        mirrors: [
                            {
                                name: "mega.nz",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/0jthAKDC"
                            }
                        ],
                        size: "401 MB",
                        source: "Serena Pancu"
                    }
                ]
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
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20i%20Ufo.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-i-ufo/2.%20Reksio%20i%20Ufo.iso"
                            }
                        ],
                        size: "470 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-ozn-ul/Reksio%20si%20OZN-ul.iso",
                        size: "535 MB",
                        source: "archive.org"
                    }
                ]
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
                downloads: [
                    {
                        name: "📦 ZIP Archive",
                        description: "This is a fan made translation. Includes patches for modern operating systems.",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20and%20the%20UFO.zip",
                        mirrors: [
                            {
                                name: "mega.nz",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/lmtHnKLA"
                            }
                        ],
                        size: "468 MB",
                        source: "Serena Pancu"
                    }
                ]
            }
        ],
    },
    "wizards": {
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
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20i%20Czarodzieje.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/3.-reksio-i-czarodzieje/3.%20Reksio%20i%20Czarodzieje.iso"
                            }
                        ],
                        size: "677 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-magicienii/Reksio%20si%20Magicienii.iso",
                        size: "655 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
    "timemachine": {
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
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20i%20Wehikul%20Czasu.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/4.-reksio-i-wehikul-czasu/4.%20Reksio%20i%20Wehiku%C5%82%20Czasu.iso"
                            }
                        ],
                        size: "675 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-masina-timpului/Reksio%20si%20Masina%20Timpului.iso",
                        size: "688 MB",
                        source: "archive.org"
                    }
                ]
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
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/Reksio%20i%20Kapitan%20Nemo.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-i-kapitan-nemo/5.%20Reksio%20i%20Kapitan%20Nemo.iso"
                            }
                        ],
                        size: "533 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-capitanul-nemo/Reksio%20si%20Capitanul%20Nemo.iso",
                        size: "526 MB",
                        source: "archive.org"
                    }
                ]
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
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-i-kretes-w-akcji/Reksio%20i%20Kretes%20w%20Akcji.iso",
                        size: "640 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-kretes-in-actiune/Reksio%20si%20Kretes%20in%20Actiune.ISO",
                        size: "385 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: []
            },
        ],
    },
    "thirddimension": {
        title: "reksioAndKretesTheSecret",
        description: "reksioAndKretesTheSecretDescription",
        coverImage: "/covers/reksioikretestajemnicatrzeciegowymiaru.jpg",
        year: 2007,
        languages: [
            {
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-i-kretes-tajemnica-trzeciego-wymiaru/Reksio%20i%20Kretes%20Tajemnica%20Trzeciego%20Wymiaru.iso",
                        size: "365 MB",
                        source: "archive.org"
                    }
                ]
            },
            {
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-kretes-misterul-celei-de-a-treia-dimensiuni/Reksio%20si%20Kretes_%20Misterul%20celei%20de%20a%20treia%20dimensiuni.ISO",
                        size: "267 MB",
                        source: "archive.org"
                    }
                ]
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