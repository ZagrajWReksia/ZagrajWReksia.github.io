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
    sourceUrl?: string;
}

export interface Language {
    langCode: string;
    langIcon: string;
    official: boolean;
    downloads: Download[];
}

export interface Index {
    group: string;
    title: string;
    description: string;
    coverImage: string;
    year: number;
    languages: Language[];
}

const games: Record<string, Index> = {
    "risp": {
        group: "main",
        title: "reksioAndPirates",
        description: "reksioAndPiratesDescription",
        coverImage: "/covers/reksioiskarbpiratow.jpg",
        year: 2002,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "playInBrowser",
                        description: "withoutGameDownloading",
                        url: "/play/reksioiskarbpiratow",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/RISP-Patched.zip",
                        size: "272 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Reksio%20i%20Skarb%20Pirat%C3%B3w%20%5Bpiklib8%5D.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Skarb%20Pirat%C3%B3w%20%5Bpiklib8%5D.iso"
                            }
                        ],
                        size: "640 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/RiSP-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "349 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-comoara-piratilor/Reksio%20si%20Comoara%20Piratilor.iso",
                        size: "363 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-comoara-piratilor"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Рекс и сокровища пиратов.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-sokrovishha-piratov/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D1%81%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%89%D0%B0%20%D0%BF%D0%B8%D1%80%D0%B0%D1%82%D0%BE%D0%B2.iso"
                            }
                        ],
                        size: "427 MB",
                        source: "Unknown"
                    }
                ]
            },
            {
                official: true,
                langCode: "cz",
                langIcon: "🇨🇿",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/rexiesakalozok/Rexi%20%C3%A9s%20a%20kal%C3%B3zok.iso",
                        size: "509 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesakalozok"
                    }
                ]
            },
            {
                official: true,
                langCode: "hu",
                langIcon: "🇭🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/rexiesakalozok/Rexi%20%C3%A9s%20a%20kal%C3%B3zok.iso",
                        size: "509 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesakalozok"
                    }
                ]
            },
            {
                official: false,
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
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    }
                ]
            }
        ],
    },
    "riu": {
        group: "main",
        title: "reksioAndUFO",
        description: "reksioAndUFODescription",
        coverImage: "/covers/reksioiufo.jpg",
        year: 2003,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/RiU-Patched.zip",
                        size: "330 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Reksio%20i%20UFO%20%5Bpiklib8%5D.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20UFO%20%5Bpiklib8%5D.iso"
                            }
                        ],
                        size: "584 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/RiU-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "339 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-ozn-ul/Reksio%20si%20OZN-ul.iso",
                        size: "535 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-ozn-ul"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Рекс и НЛО.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-nlo/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9D%D0%9B%D0%9E.iso"
                            }
                        ],
                        size: "553 MB",
                        source: "Unknown"
                    }
                ]
            },
            {
                official: true,
                langCode: "cz",
                langIcon: "🇨🇿",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/rexiesazufo/Rexi%20%C3%A9s%20az%20UFO.iso",
                        size: "689 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesazufo"
                    }
                ]
            },
            {
                official: true,
                langCode: "hu",
                langIcon: "🇭🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/rexiesazufo/Rexi%20%C3%A9s%20az%20UFO.iso",
                        size: "689 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesazufo"
                    }
                ]
            },
            {
                official: false,
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
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    }
                ]
            }
        ],
    },
    "ric": {
        group: "main",
        title: "reksioAndWizards",
        description: "reksioAndWizardsDescription",
        coverImage: "/covers/reksioiczarodzieje.jpg",
        year: 2004,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "Łatka No-CD + łatki społeczności + łatki dla współczesnnych systemów operacyjnych",
                        url: "https://iso.zagrajwreksia.pl/RiC/RiC-Patched.zip",
                        size: "555 MB",
                        source: "zagrajwreksia.pl i ric-workshop",
                        sourceUrl: "https://github.com/roostarreksio/ric-workshop"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiC/Reksio%20i%20Czarodzieje.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Czarodzieje.iso"
                            }
                        ],
                        size: "677 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiC/RiC-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "523 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-magicienii/Reksio%20si%20Magicienii.iso",
                        size: "655 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-magicienii"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiC/Рекс и волшебники.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-volshebniki/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%B2%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%D0%B8.iso"
                            }
                        ],
                        size: "704 MB",
                        source: "Unknown"
                    }
                ]
            },
        ],
    },
    "riwc": {
        group: "main",
        title: "reksioAndTimeMachine",
        description: "reksioAndTimeMachineDescription",
        coverImage: "/covers/reksioiwehikulczasu.jpg",
        year: 2004,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiWC/Reksio%20i%20Wehikul%20Czasu.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Wehiku%C5%82%20Czasu.iso"
                            }
                        ],
                        size: "675 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiWC/RiWC-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "560 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-masina-timpului/Reksio%20si%20Masina%20Timpului.iso",
                        size: "688 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-masina-timpului"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiWC/Рекс и Машина времени.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-mashina-vremeni/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%B0%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8.iso"
                            }
                        ],
                        size: "653 MB",
                        source: "Unknown",
                        sourceUrl: "https://archive.org/details/reks-i-mashina-vremeni"
                    }
                ]
            },
        ],
    },
    "rikn": {
        group: "main",
        title: "reksioAndCaptainNemo",
        description: "reksioAndCaptainNemoDescription",
        coverImage: "/covers/reksioikapitannemo.jpg",
        year: 2006,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKN/Reksio%20i%20Kapitan%20Nemo.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Kapitan%20Nemo.iso"
                            }
                        ],
                        size: "559 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKN/RiKN-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "796 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-capitanul-nemo/Reksio%20si%20Capitanul%20Nemo.iso",
                        size: "526 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-capitanul-nemo"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKN/Рекс и капитан Немо.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-kapitan-nemo-ru/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%20%D0%9D%D0%B5%D0%BC%D0%BE.iso"
                            }
                        ],
                        size: "554 MB",
                        source: "Unknown"
                    }
                ]
            },
        ],
    },
    "rikwa": {
        group: "extra",
        title: "reksioAndKretesInAction",
        description: "reksioAndKretesInActionDescription",
        coverImage: "/covers/reksioikreteswakcji.jpg",
        year: 2007,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKwA/Reksio i Kretes w Akcji.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Kretes%20w%20Akcji.iso"
                            }
                        ],
                        size: "670 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "improvedVersionName",
                        description: "improvedVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKwA/RiKwA-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "307 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-kretes-in-actiune/Reksio%20si%20Kretes%20in%20Actiune.ISO",
                        size: "385 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-kretes-in-actiune"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKwA/Рекс и Крот на тропе войны.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-krot-na-trope-vojny/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9A%D1%80%D0%BE%D1%82%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%BE%D0%BF%D0%B5%20%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B.iso"
                            }
                        ],
                        size: "409 MB",
                        source: "Unknown",
                    }
                ]
            },
        ],
    },
    "rikttw": {
        group: "extra",
        title: "reksioAndKretesTheSecret",
        description: "reksioAndKretesTheSecretDescription",
        coverImage: "/covers/reksioikretestajemnicatrzeciegowymiaru.jpg",
        year: 2007,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKTTW/Reksio%20i%20Kretes%20Tajemnica%20Trzeciego%20Wymiaru%201.1.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Kretes%20Tajemnica%20Trzeciego%20Wymiaru%201.1.iso"
                            }
                        ],
                        size: "382 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-kretes-misterul-celei-de-a-treia-dimensiuni/Reksio%20si%20Kretes_%20Misterul%20celei%20de%20a%20treia%20dimensiuni.ISO",
                        size: "267 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-kretes-misterul-celei-de-a-treia-dimensiuni"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKTTW/Рекс и его друзья в третьем измерении.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksi-i-ego-druzja-v-tretem-izmerenii/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%B5%D0%B3%D0%BE%20%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F%20%D0%B2%20%D1%82%D1%80%D0%B5%D1%82%D1%8C%D0%B5%D0%BC%20%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D0%B8.iso"
                            }
                        ],
                        size: "276 MB",
                        source: "Unknown"
                    }
                ]
            },
        ],
    },
    "rims": {
        group: 'second',
        title: "reksioAndCityOfSecrets",
        description: "reksioAndCityOfSecretsDescription",
        coverImage: "/covers/reksioimiastosekretow.jpg",
        year: 2009,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-i-miasto-sekretow/Reksio%20i%20Miasto%20Sekret%C3%B3w.iso",
                        size: "282 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-miasto-sekretow"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-kretes-in-orasul-secretelor/Reksio%20si%20Kretes%20in%20orasul%20secretelor.iso",
                        size: "719 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-kretes-in-orasul-secretelor"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reks-i-krot-v-podzemnom-gorod/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9A%D1%80%D0%BE%D1%82%20%D0%B2%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.iso",
                        size: "509 MB",
                        source: "Reksioblog",
                    }
                ]
            },
            {
                official: true,
                langCode: "de",
                langIcon: "🇩🇪",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/city-of-secrets-de/City%20of%20Secrets%20%28DE%29.iso",
                        size: "788 MB",
                        source: "Reksioblog",
                    }
                ]
            },
        ],
    },
    "rimsle": {
        group: 'second',
        title: "reksioAndCityOfSecretsLE",
        description: "reksioAndCityOfSecretsLEDescription",
        coverImage: "/covers/reksioimiastosekretowle.jpg",
        year: 2010,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/6.-reksio-i-miasto-sekretow-city-of-secrets-le/6.%20Reksio%20i%20Miasto%20Sekret%C3%B3w%2C%20City%20of%20Secrets%20%28LE%29.iso",
                        size: "1 GB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/6.-reksio-i-miasto-sekretow-city-of-secrets-le"
                    }
                ]
            },
            {
                official: true,
                langCode: "en",
                langIcon: "🇬🇧",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/6.-reksio-i-miasto-sekretow-city-of-secrets-le/6.%20Reksio%20i%20Miasto%20Sekret%C3%B3w%2C%20City%20of%20Secrets%20%28LE%29.iso",
                        size: "1 GB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/6.-reksio-i-miasto-sekretow-city-of-secrets-le"
                    }
                ]
            },
        ],
    },
    "cos2": {
        group: 'second',
        title: "reksioAndCityOfSecrets2",
        description: "reksioAndCityOfSecrets2Description",
        coverImage: "/covers/cityofsecrets2.jpg",
        year: 2013,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "unofficialPCPort",
                        description: "unofficialPCPortDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS2ep1_PC_2.0.1.zip",
                        size: "359 MB",
                        source: "Dove6, Mysliwy",
                        sourceUrl: "https://discord.com/channels/822931925618524240/909046389227536426/913841737225633813"
                    }
                ]
            },
            {
                official: true,
                langCode: "en",
                langIcon: "🇬🇧",
                downloads: [
                    {
                        name: "unofficialPCPort",
                        description: "unofficialPCPortDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS2ep1_PC_2.0.1.zip",
                        size: "359 MB",
                        source: "Dove6, Mysliwy",
                        sourceUrl: "https://discord.com/channels/822931925618524240/909046389227536426/913841737225633813"
                    }
                ]
            },
        ],
    },
    "abc": {
        group: 'educational',
        title: "abcWithReksio",
        description: "",
        coverImage: "/covers/abczreksiem.jpg",
        year: 2000,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/abc-z-reksiem/ABC%20z%20Reksiem.iso",
                        size: "611 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/abc-z-reksiem"
                    }
                ]
            },
        ],
    },
    "ortografia": {
        group: 'educational',
        title: "ortographyWithReksio",
        description: "",
        coverImage: "/covers/reksioiortografia.jpg",
        year: 2003,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-i-ortografia/Reksio%20i%20Ortografia.iso",
                        size: "640 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-ortografia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-si-ortografia/Reksio%20si%20Ortografia.iso",
                        size: "374 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-ortografia"
                    }
                ]
            },
        ],
    },
    "liczezreksiem": {
        group: 'educational',
        title: "countingWithReksio",
        description: "",
        coverImage: "/covers/liczezreksiem.png",
        year: 2002,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/licze-z-reksiem/Licz%C4%99%20z%20Reksiem.iso",
                        size: "698 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/licze-z-reksiem"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/matematica-cu-reksio/Matematica%20cu%20Reksio.iso",
                        size: "636 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/matematica-cu-reksio"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/schitaem-s-reksom/%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%20%D0%A0%D0%B5%D0%BA%D1%81%D0%BE%D0%BC.iso",
                        size: "642 MB",
                        source: "Reksioblog",
                    }
                ]
            },
        ],
    },
    "wesoleprzedszkolereksia": {
        group: 'educational',
        title: "reksioKindergarten",
        description: "",
        coverImage: "/covers/wesoleprzedszkolereksia.jpg",
        year: 2003,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/przedszkole-reksia/Przedszkole%20Reksia.iso",
                        size: "536 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/przedszkole-reksia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-la-gradinita-vesela/Reksio%20la%20gradinita%20vesela.ISO",
                        size: "420 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-la-gradinita-vesela"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reks-v-detskom-sadu/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B2%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC%20%D1%81%D0%B0%D0%B4%D1%83.iso",
                        size: "345 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reks-v-detskom-sadu"
                    }
                ]
            },
        ],
    },
    "lamiglowkireksia": {
        group: 'educational',
        title: "reksioPuzzles",
        description: "",
        coverImage: "/covers/lamiglowkireksia.jpg",
        year: 2008,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/lamiglowki-reksia-wielki-odkrywca/%C5%81amig%C5%82%C3%B3wki%20Reksia%20-%20Wielki%20Odkrywca.ISO",
                        size: "435 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/lamiglowki-reksia-wielki-odkrywca"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                langIcon: "🇷🇴",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-micul-intelept/Reksio%2C%20micul%20intelept.ISO",
                        size: "238 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-micul-intelept"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                langIcon: "🇷🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reks-na-ostrove-chudes/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%BD%D0%B0%20%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5%20%D0%A7%D1%83%D0%B4%D0%B5%D1%81.iso",
                        size: "300 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reks-na-ostrove-chudes"
                    }
                ]
            },
        ],
    },
    "reksioizwierzeta": {
        group: 'educational',
        title: "reksioAndAnimals",
        description: "",
        coverImage: "/covers/reksioizwierzeta.png",
        year: 2000,
        languages: [
            {
                official: true,
                langCode: "pl",
                langIcon: "🇵🇱",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-i-zwierzaki/Reksio%20i%20Zwierz%C4%99ta.iso",
                        size: "252 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-zwierzaki"
                    }
                ]
            },
            {
                official: true,
                langCode: "cz",
                langIcon: "🇨🇿",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-es-az-allatkak/Reksio_es_az_allatkak.zip",
                        size: "437 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-es-az-allatkak"
                    }
                ]
            },
            {
                official: true,
                langCode: "hu",
                langIcon: "🇭🇺",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        description: "originalCDVersionDescription",
                        url: "https://archive.org/download/reksio-es-az-allatkak/Reksio_es_az_allatkak.zip",
                        size: "437 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-es-az-allatkak"
                    }
                ]
            },
        ],
    },
}

export const gamesByGroup = (group: string) => {
    return Object.entries(games).filter(([_, game]) => game.group === group)
}

export default games;