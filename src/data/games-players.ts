interface Game {
    id: string;
    lang: string;
    listingUrl: string;
}

export const gamesData: Record<string, Game> = {
    'risp-ro': {
        id: 'risp',
        lang: 'ro',
        listingUrl: 'https://iso.zagrajwreksia.pl/game-assets/risp/ro/listing.json',
    },
    'risp-pl': {
        id: 'risp',
        lang: 'pl',
        listingUrl: 'https://iso.zagrajwreksia.pl/game-assets/risp/pl/listing.json',
    },
};