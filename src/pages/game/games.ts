export interface Mirror {
    name: string;
    url: string;
}

export interface Download {
    name: string;
    icon?: string;
    description: string;
    instructions?: string | { key: string; args: Record<string, unknown> };
    url: string;
    mirrors?: Mirror[];
    size?: string;
    source: string;
    sourceUrl?: string;
}

export interface Language {
    langCode: string;
    official: boolean;
    lost?: boolean;
    lostNotes?: string;
    downloads: Download[];
}

export interface Instruction {
    type: string;
    content: string;
}

export interface Index {
    group: string;
    title: string;
    description: string;
    instructions?: Instruction[];
    coverImage: string;
    year: number;
    languages: Language[];
}

const ddrawDownload: Download = {
    name: 'cncDrawName',
    icon: '🛠',
    description: 'cncDrawDescription',
    url: 'https://github.com/FunkyFr3sh/cnc-ddraw/releases/latest/download/cnc-ddraw.zip',
    source: 'FunkyFr3sh',
    sourceUrl: 'https://github.com/FunkyFr3sh/cnc-ddraw'
}

const games: Record<string, Index> = {
    "risp": {
        group: "main",
        title: "reksioAndPirates",
        description: "reksioAndPiratesDescription",
        instructions: [
            {
                type: "password",
                content: `<img src="/extra/risp-code.png" style="height: 70px; padding: 10px;"/>`
            }
        ],
        coverImage: "/covers/reksioiskarbpiratow.jpg",
        year: 2002,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "playInBrowser",
                        icon: "🌐",
                        description: "withoutGameDownloading",
                        url: "/play/risp-pl",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'ReksioPiraci.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiSP/RISP-Patched.zip",
                        size: "273 MiB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Reksio%20i%20Skarb%20Pirat%C3%B3w%20%5Bpiklib8%5D.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Skarb%20Pirat%C3%B3w%20%5Bpiklib8%5D.iso"
                            }
                        ],
                        size: "641 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "playInBrowser",
                        icon: "🌐",
                        description: "withoutGameDownloading",
                        url: "/play/risp-ro",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'ReksioPiraci.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiSP/RiSP-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "350 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Reksio si Comoara Piratilor.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-comoara-piratilor/Reksio%20si%20Comoara%20Piratilor.iso"
                            }
                        ],
                        size: "381 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-comoara-piratilor"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
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
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "cz",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Rexi es a kalozok.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/rexiesakalozok/Rexi%20%C3%A9s%20a%20kal%C3%B3zok.iso"
                            }
                        ],
                        size: "543 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesakalozok"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "hu",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Rexi es a kalozok.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/rexiesakalozok/Rexi%20%C3%A9s%20a%20kal%C3%B3zok.iso"
                            }
                        ],
                        size: "543 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesakalozok"
                    },
                    ddrawDownload
                ]
            },
            {
                official: false,
                langCode: "en",
                downloads: [
                    {
                        name: "zipArchive",
                        icon: "📦",
                        description: "unofficialTranslationDescription",
                        url: "https://iso.zagrajwreksia.pl/RiSP/Reksio%20and%20the%20Pirate%20Treasure.zip",
                        mirrors: [
                            {
                                name: "mega.nz",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/0jthAKDC"
                            }
                        ],
                        size: "421 MB",
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
        instructions: [
            {
                type: "password",
                content: `<img src="/extra/riu-code.png" style="height: 70px; padding: 10px;"/>`
            }
        ],
        coverImage: "/covers/reksioiufo.jpg",
        year: 2003,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'ReksioUfo.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiU/RiU-Patched.zip",
                        size: "330 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Reksio%20i%20UFO%20%5Bpiklib8%5D.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20UFO%20%5Bpiklib8%5D.iso"
                            }
                        ],
                        size: "585 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'ReksioUfo.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiU/RiU-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "340 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Reksio%20si%20OZN-ul.iso",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://archive.org/download/reksio-si-ozn-ul/Reksio%20si%20OZN-ul.iso"
                            }
                        ],
                        size: "561 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-ozn-ul"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Рекс и НЛО.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-nlo/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9D%D0%9B%D0%9E.iso"
                            }
                        ],
                        size: "554 MB",
                        source: "Unknown"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "cz",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Rexi es az UFO.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/rexiesazufo/Rexi%20%C3%A9s%20az%20UFO.iso"
                            }
                        ],
                        size: "707 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesazufo"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "hu",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Rexi es az UFO.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/rexiesazufo/Rexi%20%C3%A9s%20az%20UFO.iso"
                            }
                        ],
                        size: "689 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/rexiesazufo"
                    },
                    ddrawDownload
                ]
            },
            {
                official: false,
                langCode: "en",
                downloads: [
                    {
                        name: "zipArchive",
                        icon: "📦",
                        description: "unofficialTranslationDescription",
                        url: "https://iso.zagrajwreksia.pl/RiU/Reksio%20and%20the%20UFO.zip",
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
        instructions: [
            {
                type: "password",
                content: `<img src="/extra/ric-code.png" style="height: 70px; padding: 10px;"/>`
            }
        ],
        coverImage: "/covers/reksioiczarodzieje.jpg",
        year: 2004,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "Łatka No-CD + łatki społeczności + łatki dla współczesnnych systemów operacyjnych",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Czarodzieje.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiC/RiC-Patched.zip",
                        size: "583 MB",
                        source: "zagrajwreksia.pl i ric-workshop",
                        sourceUrl: "https://github.com/roostarreksio/ric-workshop"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiC/Reksio%20i%20Czarodzieje.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Czarodzieje.iso"
                            }
                        ],
                        size: "710 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Czarodzieje.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiC/RiC-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "549 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiC/Reksio si Magicienii.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-magicienii/Reksio%20si%20Magicienii.iso"
                            }
                        ],
                        size: "687 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-magicienii"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
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
                    },
                    ddrawDownload
                ]
            },
        ],
    },
    "riwc": {
        group: "main",
        title: "reksioAndTimeMachine",
        description: "reksioAndTimeMachineDescription",
        instructions: [
            {
                type: "password",
                content: `<img src="/extra/riwc-code.png" style="height: 70px; padding: 10px;"/>`
            }
        ],
        coverImage: "/covers/reksioiwehikulczasu.jpg",
        year: 2004,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Wehikul.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiWC/RiWC-Patched.zip",
                        size: "588 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiWC/Reksio%20i%20Wehikul%20Czasu.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Wehiku%C5%82%20Czasu.iso"
                            }
                        ],
                        size: "708 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Wehikul.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiWC/RiWC-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "588 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiWC/Reksio si Masina Timpului.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-masina-timpului/Reksio%20si%20Masina%20Timpului.iso"
                            }
                        ],
                        size: "722 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-masina-timpului"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiWC/Рекс и Машина времени.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-mashina-vremeni/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%B0%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8.iso"
                            }
                        ],
                        size: "645 MB",
                        source: "Unknown",
                        sourceUrl: "https://archive.org/details/reks-i-mashina-vremeni"
                    },
                    ddrawDownload
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
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Nemo.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiKN/RiKN-Patched.zip",
                        size: "824 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
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
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Nemo.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiKN/RiKN-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "835 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKN/Reksio%20si%20Capitanul%20Nemo.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-capitanul-nemo/Reksio%20si%20Capitanul%20Nemo.iso"
                            }
                        ],
                        size: "552 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-capitanul-nemo"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKN/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%20%D0%9D%D0%B5%D0%BC%D0%BE.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-kapitan-nemo-ru/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%20%D0%9D%D0%B5%D0%BC%D0%BE.iso"
                            }
                        ],
                        size: "554 MB",
                        source: "Unknown"
                    },
                    ddrawDownload
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
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Rex5.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiKwA/RiKwA-Patched.zip",
                        size: "325 MB",
                        source: "zagrajwreksia.pl"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKwA/Reksio%20i%20Kretes%20w%20Akcji.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Kretes%20w%20Akcji.iso"
                            }
                        ],
                        size: "671 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "improvedVersionName",
                        icon: "🔧",
                        description: "improvedVersionDescription",
                        instructions: {
                            key: "instructionsRunExe",
                            args: {
                                file: 'Rex5.exe'
                            }
                        },
                        url: "https://iso.zagrajwreksia.pl/RiKwA/RiKwA-Romanian-Patched.zip",
                        mirrors: [
                            {
                                name: "Combined Romanian",
                                url: "https://mega.nz/folder/0q1CnCSK#vQULfXLctKnTPQ2PrSBsXQ/file/9qszUSiQ"
                            }
                        ],
                        size: "322 MB",
                        source: "Serena Pancu",
                        sourceUrl: "https://linktr.ee/serena.pancu"
                    },
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKwA/Reksio%20si%20Kretes%20in%20Actiune.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-kretes-in-actiune/Reksio%20si%20Kretes%20in%20Actiune.ISO"
                            }
                        ],
                        size: "404 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-kretes-in-actiune"
                    },
                    ddrawDownload
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKwA/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9A%D1%80%D0%BE%D1%82%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%BE%D0%BF%D0%B5%20%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-krot-na-trope-vojny/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9A%D1%80%D0%BE%D1%82%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%BE%D0%BF%D0%B5%20%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B.iso"
                            }
                        ],
                        size: "409 MB",
                        source: "Unknown",
                    },
                    ddrawDownload
                ]
            },
        ],
    },
    "rikttw": {
        group: "extra",
        title: "reksioAndKretesTheMystery",
        description: "reksioAndKretesTheMysteryDescription",
        coverImage: "/covers/reksioikretestajemnicatrzeciegowymiaru.jpg",
        year: 2007,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKTTW/Reksio%20i%20Kretes%20Tajemnica%20Trzeciego%20Wymiaru%201.1.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/pl-aidemmedia/Reksio%20i%20Kretes%20Tajemnica%20Trzeciego%20Wymiaru%201.1.iso"
                            }
                        ],
                        size: "383 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/pl-aidemmedia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKTTW/Reksio%20si%20Kretes%20Misterul%20celei%20de%20a%20treia%20dimensiuni.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-kretes-misterul-celei-de-a-treia-dimensiuni/Reksio%20si%20Kretes_%20Misterul%20celei%20de%20a%20treia%20dimensiuni.ISO"
                            }
                        ],
                        size: "280 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-kretes-misterul-celei-de-a-treia-dimensiuni"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/RiKTTW/Рекс и его друзья в третьем измерении.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksi-i-ego-druzja-v-tretem-izmerenii/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%B5%D0%B3%D0%BE%20%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F%20%D0%B2%20%D1%82%D1%80%D0%B5%D1%82%D1%8C%D0%B5%D0%BC%20%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D0%B8.iso"
                            }
                        ],
                        size: "277 MB",
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
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/Reksio i Miasto Sekretow.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-i-miasto-sekretow/Reksio%20i%20Miasto%20Sekret%C3%B3w.iso"
                            }
                        ],
                        size: "280 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-miasto-sekretow"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/Reksio%20si%20Kretes%20in%20orasul%20secretelor.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-kretes-in-orasul-secretelor/Reksio%20si%20Kretes%20in%20orasul%20secretelor.iso"
                            }
                        ],
                        size: "719 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-kretes-in-orasul-secretelor"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9A%D1%80%D0%BE%D1%82%20%D0%B2%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-i-krot-v-podzemnom-gorod/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B8%20%D0%9A%D1%80%D0%BE%D1%82%20%D0%B2%20%D0%BF%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%BD%D0%BE%D0%BC%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.iso"
                            }
                        ],
                        size: "511 MB",
                        source: "Reksioblog",
                    }
                ]
            },
            {
                official: true,
                langCode: "de",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/City%20of%20Secrets%20%28DE%29.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/city-of-secrets-de/City%20of%20Secrets%20%28DE%29.iso"
                            }
                        ],
                        size: "789 MB",
                        source: "Reksioblog",
                    }
                ]
            },
        ],
    },
    "rimsle": {
        group: 'second',
        title: "reksioAndCityOfSecretsLE",
        description: "",
        coverImage: "/covers/reksioimiastosekretowle.jpg",
        year: 2010,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/Reksio i Miasto Sekretow LE.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/6.-reksio-i-miasto-sekretow-city-of-secrets-le/6.%20Reksio%20i%20Miasto%20Sekret%C3%B3w%2C%20City%20of%20Secrets%20%28LE%29.iso"
                            }
                        ],
                        size: "1.2 GB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/6.-reksio-i-miasto-sekretow-city-of-secrets-le"
                    }
                ]
            },
            {
                official: true,
                langCode: "en",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/Reksio i Miasto Sekretow LE.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/6.-reksio-i-miasto-sekretow-city-of-secrets-le/6.%20Reksio%20i%20Miasto%20Sekret%C3%B3w%2C%20City%20of%20Secrets%20%28LE%29.iso"
                            }
                        ],
                        size: "1.2 GB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/6.-reksio-i-miasto-sekretow-city-of-secrets-le"
                    }
                ]
            },
        ],
    },
    "cos": {
        group: 'second',
        title: "cityOfSecrets",
        description: "cityOfSecretsDescription",
        coverImage: "/covers/cityofsecrets.jpg",
        year: 2010,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/City of Secrets LE.iso",
                        size: "1.2 GB",
                        source: "Kreton Podziemny"
                    }
                ]
            },
            {
                official: true,
                lost: true,
                lostNotes: "lostMedia",
                langCode: "en",
                downloads: []
            },
            {
                official: true,
                lost: true,
                lostNotes: "lostMedia",
                langCode: "de",
                downloads: []
            },
        ],
    },
    "cos2": {
        group: 'second',
        title: "cityOfSecrets2",
        description: "cityOfSecrets2Description",
        coverImage: "/covers/cityofsecrets2.jpg",
        year: 2013,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "unofficialPCPort",
                        description: "unofficialPCPortDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/CoS2ep1_PC_2.0.1.zip",
                        mirrors: [
                            {
                                name: "GDrive",
                                url: "https://drive.google.com/file/d/1c9eRjikTQk__FdofqtCDfjedddOE6H8I/view"
                            }
                        ],
                        size: "359 MB",
                        source: "Dove6, Mysliwy",
                        sourceUrl: "https://discord.com/channels/822931925618524240/909046389227536426/913841737225633813"
                    }
                ]
            },
            {
                official: true,
                langCode: "en",
                downloads: [
                    {
                        name: "unofficialPCPort",
                        description: "unofficialPCPortDescription",
                        url: "https://iso.zagrajwreksia.pl/CoS/CoS2ep1_PC_2.0.1.zip",
                        mirrors: [
                            {
                                name: "GDrive",
                                url: "https://drive.google.com/file/d/1c9eRjikTQk__FdofqtCDfjedddOE6H8I/view"
                            }
                        ],
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
        description: "abcWithReksioDescription",
        coverImage: "/covers/abczreksiem.jpg",
        year: 2000,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/ABC%20z%20Reksiem.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/abc-z-reksiem/ABC%20z%20Reksiem.iso"
                            }
                        ],
                        size: "609 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/abc-z-reksiem"
                    }
                ]
            },
        ],
    },
    "reksioiprzyjaciele": {
        group: 'educational',
        title: "reksioAndFriends",
        description: "",
        coverImage: "/covers/reksioiprzyjaciele.jpg",
        year: 2000,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio%20i%20przyjaciele.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-i-przyjaciele/Reksio%20i%20przyjaciele.ISO"
                            }
                        ],
                        size: "347 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-przyjaciele"
                    }
                ]
            },
        ],
    },
    "reksioizwierzeta": {
        group: 'educational',
        title: "reksioAndAnimals",
        description: "",
        coverImage: "/covers/reksioizwierzeta.jpg",
        year: 2000,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio%20i%20Zwierzeta.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-i-zwierzaki/Reksio%20i%20Zwierz%C4%99ta.iso"
                            }
                        ],
                        size: "253 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-zwierzaki"
                    }
                ]
            },
            {
                official: true,
                langCode: "cz",
                downloads: [
                    {
                        name: "zipArchive",
                        icon: "📦",
                        description: "",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio_es_az_allatkak.zip",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-es-az-allatkak/Reksio_es_az_allatkak.zip"
                            }
                        ],
                        size: "438 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-es-az-allatkak"
                    }
                ]
            },
            {
                official: true,
                langCode: "hu",
                downloads: [
                    {
                        name: "zipArchive",
                        icon: "📦",
                        description: "",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio_es_az_allatkak.zip",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-es-az-allatkak/Reksio_es_az_allatkak.zip"
                            }
                        ],
                        size: "438 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-es-az-allatkak"
                    }
                ]
            },
        ],
    },
    "liczezreksiem": {
        group: 'educational',
        title: "countingWithReksio",
        description: "countingWithReksioDescription",
        coverImage: "/covers/liczezreksiem.png",
        year: 2002,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Licze%20z%20Reksiem.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/licze-z-reksiem/Licz%C4%99%20z%20Reksiem.iso"
                            }
                        ],
                        size: "700 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/licze-z-reksiem"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Matematica%20cu%20Reksio.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/matematica-cu-reksio/Matematica%20cu%20Reksio.iso"
                            }
                        ],
                        size: "635 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/matematica-cu-reksio"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%20%D0%A0%D0%B5%D0%BA%D1%81%D0%BE%D0%BC.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/schitaem-s-reksom/%D0%A1%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC%20%D1%81%20%D0%A0%D0%B5%D0%BA%D1%81%D0%BE%D0%BC.iso"
                            }
                        ],
                        size: "644 MB",
                        source: "Reksioblog",
                    }
                ]
            },
        ],
    },
    "ortografia": {
        group: 'educational',
        title: "reksioAndOrthography",
        description: "reksioAndOrthographyDescription",
        coverImage: "/covers/reksioiortografia.jpg",
        year: 2003,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio%20i%20Ortografia.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-i-ortografia/Reksio%20i%20Ortografia.iso"
                            }
                        ],
                        size: "640 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-i-ortografia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio%20si%20Ortografia.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-si-ortografia/Reksio%20si%20Ortografia.iso"
                            }
                        ],
                        size: "374 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-si-ortografia"
                    }
                ]
            },
        ],
    },
    "wesoleprzedszkolereksia": {
        group: 'educational',
        title: "reksioKindergarten",
        description: "reksioKindergartenDescription",
        coverImage: "/covers/wesoleprzedszkolereksia.jpg",
        year: 2003,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Przedszkole%20Reksia.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/przedszkole-reksia/Przedszkole%20Reksia.iso"
                            }
                        ],
                        size: "538 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/przedszkole-reksia"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio%20la%20gradinita%20vesela.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-la-gradinita-vesela/Reksio%20la%20gradinita%20vesela.ISO"
                            }
                        ],
                        size: "421 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-la-gradinita-vesela"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B2%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC%20%D1%81%D0%B0%D0%B4%D1%83.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-v-detskom-sadu/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%B2%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC%20%D1%81%D0%B0%D0%B4%D1%83.iso"
                            }
                        ],
                        size: "346 MB",
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
        description: "reksioPuzzlesDescription",
        coverImage: "/covers/lamiglowkireksia.jpg",
        year: 2008,
        languages: [
            {
                official: true,
                langCode: "pl",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Lamiglowki%20Reksia.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/lamiglowki-reksia-wielki-odkrywca/%C5%81amig%C5%82%C3%B3wki%20Reksia%20-%20Wielki%20Odkrywca.ISO"
                            }
                        ],
                        size: "433 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/lamiglowki-reksia-wielki-odkrywca"
                    }
                ]
            },
            {
                official: true,
                langCode: "ro",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/Reksio%20micul%20intelept.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reksio-micul-intelept/Reksio%2C%20micul%20intelept.ISO"
                            }
                        ],
                        size: "238 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reksio-micul-intelept"
                    }
                ]
            },
            {
                official: true,
                langCode: "ru",
                downloads: [
                    {
                        name: "originalCDVersionName",
                        icon: "💿",
                        description: "originalCDVersionDescription",
                        url: "https://iso.zagrajwreksia.pl/EDU/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%BD%D0%B0%20%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5%20%D0%A7%D1%83%D0%B4%D0%B5%D1%81.iso",
                        mirrors: [
                            {
                                name: "archive.org",
                                url: "https://archive.org/download/reks-na-ostrove-chudes/%D0%A0%D0%B5%D0%BA%D1%81%20%D0%BD%D0%B0%20%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B5%20%D0%A7%D1%83%D0%B4%D0%B5%D1%81.iso"
                            }
                        ],
                        size: "302 MB",
                        source: "archive.org",
                        sourceUrl: "https://archive.org/details/reks-na-ostrove-chudes"
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