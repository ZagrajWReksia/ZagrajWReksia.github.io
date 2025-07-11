import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "lang_pl": "Polish",
            "lang_ro": "Romanian",
            "lang_ru": "Russian",
            "lang_cz": "Czech",
            "lang_hu": "Hungarian",
            "lang_en": "English",
            "lang_de": "German",
            "creditsTranslations": "Translations",
            "creditsBackground": "Background extended by Paweł Wierzbicki",
            "viewInOtherLanguages": "View this website in other languages:",
            "adventuresOfReksio": "Adventures of Reksio",
            "mainSeries": "Main series",
            "educationalGames": "Educational games",
            "forTheLittlestPlayers": "For the littlest players",
            "playInBrowser": "Play in the browser",
            "withoutGameDownloading": "Without downloading",
            "mirrors": "Mirrors",
            "extras": "Extras",
            "newSeries": "New series",
            "englishVersionIsFanMade": "The English version is fanmade and its dubbing is made with AI",
            "mainAboutHello": "Welcome to zagrajwreksia.pl - a website created to archive all the available versions of all the games from Adventures of Reksio series, so that they can be downloaded and even played directly in the browser (via ReksioEngine).",
            "mainAboutReadMore": "Read more about the project",
            "mainAboutBoombit": "The studio BoomBit (Aidem Media) has had its license to use the character Reksio expire, making them unable to sell their games featuring it anymore, and do not have issues with people downloading the games.",
            "mainAboutMoreAboutGames": "You can find more information about the games from the the Adventures of Reksio series at:",
            "mainAboutLinkAndLink": "<0>Przygody Reksia HUB</0> (🇵🇱/🇬🇧) and <2>Reksiopedia</2> (🇵🇱)",
            "chooseLanguageVersion": "Select a language version",
            "releaseDate": "Release date",
            "goBack": "Go back",
            "reksioAndPirates": "Reksio and the Pirate Treasure",
            "reksioAndUFO": "Reksio and the UFO",
            "reksioAndWizards": "Reksio and the Wizards",
            "reksioAndTimeMachine": "Reksio and the Time Machine",
            "reksioAndCaptainNemo": "Reksio and Captain Nemo",
            "reksioAndKretesInAction": "Reksio and Kretes in Action",
            "reksioAndKretesTheMystery": "Reksio and Kretes: The Mystery of the Third Dimension",
            "reksioAndCityOfSecrets": "City of Secrets",
            "reksioAndCityOfSecretsLE": "Reksio and the City of Secrets: Limited Edition",
            "cityOfSecrets": "City of Secrets",
            "cityOfSecrets2": "City of Secrets 2",
            "abcWithReksio": "ABC with Reksio",
            "reksioAndOrthography": "Reksio and Orthography",
            "countingWithReksio": "Counting with Reksio",
            "reksioKindergarten": "Reksio's Joyous Kindergarten",
            "reksioPuzzles": "Reksio's Puzzles - The Great Explorer",
            "reksioAndAnimals": "Reksio and Animals",
            "reksioAndFriends": "Reksio and Friends",
            "originalCDVersionName": "Original CD version (ISO)",
            "originalCDVersionDescription": "This version is exactly as it appears on the disk; may not work on modern operating systems",
            "improvedVersionName": "Improved version with patches",
            "zipArchive": "ZIP Archive",
            "instructionsRunExe": "Run the game by clicking on {{file}}",
            "improvedVersionDescription": "No-CD patch + patches for modern operating systems",
            "unofficialPCPort": "Unofficial PC port",
            "unofficialPCPortDescription": "This game was ported from Android/iOS to PC by community",
            "unofficialTranslationDescription": "Unofficial fanmade translation",
            "cncDrawName": "CNC-DDraw - Patch for ISO version",
            "cncDrawDescription": "(It is already included in \"Improved version with patches\"!)\nCan fix compatibility issues in older 2D games, such as black screen, bad performance, crashes or defective Alt+Tab.\n" +
                "1. Download cnc-ddraw.zip and extract it into your game folder\n" +
                "2. Start the game",
            "visitReksioDiscordForHelp": "Need help with the game or installation? Join Reksio community on <1>Discord</1>!",
            "source": "Source",
            "credits": "Credits",
            "createdAndManagedBy": "Created and managed by <1>Adikso</1>",
            "sourceCode": "Source code",
            "playerEnterFullscreen": "Fullscreen",
            "playerImportSaveFile": "Load save",
            "playerExportSaveFile": "Download save",
            "playerPressHereToStart": "Press here to start",
            "specialInstructions": "Special instructions",
            "codeFromBooklet": "If the game asks you for the code from the booklet, enter the following:",
            "lostMedia": "This version of the game exists, but is currently lost.\nContact me at burektor@zagrajwreksia.pl, if you have it.",
            "reksioAndPiratesDescription": `Somewhere in the Non-Pacific Ocean, under mysterious circumstances, the pirate Captain O'Verboard disappears. Along with him vanishes the only map leading to the legendary treasure...

                    Meanwhile, Reksio, windsurfing across the sea, is caught in a raging storm. Amid flashes of lightning and the roar of the waves, Reksio crashes into the shores of a mysterious island. Soon after, he finds a bottle washed up on the beach, containing an enigmatic message:
                    RIKWA29
                    
                    And so, together with the player, he becomes entangled in a grand pirate adventure.
                    
                    What really happened to Captain O'Verboard?
                    
                    What is the lost tribe of the island chickens guarding so closely?
                    
                    What secrets lie beneath the volcano?
                    
                    Where is the Pirate Treasure hidden?
                    
                    What was Kretes doing on the island?
                    
                    You’ll find out everything by joining Reksio on this danger-filled and thrilling adventure.
            `,
            "reksioAndUFODescription": `Somewhere in galaxy not so far away... in a system where the egg is no surprise... on a planet where a the rooster crows "good night"... a mysterious Henperor is building a powerful weapon, with which he plans to conquer the entire universe...

                    Meanwhile, Reksio, having uncovered the secret of the Pirates Treasure, returns home... There, he learns that the hens from his yard have been abducted by UFOs... Reksio decides to rescue the hens and sets off in pursuit of the cosmic kidnappers.
                    
                    Why were the hens abducted?
                    
                    Who actually is the mysterious Henperor?
                    
                    What is the orache from the planet Henakis used for?
                    
                    Can love be strong enough to tear down walls?
                    
                    You’ll find out everything by joining Reksio on another surprise-filled and thrilling adventure...
            `,
            "reksioAndWizardsDescription": `Somewhere in the crumbling Wonderland, the Barkchancellor of the University of Magic studies an ancient prophecy. It reveals that only a mysterious Chosen One possesses the power to unmask "He Who Shall Not Be Guesed" and stop his twisted machinations.

                    The sound of shattering glass interrupts the wizard’s frantic pondering — as a monstrously large mole bursts into his study, shouting: "Inconceivable!"... Hot on his heels, the brave dog Reksio enters Wonderland...
                    
                    Is Reksio the Chosen One foretold in the prophecy?
                    
                    Which of the seven wizards is "He Who Shall Not Be Guesed"?
                    
                    Can Wonderland be saved from destruction with the help of a perpetually disgruntled mole, a loquacious stone, and a handful of magical doohickeys?
                    
                    How can you tell if you’re just an ordinary frog or an enchanted princess?
                    
                    And how do you master powerful spells over a single weekend?
                    
                    You’ll find out everything by joining Reksio on yet another adventure full of surprises and thrilling escapades...
            `,
            "reksioAndTimeMachineDescription": `Having defeated the evil wizard, Reksio and Kretes hoped to finally rest. But that was not to be. Captured by the Order of the Rosy Tail, they spent the rest of their lives in the dungeons. Reksio never had another adventure, and Kretes never returned to his Molly..."

                    If you don’t want the story to end this way, help Reksio jury-rig an old sofa into a time machine and... go so fa back in time to the distant past. For only there lives the one person who knows how to alter the course of history and straighten the twists of time.
                    That person is the mysterious Nostradamus...
                    
                    Who is Nostradamus, and why is he so mysterious?
                    
                    Where did the Time Funnels and Time Mounds come from — and how do they work?
                    
                    Did the dinosaurs really go extinct? Or did they just go... somewhere else?
                    
                    Who are the guardians of the secret mantra that holds the key to passing the Snake Rift in the Pyramid of Fear?
                    
                    How do you win a knight’s tournament when you’re a dog?
                    
                    What is the real story behind Mona Lisa’s smile?
                    
                    And which numbers are worth betting on in the lottery?
                    
                    You’ll find out *most* of the answers by joining Reksio and Kretes on their fourth, action-packed and surprise-filled adventure...
            `,
            "reksioAndCaptainNemoDescription": `After the time machine is destroyed at the turn of the 20th century, Reksio and Kretes are forced to find another way back to their own time. Their best hope lies with the famous detective Shellock Holmes. Unfortunately, their plans to find this legendary figure are thwarted by the mysterious Nemo, captain of the submarine Nautilus.

                    Will the great journey around the world end in success — or rather, will it ever end at all?
                    
                    Will Willy Frogg prove everyone wrong and make them look like fools?
                    
                    Where is the cradle of the ancient Molon civilization buried — and is that where the *real* mystery lies?
                    
                    Will Reksio win the heart of Kari Mata Hari?
                    
                    Can Woodchuck Norris really dig tunnels with a roundhouse kick?
                    
                    You'll find out everything by joining Reksio and Kretes on yet another breathtaking and unforgettable adventure...
            `,
            "reksioAndKretesInActionDescription": `A standalone arcade-style addition to the Adventures of Reksio series. It does not require playing any of the games from the series, nor any prior knowledge of Reksio's previous adventures — just focus and nimble fingers.

                    Several months have passed since Reksio and Kretes's grand adventure came to an end. The heroes are now enjoying some well-deserved peace and quiet.
                    
                    But the calm is interrupted by the arrival of a package from America — an exclusive set of arcade games based on the adventures of Reksio and Kretes. The heroes sit down in front of the Claystation, invented by the ever-creative Rooster Inventor, and start to play.
                    
                    In doing so, they begin to uncover a number of strange inconsistencies...
            `,
            "reksioAndKretesTheMysteryDescription": `A mysterious hum in the middle of the night jolts Reksio, Kretes, and the Rooster Inventor out of bed. Without hesitation and despite the danger, the friends set out to investigate.

                    Soon, they discover that a massive Black Monolith has appeared in a forest clearing. Kretes touches its surface — and in an instant, all three heroes are pulled into the depths of the third dimension.
                    
                    Someone has kidnapped the friends and left them stranded at the foot of the Dark Tower.
                    
                    Someone has torn them from the safety of their flat, 2D world and cast them into a hostile, three-dimensional space.
                    
                    Someone has built 54 labyrinths to put their friendship to the ultimate test.
                    
                    Someone ruthless.
                    
                    Someone... familiar.
            `,
            "reksioAndCityOfSecretsDescription": `After Rex falls into a hole in your basement, you must rescue him from a city full of secrets in this incredible adventure game! Not only has Rex found a city full of mole people, but he's also been accused of espionage!`,
            "cityOfSecrets2Description": `Usually, a perilous adventure hides behind a completely innocent beginning. A beginning that doesn't mention anything about a giant worm, dangerous cooking recipes, the common people fighting the oppressive regime, rebelling workers and trade unions. Nor does it mention a strange salesman that forgoes the career of a dark god to start his own fish stand business. An innocent beginning doesn't say anything that could be linked to words like danger, trouble, or threat. It's just the way with all those adventures, it seems they have nothing better to do than just render a man's... animal's... mole's... life unpleasant.
                    
                    Moles the Mole, a not-so-bright and nice hero, but a hero nonetheless, will have the questionable opportunity to discover what fate has in store for him. One night, closer to morning than evening, Moles has been brutally awakened by scary noises. Fear tightened it's icy grip on Moles's heart and just when our hero was about to execute a tactical withdrawal, the mystery solved itself - with a terrifying series of noises, our hero's most impressive muscle was demanding a night snack. Unfortunately, the problem with adventure games is that nothing's ever easy in them. The fridge is empty, the designer didn't draw a larder and the writer already had an idea how to complicate the hero's life. Now that's an innocent beginning, if I've ever seen one. And you know what's the usual deal with those innocent beginnings.
                    
                    This game was tested on animals. They didn't like it and went away.
                    This game was tested on testers. Nobody asked them if they wanted to do it and they couldn't get away. 
            `,
            "cityOfSecretsDescription": `Rebrand of Reksio and the City of Secrets LE without Reksio`,
            "reksioAndOrthographyDescription": "",
            "reksioKindergartenDescription": "",
            "countingWithReksioDescription": "",
            "abcWithReksioDescription": "",
            "reksioPuzzlesDescription": ""
        }
    },
    pl: {
        translation: {
            "lang_pl": "Polski",
            "lang_ro": "Rumuński",
            "lang_ru": "Rosyjski",
            "lang_cz": "Czeski",
            "lang_hu": "Węgierski",
            "lang_en": "Angielski",
            "lang_de": "Niemiecki",
            "creditsTranslations": "Tłumaczenia",
            "creditsBackground": "Tło rozszerzone przez Pawła Wierzbickiego",
            "viewInOtherLanguages": "Zobacz tę stronę w innym języku:",
            "adventuresOfReksio": "Przygody Reksia",
            "mainSeries": "Główna seria",
            "educationalGames": "Gry edukacyjne",
            "forTheLittlestPlayers": "Dla bardzo małych graczy",
            "playInBrowser": "Graj w przeglądarce",
            "withoutGameDownloading": "Bez pobierania gry",
            "mirrors": "Mirrory",
            "extras": "Dodatki do serii",
            "newSeries": "Nowa seria",
            "englishVersionIsFanMade": "Wersja w języku angielskim jest wersją fanowską i używa AI do dubbingu",
            "mainAboutHello": "Witaj na zagrajwreksia.pl – stronie poświęconej archiwizacji wszelkich możliwych gier o reksiu (oraz ich wersji), umożliwiającej ich pobranie, a także grę w niektóre z nich bezpośrednio w przeglądarce (dzięki ReksioEngine).",
            "mainAboutReadMore": "Przeczytaj więcej o projekcie",
            "mainAboutBoombit": "Firmie BoomBit (AidemMedia) wygasła licencja na wykorzystywanie postaci Reksia przez co nie są w stanie jej już sprzedawać i nie mają nic przeciwko pobieraniu gier.",
            "mainAboutMoreAboutGames": "Więcej informacji o grach z serii Przygody Reksia możesz znaleźć na:",
            "mainAboutLinkAndLink": "<0>Przygody Reksia HUB</0> oraz na <2>Reksiopedii</2>",
            "chooseLanguageVersion": "Wybierz wersję językową",
            "releaseDate": "Data wydania",
            "goBack": "Powrót",
            "reksioAndPirates": "Reksio i Skarb Piratów",
            "reksioAndUFO": "Reksio i UFO",
            "reksioAndWizards": "Reksio i Czarodzieje",
            "reksioAndTimeMachine": "Reksio i Wehikuł Czasu",
            "reksioAndCaptainNemo": "Reksio i Kapitan Nemo",
            "reksioAndKretesInAction": "Reksio i Kretes w Akcji",
            "reksioAndKretesTheMystery": "Reksio i Kretes Tajemnica Trzeciego Wymiaru",
            "reksioAndCityOfSecrets": "Reksio i Miasto SeKretów",
            "reksioAndCityOfSecretsLE": "Reksio i Miasto SeKretów: Limited Edition",
            "cityOfSecrets": "City of Secrets",
            "cityOfSecrets2": "Miasto SeKretów 2",
            "abcWithReksio": "ABC z Reksiem",
            "reksioAndOrthography": "Reksio i Ortografia",
            "countingWithReksio": "Liczę z Reksiem",
            "reksioKindergarten": "Wesołe Przedszkole Reksia",
            "reksioPuzzles": "Łamigłówki Reksia - Wielki Odkrywca",
            "reksioAndAnimals": "Reksio i Zwierzęta",
            "reksioAndFriends": "Reksio i Przyjaciele",
            "originalCDVersionName": "Oryginalna wersja z płyty (ISO)",
            "originalCDVersionDescription": "Wersja dokładnie taka jak na płycie; może nie działać na współczesnych systemach operacyjnych",
            "improvedVersionName": "Wersja poprawiona z łatkami",
            "zipArchive": "Archiwum ZIP",
            "instructionsRunExe": "Uruchom grę klikając na plik {{file}}",
            "unofficialPCPort": "Nieoficjalny port PC",
            "unofficialPCPortDescription": "Gra przeportowana przez społeczność z Androida/iOS na PC",
            "unofficialTranslationDescription": "Nieoficjalne tłumaczenie fanowskie",
            "cncDrawName": "CNC-DDraw - Łatka do wersji ISO",
            "cncDrawDescription": "(\"Wersja poprawiona z łatkami\" już zawiera tę łatkę!)\nMoże naprawić problemy z kompatybilnością w starszych grach 2D, takie jak czarny ekran, słaba wydajność, awarie lub nieprawidłowe działanie Alt+Tab.\n" +
                "1. Pobierz plik cnc-ddraw.zip i rozpakuj go do folderu gry.\n" +
                "2. Uruchom grę.",
            "improvedVersionDescription": "Łatka No-CD + łatki dla współczesnych systemów operacyjnych",
            "visitReksioDiscordForHelp": "Potrzebujesz pomocy z grą lub instalacją? Wejdź na <1>Discorda</1> społeczności!",
            "source": "Źródło",
            "credits": "Autorzy",
            "createdAndManagedBy": "Stworzone i zarządzane przez <1>Adikso</1>",
            "sourceCode": "Kod źródłowy",
            "playerEnterFullscreen": "Pełny ekran",
            "playerImportSaveFile": "Wczytaj zapis",
            "playerExportSaveFile": "Eksportuj zapis",
            "playerPressHereToStart": "Kliknij tutaj aby uruchomić grę",
            "specialInstructions": "Dodatkowe instrukcje",
            "codeFromBooklet": "W przypadku, gdy gra poprosi Cię o podanie kodu z książeczki, wpisz poniższy kod:",
            "lostMedia": "Ta wersja gry istnieje, ale obecnie jest zaginiona.\nSkontaktuj się ze mną pod adresem burektor@zagrajwreksia.pl, jeśli ją posiadasz.",
            "reksioAndPiratesDescription": `Gdzieś na Oceanie Niespokojnym w tajemniczych okolicznościach znika dowódca piratów Kapitan O'Gryzek. Razem z nim ginie jedyna mapa prowadząca do legendarnego skarbu...
                    
                    Tymczasem pływający na desce windsurfingowej Reksio zostaje porwany przez szalejący sztorm. Wśród błysków piorunów i ryku fal Reksio rozbija się u wybrzeży tajemniczej wyspy. Wkrótce znajduje wyrzuconą przez ocean butelkę z zagadkową zawartością.
                    
                    W ten sposób wraz z graczem, zostaje wplątany w wielką piracką przygodę.
                    
                    Co naprawdę stało się z Kapitanem O'Gryzkiem?
                    
                    Czego tak pilnie strzeże zaginione plemię Czarnych Kur?
                    
                    Jaką tajemnicę kryją podziemia wulkanu?
                    
                    Gdzie ukryty jest Skarb Piratów?
                    
                    Jak Kretes zachowywał się na Wyspie?
                    
                    Wszystkiego dowiesz się towarzyszą Reksiowi w tej obfitującej w niebezpieczeństwa i pełnej pasjonujących przygód wyprawie.
            `,
            "reksioAndUFODescription": `Gdzieś w odległej galaktyce... na planecie gdzie kret mówi dobranoc... tajemniczy Kurator buduje potężne jajo, przy pomocy którego chce podbić cały wszechświat...
                
                    Tymczasem Reksio po rozwiązaniu tajemnicy Skarbu Piratów, wraca do domu... Tu dowiaduje się, że kury z jego podwórka zostały uprowadzone przez UFO... Reksio postanawia uratować kury i wyrusza w pościg za kosmicznymi porywaczami.
                    
                    Dlaczego porwano właśnie kury?
                    
                    Kim naprawdę jest tajemniczy Kurator?
                    
                    Do czego służy lebiodka z planety Kurakis?
                    
                    Czy miłość wystarczy, by zburzyć mury?
                    
                    Wszystkiego dowiesz się, towarzysząc Reksiowi w kolejnej obfitującej w niespodzianki i pełnej pasjonujących przygód wyprawie... 
            `,
            "reksioAndWizardsDescription": `Gdzieś w chylącej się ku upadkowi Krainie Czarów Burektor Uniwersytetu Magii studiuje tekst pradawnej przepowiedni. Wynika z niej, że jedynie tajemniczy Wybraniec ma moc wystarczającą, aby zdemaskować Tego, Który Tak Potwornie Mąci i powstrzymać jego niecne knowania.
                    
                    Brzęk tłuczonego lustra przerywa gorączkowe rozważania Czarodzieja - oto przez jego gabinet przelatuje z okrzykiem: „No nie wierzę!” monstrualnych rozmiarów kret. W ślad za nim do Krainy Czarów wkracza dzielny pies Reksio...
                    
                    Czy Reksio jest Wybrańcem, o którym mówi przepowiednia...?
                    
                    Który z siedmiu Czarodziejów jest Tym, Który Tak Potwornie Mąci?
                    
                    Czy przy pomocy wiecznie niezadowolonego kreta, gadatliwego kamienia i garści magicznych przedmiotów można uratować Krainę Czarów od zagłady?
                    
                    W jaki sposób sprawdzić, czy jest się zwykłą żabą, czy też zaklętą królewną?
                    
                    Oraz jak nauczyć się potężnych zaklęć w weekend?
                    
                    Wszystkiego dowiesz się, towarzysząc Reksiowi w kolejnej obfitującej w niespodzianki i pełnej pasjonujących przygód wyprawie... 
            `,
            "reksioAndTimeMachineDescription": `"Pokonawszy złego Czarodzieja, Reksio i Kretes mieli zamiar wreszcie odpocząć. Nie było im to jednak dane. Pojmani przez Zakon Ryżokitowców resztę życia spędzili w lochach. Reksio nie przeżył już żadnych przygód, a Kretes nigdy nie wrócił do swojej Molly..."

                    Jeżeli nie chcesz, by tak potoczyła się historia, pomóż Reksiowi przebudować starą sofę na wehikuł czasu i sofnij się... cofnij się wraz z nim w odległą przeszłość. Bowiem właśnie tam żyje jedyna osoba, która wie, jak naprawić zegar historii, odmienić przebieg zdarzeń i wyprostować meandry czasu. Osobą ten jest tajemniczy Nostradamus...
                    
                    Kim jest Nostradamus i dlaczego jest taki tajemniczy?
                    
                    Skąd się wzięły i jak działają Leje i Kopce Czasowe?
                    
                    Czy dinozaury faktycznie wyginęły? Czy może tylko gdzieś poszły?
                    
                    Kim są strażnicy tajemnej mantry, która stanowi klucz do pokonania Rozpadliny Węży w Piramidzie Strachu?
                    
                    Jak wygrać turniej rycerski, będąc psem?
                    
                    Jaka jest prawdziwa historia uśmiechu Mona Lisy?
                    
                    Jakie liczby warto obstawić w Dużym Lotku?
                    
                    Większość odpowiedzi poznacie, towarzysząc Reksiowi i Kretesowi w kolejnej, czwartej już, jakże obfitującej w przygody i niespodzianki, wyprawie... 
            `,
            "reksioAndCaptainNemoDescription": `Po zniszczeniu wehikułu czasu na przełomie XIX i XX wieku Reksio i Kretes zmuszeni zostają, by poszukać innego sposobu powrotu do swoich czasów. Bohaterom może pomóc słynny detektyw Shlafrock Holmes. Niestety, plany odnalezienia tej legendarnej postaci pokrzyżujc e podróżnikom tajemniczy Kapitan Nemo, dowódca podwodnego okrętu Nautilus.
                    
                    Czy wielka podróż dookoła świata zakończy się sukcesem i czy w ogóle się zakończy?
                    
                    Czy Willy Frogg zrobi wszystkich w balona?
                    
                    Gdzie pogrzebana jest kolebka cywilizacji starożytnych Kretonów i czy właśnie tam leży pies pogrzebany?
                    
                    Czy Reksio podbije serce Kari Maty Hari?
                    
                    Czy Chuck Nornik jest w stanie kopać nory z półobrotu?
                    
                    Wszystkiego dowiecie się, towarzysząc Reksiowi i Kretesowi w kolejnej zapierającej dech wyprawie...  
            `,
            "reksioAndKretesInActionDescription": `"Niezależny, zręcznościowy dodatek do serii Przygody Reksia. Nie wymaga instalacji innych gier z serii, ani znajomości treści innych gier z Reksiem - wymaga jedynie koncentracji i zręcznych palców."

                    "Minęło kilka miesięcy od zakończenia wielkiej przygody Reksia i Kretesa. Bohaterowie rozkoszują się upragnionym spokojem. Sielankę przerywa nadejście paczki z Ameryki. To ekskluzywny zestaw gier zręcznościowych o przygodach Reksia i Kretesa. Bohaterowie zasiadają przed konsolą, skonstruowaną przez Koguta Wynalazcę i próbują grać. Przy okazji odkrywają wiele nieścisłości..." 
            `,
            "reksioAndKretesTheMysteryDescription": `Tajemniczy szum w środku nocy stawia na nogi Reksia, Kretesa i Koguta Wynalazcę. Przyjaciele, nie bacząc na niebezpieczeństwo, wyruszają na zwiad. Niebawem okazuje się, że na polanie w lesie wyrósł potężny Czarny Monolit. Kretes dotyka jego powierzchni i naraz wszyscy trzej bohaterowie zostają wciągnięci w czeluść trzeciego wymiaru.

                    Ktoś uprowadził przyjaciół i porzucił u podnóża Mrocznej Wieży.
                    
                    Ktoś wyrwał ich z bezpiecznego płaskiego rysunku i umieścił w niegościnnej trójwymiarowej przestrzeni.
                    
                    Ktoś przygotował 54 labirynty aby wystawić ich przyjaźń na próbę.
                    
                    Ktoś pozbawiony skrupułów
                    
                    Ktoś znajomy... 
            `,
            "reksioAndCityOfSecretsDescription": `Dzielny pies Reksio schodzi do piwnicy w norze swojego przyjaciela komandora kreta Kretesa i dosłownie "zapada się pod ziemię". Zaniepokojony komandor wyrusza natychmiast jego śladem i wkrótce poprzez labirynt korytarzy i tuneli dociera do ukrytego pod ziemią, tajemniczego miasta kretów. Okazuje się, że Reksio został pojmany, uwięziony i skazany za szpiegostwo na rzecz Szczurów, a to, jak okaże się niebawem, zaledwie czubek przysłowiowej kury lodowej.
                    
                    Czy Kretesowi uda się w porę uwolnić Reksia?
                    
                    Kim jest tajemniczy burmistrz, który rządzi miastem od czasów rewolucji?
                    
                    Czy Reksio pozwoli dobrowolnie połknąć się olbrzymiemu wężowi, żeby odzyskać zagubioną puszkę z dowodami rzeczowymi?
                    
                    Co mieści się w sercu krainy Szczurów?
                    
                    Przygotuj się na fascynującą, kolorową i trójwymiarową podróż do wnętrza Ziemi. Kierując na zmianę Reksiem i Kretesem, przeżyj najbardziej niesamowitą z dotychczasowych przygód i odkryj wszystkie sekrety Miasta seKretów. 
            `,
            "cityOfSecrets2Description": `Zwykle niebezpieczne przygody mają całkowicie niewinny początek. Początek, który nie ma nic wspólnego z gigantycznymi robakami, podejrzanymi przepisami, walką ludu z reżimem, protestującymi robotnikami czy związkami zawodowymi. Ani z osobliwym sprzedawcą rezygnującym z kariery mrocznego bóstwa na rzecz prowadzenia własnego stoiska rybnego. Ani z niczym innym, co można by powiązać ze słowami takimi jak kłopoty czy zagrożenie. Tak to już jest z tymi przygodami, które jedyne co, to uprzykrzają życie ludziom... zwierzętom... kretom.
                    
                    Kreta Kretesa, nie najbystrzejszego i najbardziej uprzejmego, ale wciąż bohatera, czeka wątpliwą przyjemność odkrycia, co los trzyma dla niego w zanadrzu. Pewnej nocy (bliżej rana niż wieczora) Kretes został brutalnie zbudzony przez przerażające odgłosy. Strach zacisnął swe szpony na sercu biednego kreta i gdy ten szykował się już do taktycznego odwrotu... zagadka rozwiązała się sama - za mrożącymi krew w żyłach odgłosami stał najbardziej imponujący mięsień bohatera, domagając się w ten sposób nocnej przekąski. Niestety, z grami przygodowymi jest taki problem, że nic nie jest w nich proste. Lodówka okazała się pusta, spiżarni projektant nie raczył narysować, scenarzysta za to zdążył już wpaść na pomysł, jak utrudnić życie Kretesowi. To dopiero niewinny początek. A co będzie dalej, pewnie już się domyślacie.
                    
                    Gra była testowana na zwierzętach. Niezbyt im się to spodobało i uciekły.
                    Gra była testowana również na testerach. Ci nie mieli wyboru. 
            `,
            "reksioAndCityOfSecretsLEDescription": `Dzielny pies Reksio schodzi na moment do piwnicy w norze swojego przyjaciela kreta Kretesa i oglądając mapy odkrywa położenie Atlantydy i jednej z jakiejś tajemniczych sfer... zaraz to nie było tak! Przecież miał dosłownie " Zapaść się pod ziemię",...
        
                    - NO NIE WIERZĘ!!! Teraz Aidem Media przesadziło! Najpierw umieszczają mnie i Reksia w Trzecim Wymiarze, następnie wysyłają do miasta pełnego kretów i sekretów, a jeszcze chcą mnie nauczyć angielskiego. Co ja jestem, Moles the Mole? Wygląda na to, że tak! No to see you later! - wypowiedział te słowa zezłoszczony, niezrehabilitowany Kretes (albo i nie powiedział)
            `,
            "cityOfSecretsDescription": `Rebrand Reksio i Miasto Sekretów LE bez udziału Reksia`,
            "reksioAndOrthographyDescription": `Program “Reksio i ortografia” adresowany jest do uczniów szkół podstawowych i zawiera kompletną wiedzę ortograficzną, wymaganą przez program nauczania. Jest zbiorem zasad pisowni oraz ciekawych, dynamicznych zabaw sprawdzających znajomość ortografii, w których można wybrać poziom trudności i zagadnienie. Pasjonujące gry z Reksiem umilą naukę i zachęcą do utrwalania zdobytej wiedzy. Sprawią, że nauka stanie się niezapomnianą przygodą!
                    W programie znajdują się ulubione przez dzieci typy gier i zabaw. Są to między innymi wyścigi samochodów, motorówek, slalom skuterem śnieżnym, czy gry zręcznościowe: wyspa bobrów, wyścig po nenufarach, wylęgarnia kurczaków i turniej przy studni. Jeśli dziecko woli gry strategiczne, zapraszamy do zabawy polegającej na zdobywaniu zamków. Gdy jednak pisownia niektórych wyrazów sprawia kłopot, Reksio zaprasza do swojej budy, na krótką lekcjię ortografii. Ale to jeszcze nie wszystko...
                    Całość nasycona jest bogatą grafiką animowaną, wesołą muzyką oraz ciekawymi pomysłami na łatwe przyswojenie zasad poprawnej pisowni. Czego można chcieć więcej! Wystarczy dużo ćwiczyć, aby być najlepszym!
            `,
            "reksioKindergartenDescription": `„Wesołe Przedszkole Reksia” to kolejny tytuł z serii edukacji przedszkolnej dla najmłodszych dzieci. Program opracowany został według założeń dydaktycznych wychowania przedszkolnego. Zawiera siedem interesujących zabaw, które wspomagają tok edukacji przedszkolnej, stymulują rozwój umysłowy oraz twórcze myślenie.
                    
                    Kolejka - ulubiona zabawa wszystkich przedszkolaków. W tej grze należy pomóc maszyniście zabrać wszystkich pasażerów i dojechać z nimi na stację końcową. To wiele godzin zabawy dla każdego malucha i jego taty!
                    
                    Znikające zabawki - Gdzie jest miś? Czy to ta sama lalka czy inna? A czy był tutaj robot?
                    Doskonała zabawa ćwicząca pamięć i spostrzegawczość. Rosnący poziom trudności i dużo zabawnych animacji.
                    
                    Memo - tę zabawę, polegającą na łączeniu elementów w pary znają wszystkie dzieci. Ale w naszym programie wzbogaciliśmy ją w animowane plansze i mówiące karty memo! Znakomita zabawa dla dwóch osób!
                    
                    Klocki - Każde dziecko lubi się nimi bawić? Niestety prawdziwe klocki nie potrafią się ruszać... Klocki Reksia - potrafią! Zbuduj statek, ambulans, krokodyla i zobacz, co się stanie...
                    
                    Wesoła Strzelnica - W tej zabawie zwycięzcą zostaje ten, kto pobije rekord strzelnicy.!
                    To dynamiczna gra zręcznościowa zarówno dla młodszych, jak i starszych dzieci.
                    
                    Układanki - Doskonała zabawa dla tych, którzy lubią bawić się układankami.
                    W niezwykłym Przedszkolu Reksia elementy układanki poruszają się, a postacie wyczyniają różne śmieszne figle...
                    
                    Mówiące Kolorowanki - Pokoloruj i wydrukuj obrazki z przygodami Reksia. Uważaj na kolory - nikt nie lubi, kiedy maluje mu się głowę na zielono. Reksio z pewnością zwróci na to uwagę.
            `,
            "countingWithReksioDescription": `LICZĘ Z REKSIEM to połączenie multimedialnej przygody z nauką i kompleksowym sprawdzeniem znajomości matematyki z zakresu nauczania początkowego. Zadaniem gracza jest pomóc Reksiowi w uratowaniu zwierząt, które porwał Wilk.
                    Aby tego dokonać, trzeba zagłębić się w świat matematyki.....
                    W rozbudowanej grze matematycznej przeżyjesz niezapomniane przygody. Przed Tobą labirynty, podchody, tajne akcje, dziwne maszyny, łamigłówki, pasjonujące zadania i arytmetyczne pojedynki z Wilkiem.
                    Ale to nie wszystko!
                    
                    Czekają na Ciebie także puzzle, kolorowanki i Wielki Turniej Matematyczny dla kilku graczy!
                    A jeśli chcesz udać się na lekcję matematyki i poznać nowe zagadnienia, Reksio zaprasza do swojej szkoły!
                    
                    W programie znajdziesz:
                    - Pasjonującą grę przygodową!
                    - Wesołe lekcje matematyki dla początkujących!
                    - Dynamiczne gry i zabawy oraz ciekawe nagrody!
                    - Obszerny trening, pozwalający przećwiczyć gry
                    zawarte w programie!
                    - Turniej Matematyczny dla czterech graczy!
                    - Dwa poziomy trudności:
                    dla dzieci z klas 0-1 oraz dzieci z klas 2-3 i starszych!
                    - Statystyki, z których dowiesz się, o postępach w nauce!
                    - Ponad 500 zadań matematycznych podzielonych na dwa poziomy trudności!
                    - 120 pięknych plansz do odwiedzenia, 2000 kwestii mówionych,
                    20 wspaniale animowanych postaci!
                    
                    Nauka matematyki może być wielką przygodą!
            `,
            "abcWithReksioDescription": `ABC z Reksiem, to program dla dzieci od 5 lat. Przeznaczony jest do nauki podstaw alfabetu, funkcji litery w słowie oraz czytania i rozumienia prostych słów, zwrotów i zdań. Program jest rozbudowany i zróżnicowany. Zawiera około 300 gier i zabaw. Znaleźć tu można zarówno kurs nauki alfabetu, jak i wiele zabaw związanych z poznawaniem liter.
                    "ABC z Reksiem" składa się z trzech części: gry, elementarza i szkoły. Pierwsza z nich to wesoła zabawa, w której gracz pomaga Reksiowi skompletować alfabet, podczas rozwiązywania różnych gier i zgadywanek. Interaktywny elementarz to zbiór kolorowych stron poświęconych poszczególnym literkom. Znajdują się tu ukryte animacje, słowa i różne zabawy. Szkoła to przyjazny dziecku kurs nauki alfabetu składający się z około 100 zdań, zabaw i prezentacji. Dziecko uczy się tutaj nie tylko rozpoznawać litery, ale także posługiwać się nimi w różnych sytuacjach. Literkowa gra to zabawa ze Smokiem Literkowym, który porwał chłopca - najlepszego przyjaciela Reksia. Aby go uwolnić Reksio musi skompletować cały alfabet. Dziecko pomaga pieskowi. Jednocześnie poznaje alfabet, ćwiczy pisanie i czytanie. 
                    Centrum reksiowego świata stanowi podwórze domu. Tam ukryte jest 6 ciekawych gier, w których można zdobyć literki. W zabawie "Kura w opałach" Reksio musi odeprzeć ataki lisów. 
                    W "Szklarni" sadzi nasionko i hoduje literki, natomiast w "Maszynie koguta" zamienia przedmioty na litery. W grze: "Wędrowcy" uzupełnia brakujące litery w słowach, zaś w "Literkowym sklepie" sprzedaje przedmioty i zamienia je na literki. Reksio chodzi także "Na ryby" gdzie łowi przedmioty, które następnie może w sklepie zamienić na litery. 
            `
        }
    },
    ro: {
        translation: {
            "lang_pl": "Poloneză",
            "lang_ro": "Română",
            "lang_ru": "Rusă",
            "lang_cz": "Cehă",
            "lang_hu": "Maghiară",
            "lang_en": "Engleză",
            "lang_de": "Germană",
            "creditsTranslations": "Traduceri",
            "viewInOtherLanguages": "Vezi acest site în alte limbi:",
            "adventuresOfReksio": "Aventurile lui Reksio",
            "mainSeries": "Seria principală",
            "educationalGames": "Jocuri educaționale",
            "forTheLittlestPlayers": "Pentru cei mai mici jucători",
            "playInBrowser": "Joacă în browser",
            "extras": "Jocuri extra",
            "englishVersionIsFanMade": "Versiunea în engleză este făcută de fani și dublajul este făcut cu AI",
            "mainAboutHello": "Bine ai venit pe zagrajwreksia.pl - un site dedicat arhivării tuturor versiunilor disponibile ale tuturor jocurilor din seria Aventurile lui Reksio, pentru descărcarea lor și chiar jucarea unora dintre acestea direct în browser (prin ReksioEngine).",
            "mainAboutReadMore": "Citește mai multe despre acest proiect",
            "mainAboutBoombit": "Studioului BoomBit (Aidem Media) i-a expirat licența de utilizat personajul Reksio, astfel că aceștia nu își mai pot vinde jocurile cu el, și nu au probleme cu ideea ca lumea să le descarce.",
            "mainAboutMoreAboutGames": "Puteți afla mai multe informații despre jocurile din seria Aventurile lui Reksio pe:",
            "mainAboutLinkAndLink": "<0>Przygody Reksia HUB</0> (🇵🇱/🇬🇧) și <2>Reksiopedia</2> (🇵🇱)",
            "chooseLanguageVersion": "Alege limba versiunii",
            "releaseDate": "Data lansării",
            "goBack": "Înapoi",
            "reksioAndPirates": "Reksio și Comoara Piraților",
            "reksioAndUFO": "Reksio și OZN-ul",
            "reksioAndWizards": "Reksio și Magicienii",
            "reksioAndTimeMachine": "Reksio și Mașina Timpului",
            "reksioAndCaptainNemo": "Reksio și Căpitanul Nemo",
            "reksioAndKretesInAction": "Reksio și Kretes în Acțiune",
            "reksioAndKretesTheMystery": "Reksio și Kretes: Misterul celei de a Treia Dimensiuni",
            "reksioAndCityOfSecrets": "Reksio și Kretes în Orașul Secretelor",
            "reksioAndCityOfSecretsLE": "Reksio și Kretes în Orașul Secretelor: Ediția Limitată",
            "cityOfSecrets": "Orașul Secretelor",
            "cityOfSecrets2": "Orașul Secretelor 2",
            "countingWithReksio": "Matematica cu Reksio",
            "reksioAndOrthography": "Reksio și Ortografia",
            "reksioKindergarten": "Reksio la Grădinița Veselă",
            "reksioPuzzles": "Reksio, Micul Înțelept",
            "abcWithReksio": "ABC with Reksio",
            "reksioAndAnimals": "Reksio and Animals",
            "reksioAndFriends": "Reksio and Friends",
            "source": "Sursă",
            "createdAndManagedBy": "Creat și gestionat de <1>Adikso</1>",
            "sourceCode": "Cod sursă",
            "originalCDVersionName": "Versiunea originală de pe CD (ISO)",
            "originalCDVersionDescription": "Această versiune este exact cum se găsește pe disc; este posibil să nu funcționeze pe sisteme de operare moderne",
            "improvedVersionName": "Versiune îmbunătățită cu patch-uri",
            "zipArchive": "Arhivă ZIP",
            "instructionsRunExe": "Rulează jocul dând clic pe {{file}}",
            "improvedVersionDescription": "Cu crack și patch-uri pentru sisteme de operare moderne",
            "unofficialPCPort": "Port neoficial pentru PC",
            "unofficialPCPortDescription": "Acest joc a fost portat de pe Android/iOS pe PC de comunitate",
            "unofficialTranslationDescription": "Traducere neoficială făcută de fani",
            "visitReksioDiscordForHelp": "Ai nevoie de ajutor cu jocul sau instalarea acestuia? Alătură-te comunității Reksio pe <1>Discord</1>!",
            "credits": "Credite",
            "playerEnterFullscreen": "Ecran complet",
            "playerImportSaveFile": "Încarcă salvarea",
            "playerExportSaveFile": "Descarcă salvarea",
            "playerPressHereToStart": "Dă clic aici pentru a începe",
            "specialInstructions": "Instrucțiuni speciale",
            "codeFromBooklet": "Dacă jocul îți cere codul din revistă, trebuie să introduci:",
            "creditsBackground": "Fundalul a fost extins de Paweł Wierzbicki",
            "withoutGameDownloading": "Fără descărcare",
            "mirrors": "Link alternativ",
            "newSeries": "Seria nouă",
            "reksioAndPiratesDescription": `Undeva, în Oceanul Non-Pacific, căpitanul piraților, pe nume Vântură-Ape, dispare in condiții misterioase. Singura hartă ce duce la o legendară comoară dispare o data cu el.

                    Între timp, surferul Reksio este prins de o furtună pe mare. Tunete, fulgere... Valurile imense îl arunca pe țărmul unei insule tropicale. Aici găsește o sticlă care conține un bilețel enigmatic.
                    
                    Astfel Reksio împreună cu tine, dragule jucător, va participa la marea aventură a piraților.
                    
                    Ce s-a întamplat in realitate cu Vântură-Ape?
                    
                    Ce păzesc cu atâta sfințenie membrii Tribului Puilor?
                    
                    Ce mister se ascunde sub vulcan?
                    
                    Unde se află comoara piraților?
                    
                    Ce făcea Kretes pe insulă?
                    
                    Poți gasi raspunsurile la toate aceste întrebări însoțindu-l pe Reksio în această aventură plină de neprevăzut.
            `,
            "reksioAndUFODescription": `Undeva într-o galaxie îndepărtată... într-un sistem unde oul nu este o surpriză... pe o planetă unde cocoșul îți urează noapte bună... un misterios Kurator construiește o armă imensă, pe care vrea s-o folosească pentru cucerirea Universului...

                    Între timp, Reksio, după ce a rezolvat misterul comorii piraților se intoarce acasă... Aici el află despre răpirea găinilor din ograda sa. Reksio se hotărăște să le salveze și pornește in urmărirea răpitorilor extratereștri.
                    
                    De ce au fost răpite găinile?
                    
                    Cine este de fapt misteriosul Kurator?
                    
                    Ce rol are loboda de pe planeta Kurakis?
                    
                    Este dragostea suficient de puternică incat sa dărame zidurile?
                    
                    Răspunsurile la aceste întrebări le vei afla însoțindu-l pe Reksio în noua sa expediție...
            `,
            "reksioAndWizardsDescription": `Undeva într-o Țară a Vrăjilor ce se destramă, Burektorul Universității de Magie studiază o profeție antică. Aceasta dezvăluie că doar un misterios Babole are puterea să îl demaște pe „Cel Ce Atât de Groaznic Se Înfurie” și să îi oprească planurile malefice.

                    Cugetarea neliniștită a vrăjitorului e întreruptă de sunetul unei oglinde cum se sparge — și o cârtiță monstruos de mare pătrunde în biroul său, strigând: „Nu cred!”... Pe urmele sale, curajosul câine Reksio pășește în Țara Vrăjilor...
                    
                    Este Reksio acest Babole pe care îl prevestește profeția?
                    
                    Care dintre cei șapte vrăjitori este „Cel Care Atât de Groaznic Se Înfurie”?
                    
                    Poate Țara Vrăjilor să fie salvată de distrugere cu ajutorul unei cârtițe mereu posomorâte, o piatră vorbăreață, și o mână de obiecte magice?
                    
                    Cum îți poți da seama dacă ești doar o broască obișnuită sau o prințesă fermecată?
                    
                    Și cum stăpânești vrăji puternice într-un singur weekend?
                    
                    Toate acestea le vei afla alăturându-te lui Reksio într-o altă aventură plină de surprize și escapade palpitante...
            `,
            "reksioAndTimeMachineDescription": `După ce au învins vrăjitorul cel rău, Reksio și Kretes sperau să se poată odihni în sfârșit. Dar nu a fost să fie. Prinși de Ordinul Pernelo Băgăcioase, aceștia și-au petrecut restul vieților întemnițați. Reksio nu a mai avut parte de aventuri, iar Kretes nu s-a mai întors niciodată la Molly..."

                    Daca vreți ca prezicerea să nu se adeverească, ajutați-i să transforme o canapea veche într-o mașină a timpului și să se întoarcă în trecut, acolo unde îl pot găsi pe Nostradamus, singura persoană care știe cum poate fi schimbat destinul...
                    
                    Cine e Nostradamus și de ce atâta mister?
                    
                    Unde se găsește galeria timpului și cum se poate ajunge la ea?
                    
                    Chiar au dispărut dinozaurii? Sau s-au mutat și locuiesc pe altă planetă?
                    
                    Ce ascund piramidele din Egipt?
                    
                    Cum poți câștiga un turnir cavaleresc daca ești caine?
                    
                    Care este adevărul din spatele zâmbetului Mona Lisei?
                    
                    Pe ce numere ar trebui să pariezi la loterie?
                    
                    Răspunsuri la *aproape* toate aceste întrebări le veți afla însoțindu-i pe Reksio și Kretes in noua lor aventură...
            `,
            "reksioAndCaptainNemoDescription": `După ce mașina timpului este distrusă la finele secolului al XIX-lea, Reksio and Kretes sunt nevoiți să găsească un alt mod să se întoarcă în vremurile lor. Cea mai bună speranță a lor este faimosul detectiv Șvarloc Holmes. Din păcate, planurile lor de a găsi această peronalitate legendară sunt împiedicate de misteriosul Nemo, căpitanul submarinului Nautilius.

                    Se va termina această mare aventură în jurul lumii cu succes - sau mai bine spus se va termina aceasta vreodată?
                    
                    Va reuși Willy Frogg să le arate tuturor că se înșeală?
                    
                    Unde este ascuns leagănul civilizației Kretonilor antici — și oare acolo se află *adevăratul* mister?
                    
                    Va reuși Reksio să câștige inima lui Kari Mata Kari?
                    
                    Chiar poate Chuck Norvik să sape tunele doar cu o lovitură prin semirotație?
                    
                    Vei descoperi toate aceste răspunsuri alăturându-te lui Reksio și Kretes la încă o aventură incredibilă și de neuitat...
            `,
            "reksioAndKretesInActionDescription": `Un supliment de sine stătător stil arcade la seria Aventurile lui Reksio. Nu necesită jucarea niciunui alt joc din serie, și nici cunoștințe existente despre aventurile anterioare ale lui Reksio — doar concentrare și degete dibace.

                    Iaca au trecut câteva luni de când a luat final marea aventură a lui Reksio și Kretes. Eroii noștri se bucură acum de niște bine-meritată pace și liniște.
                    
                    Dar acest calm este întrerupt de venirea unui pachet din America — un set exclusivit de jocuri stil arcade bazate pe aventurile lui Reksio și Kretes. Eroii noștrii se așează în fața consolei lor inventate de ingeniosul Cocoș Inventator, și se pun pe joacă.
                    
                    Și astfel, ei încep să descopere un număr de inconsistențe dubioase...
            `,
            "reksioAndKretesTheMysteryDescription": `Un zumzet misterios în mijlocul nopții îi scoală din pat pe Reksio, Kretes, și Cocoșul Inventator. Fără ezitare și în ciuda pericolului, eroii noștri ies în recunoaștere.

                    Curând, ei descoperă un un masiv Monolit Negru a apărut într-o poiană. Kretes atinge suprafața acesteia - și într-o clipă, toți trei eroi sunt trași în adâncurile celei de a treia dimensiuni.
                    
                    Cineva i-a răpit pe eroii noștri și i-a lăsat blocați la baza Turnului Întunecat.
                    
                    Cineva i-a rupt din siguranța lumii lor plate, bidimensionale, și i-a aruncat într-un spațiu ostil, tridimensional.
                    
                    Cineva a construit 54 de labirinturi pentru a le pune camaraderia prin testul suprem.
                    
                    Cineva necruțător.
                    
                    Cineva... familiar.
            `,
            "reksioAndCityOfSecretsDescription": `Curajosul câine Reksio coboară in vizuina lui Kretes și se evaporă pur și simplu. Îngrijorat, Kretes pleacă in căutarea sa, străbate labirinturi, tuneluri, coridoare, pană ajunge in Oraşul Secretelor: Capturat de şobolanii ce conduc oraşul, Reksio a fost judecat pentru spionaj şi condamnat la închisoare.
            
                    Va reuşi Kretes să-l salveze la timp?
                    
                    Cine este misteriosul primar care s-a instalat în fruntea Oraşului imediat după Revoluţie?
                    
                    Se va lăsa Reksio inghiţit de şarpele uriaş pentru a recupera probele ce-i dovedesc nevinovaţia?
                    
                    Cine se află in spatele şobolanilor care terorizează oraşul?
                    
                    Pregătiţi-vă pentru excursia 3D frumos colorată, aventuraţi-vă in subteran alături de Reksio şi Kretes şi descoperiţi toate misterele Oraşului Secretelor. 
            `,
            "reksioAndOrthographyDescription": `Va doriți ca puștiul dumneavoastră să vorbească in limba română corect, fără să facă greșeli de vorbire sau de scriere? Dacă sunteți unul dintre părinții cu adevărat preocupați de cunoștințele copilului dumneavoastră, atunci sigur veți aprecia la justa lui valoare acest joc educațional-distractiv.
                    
                    Când folosim *s* sau *z*, *m* sau *n*, *ii* sau *iii* , *ae* sau *e*, când folosim cratima sau care sunt cuvintele compuse. Iată câteva din temele puse in dezbatere!
                    
                    Grafica și animația extrem de vii și vesele fac din regulile gramaticale o plăcere! Mai ales că, pentru rezolvarea lor, vei fi ajutat de animăluțe simpatice și invățatul Reksio!
                    
                    Jocurile dezvoltă memoria și gândirea logică! Un perfect echilibru între divertisment și educație, programul este conceput în așa fel încât învățatul să fie o plăcere.
                    
                    Cu ajutorul acestui CD, copilul dumeavoastră va invăța în mod rapid și foarte ușor cuvinte noi și expresii dificile. Setul de jocuri și sarcinile pregătite creeaza o poveste care face ca dobândirea cunoștințelor să se facă într-un mod agreabil pentru copil! 
            `,
            "reksioKindergartenDescription": `După atâtea peripeții, Reksio s-a înscris la grădinița și te invită la o plimbare educativă cu opt opriri, adica opt jocuri pentru cei mici.
                    
                    Poți deveni campion al memoriei jucând „Descoperă perechile” sau „Jucării ce dispar”, îți poți demonstra talentul de constructor în atelier unde va trebui să construiești conform schemei, vei fi mecanic de locomotivă și va trebui sa conduci toți pasagerii în Gara Centrală.
                    
                    Alte surprize te așteaptă, descoperă-le! 
            `,
            "countingWithReksioDescription": `Puștiul tău îți spune că orele de matematică sunt plictisitoare, că adunările și scăderile îi dau bătăi de cap, iar înmulțirile și împărțirile sunt greu de rezolvat?
                    
                    Dacă te confrunți cu această problemă, sau doar dacă vrei să-i oferi un motiv de a-și petrece timpul intr-un mod interesant și plăcut, în care să se distreze, dar și să devină captivat de matematică, atunci Reksio și Matematica, te poate ajuta!
                    
                    Reksio va fi meditatorul personal! Alături de el, vei învăța să numeri, iar operațiile matematice de bază (adunarea, scăderea, înmulțirea, împărțirea) și figurile geometirce le vei aprofunda. De asemenea, vei rezolva probleme cu mulțimi, de logică matematică si ecuații!
                    
                    Nicicând nu a fost mai ușor sa înveți matematică! Alături de colegi haioși, vei reuși să-ți focalizezi atenția asupra problemelor ridicate de joc sau să te orientezi în spațiu, ghidându-te după o hartă! Acumularea cunoștințelor într-o manieră distractivă este doar începutul!
                    
                    Poți opta pentru două grade diferite de dificultate: greu și ușor, în funcție de vârstă, care te vor ajuta să-ți exersezi gândirea logică, capacitatea de asociere și de memorare. Poate fi folosit ca o metodă de testare a cunoștințelor dobândite.
                    
                    Deci, ajutați copilul să se distreze cu folos! 
            `,
            "reksioPuzzlesDescription": `Un nou joc oferit de simpaticul Reksio, cel mai aventurier dintre căței!
                    
                    Descoperă alături de eroul nostru misterele unei insule exotice, rezolvă provocările și reconstituie drumul către comoara piraților!
                    
                    Te așteaptă o cursă nebună prin labirint, teste de perspicacitate, operații logice și aritmetice, precum și o mulțime de alte surprize!
                    
                    Deopotrivă educativ și recreativ, jocul este construit pe niveluri de dificultate, fiind accesibil chiar și celor mai micuți admiratori ai personajului.
                    
                    Ideal pentru antrenarea memoriei și a spiritului de observație!
                    
                    Folosește-ți priceperea, cunoștințele și intuiția pentru a finaliza cu succes sarcinile indicate de Reksio.
                    
                    Răsplata va fi pe măsura eforturilor și istețimii tale!  
            `
        }
    }
};

// Keys fallback to English
const englishKeys = Object.keys(resources.en.translation)
for (const details of Object.values(resources)) {
    const langKeys = Object.keys(details.translation)
    const diff = englishKeys.filter(x => !langKeys.includes(x));
    for (const langKey of diff) {
        (details.translation as Record<string, string>)[langKey] = (resources.en.translation as Record<string, string>)[langKey]
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;