import i18n from "i18next";
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
            "viewInOtherLanguages": "View this website in other languages:",
            "adventuresOfRex": "Adventures of Rex",
            "mainSeries": "Main series",
            "educationalGames": "Educational games",
            "forVerySmallPlayers": "For the very young players",
            "playInBrowser": "🌐 Play in the browser",
            "extras": "Extras",
            "englishVersionIsFanMade": "The English version is fan made and uses AI for dubbing.",
            "mainAboutHello": "Welcome to zagrajwreksia.pl - a website aimed at archiving all available games from Adventures of Rex series (and their versions), and letting you download them and play some of them directly in your browser (ReksioEngine).",
            "mainAboutReadMore": "Read more about the project",
            "mainAboutBoombit": "BoomBit (AidemMedia) has had its license to use the character of Reksio run out, making them unable to sell it anymore, and they don't mind downloading the games.",
            "mainAboutMoreAboutGames": "You can find more information about the games from the The Adventures of Rex series at:",
            "mainAboutLinkAndLink": "<0>Przygody Reksia HUB</0> (🇵🇱/🇬🇧) and <2>Reksiopedia</2> (🇵🇱)",
            "chooseLanguageVersion": "Select a language version",
            "releaseDate": "Release date",
            "goBack": "Go back",
            "reksioAndPirates": "Reksio and Pirate Treasure",
            "reksioAndUFO": "Reksio and UFO",
            "reksioAndWizards": "Reksio and Wizards",
            "reksioAndTimeMachine": "Reksio and Time Machine",
            "reksioAndCaptainNemo": "Reksio and Captain Nemo",
            "reksioAndKretesInAction": "Reksio and Kretes in Action",
            "reksioAndKretesTheSecret": "Reksio and Kretes The Secret of the Third Dimension",
            "source": "Source",
            "createdAndManagedBy": "Created and managed by <1>Adikso</1>",
            "sourceCode": "Source code",
            "reksioAndPiratesDescription": `Somewhere on the Restless Ocean, under mysterious circumstances, the pirate commander Captain O'Gryzek disappears. Along with him vanishes the only map leading to the legendary treasure...

                    Meanwhile, Reksio, windsurfing across the sea, is caught in a raging storm. Amid flashes of lightning and the roar of the waves, Reksio crashes onto the shores of a mysterious island. Soon after, he finds a bottle washed up by the ocean, containing an enigmatic message:
                    RIKWA29
                    
                    And so, together with the player, he becomes entangled in a grand pirate adventure.
                    
                    What really happened to Captain O'Gryzek?
                    
                    What is the lost tribe of the Black Hens guarding so closely?
                    
                    What secrets lie beneath the volcano?
                    
                    Where is the Pirates’ Treasure hidden?
                    
                    How did Kretes behave on the Island?
                    
                    You’ll find out everything by joining Reksio on this danger-filled and thrilling adventure.
            `,
            "reksioAndUFODescription": `Somewhere in a distant galaxy... on a planet where a mole says goodnight... a mysterious Curator is building a powerful egg, with which he plans to conquer the entire universe...

                    Meanwhile, Reksio, having uncovered the secret of the Pirates’ Treasure, returns home... There, he learns that the hens from his yard have been abducted by a UFO... Reksio decides to rescue the hens and sets off in pursuit of the cosmic kidnappers.
                    
                    Why were the hens abducted?
                    
                    Who is the mysterious Curator really?
                    
                    What is the lebiodka from the planet Kurakis used for?
                    
                    Can love be enough to tear down walls?
                    
                    You’ll find out everything by joining Reksio on another surprise-filled and thrilling adventure...
            `,
            "reksioAndWizardsDescription": `Somewhere in the crumbling Land of Wonders, the Burektor of the University of Magic studies an ancient prophecy. It reveals that only a mysterious Chosen One possesses the power to unmask *He Who So Horribly Muddles* and stop his wicked schemes.

                    The sound of shattering glass interrupts the wizard’s frantic pondering—as a monstrously large mole bursts into his study, shouting: “I don’t believe this!” Hot on his heels, the brave dog Reksio enters the Land of Wonders...
                    
                    Is Reksio the Chosen One foretold in the prophecy?
                    
                    Which of the seven Wizards is *He Who So Horribly Muddles*?
                    
                    Can the Land of Wonders be saved from destruction with the help of a perpetually disgruntled mole, a chatty stone, and a handful of magical items?
                    
                    How can you tell if you’re just an ordinary frog or an enchanted princess?
                    
                    And how do you master powerful spells over a single weekend?
                    
                    You’ll find out everything by joining Reksio on yet another adventure full of surprises and thrilling escapades…
            `,
            "reksioAndTimeMachineDescription": `"Having defeated the evil Wizard, Reksio and Kretes hoped to finally rest. But that was not to be. Captured by the Order of the Ricepaddians, they spent the rest of their lives in the dungeons. Reksio never had another adventure, and Kretes never returned to his Molly…"

                    If you don’t want the story to end this way, help Reksio rebuild an old sofa into a time machine and… go back with him to the distant past. For only there lives the one person who knows how to fix the Clock of History, alter the course of events, and straighten the twists of time.
                    That person is the mysterious **Nostradamus**...
                    
                    Who is Nostradamus, and why is he so mysterious?
                    
                    Where did the Time Funnels and Time Mounds come from—and how do they work?
                    
                    Did the dinosaurs really go extinct? Or did they just go… somewhere?
                    
                    Who are the guardians of the secret mantra that holds the key to passing the Snake Rift in the Pyramid of Fear?
                    
                    How do you win a knight’s tournament—when you’re a dog?
                    
                    What is the real story behind Mona Lisa’s smile?
                    
                    And which numbers are worth betting on in the lottery?
                    
                    You’ll discover most of the answers by joining Reksio and Kretes on their fourth, action-packed and surprise-filled adventure...
            `,
            "reksioAndCaptainNemoDescription": `After the time machine is destroyed at the turn of the 19th and 20th centuries, Reksio and Kretes are forced to find another way back to their own time. Their best hope lies with the famous detective **Shlafrock Holmes**. Unfortunately, their plans to find this legendary figure are thwarted by the mysterious **Captain Nemo**, commander of the submarine *Nautilus*.

                    Will the great journey around the world end in success—or will it ever end at all?
                    
                    Will **Willy Frogg** fool everyone and make them look like fools?
                    
                    Where is the cradle of the ancient **Kreton** civilization buried—and is that where the *real* mystery lies?
                    
                    Will Reksio win the heart of **Kari Mata Hari**?
                    
                    Can **Chuck Nornik** really dig tunnels with a spinning kick?
                    
                    You'll find out everything by joining Reksio and Kretes on yet another breathtaking and unforgettable adventure...
            `,
            "reksioAndKretesInActionDescription": `"**"An independent arcade-style addition to the *Adventures of Reksio* series. It does not require installation of other games from the series, nor any prior knowledge of Reksio's previous adventures—just focus and nimble fingers."**

                    Several months have passed since Reksio and Kretes's grand adventure came to an end. The heroes are now enjoying some well-deserved peace and quiet.
                    
                    But the calm is interrupted by the arrival of a package from America—an exclusive set of arcade games based on the adventures of Reksio and Kretes. The heroes sit down in front of the console, invented by the ever-creative Rooster Inventor, and start to play.
                    
                    In doing so, they begin to uncover a number of strange inconsistencies…
            `,
            "reksioAndKretesTheSecretDescription": `A mysterious hum in the middle of the night jolts Reksio, Kretes, and the Rooster Inventor out of bed. Without hesitation and despite the danger, the friends set out to investigate.

                    Soon, they discover that a massive **Black Monolith** has appeared in a forest clearing. Kretes touches its surface—and in an instant, all three heroes are pulled into the depths of the third dimension.
                    
                    Someone has kidnapped the friends and abandoned them at the foot of the **Dark Tower**.
                    
                    Someone has torn them from the safety of their flat, 2D world and cast them into a hostile, three-dimensional space.
                    
                    Someone has built **54 labyrinths** to put their friendship to the ultimate test.
                    
                    Someone ruthless.
                    
                    Someone… familiar.
            `,
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
            "viewInOtherLanguages": "Zobacz tą stronę w innym języku:",
            "adventuresOfRex": "Przygody Reksia",
            "mainSeries": "Główna seria",
            "educationalGames": "Gry edukacyjne",
            "forVerySmallPlayers": "Dla bardzo małych graczy",
            "playInBrowser": "🌐 Graj w przeglądarce",
            "extras": "Dodatki",
            "englishVersionIsFanMade": "Wersja w języku angielskim jest wersją fanowską i używa AI do dubbingu.",
            "mainAboutHello": "Witaj na zagrajwreksia.pl - stronie mającej na celu archiwizacje wszelkich możliwych gier o reksiu (i ich wersji), umożliwienie ich pobrania oraz zagrania w niektóre z nich bezpośrednio w przeglądarce (ReksioEngine).",
            "mainAboutReadMore": "Przeczytaj więcej o projekcie",
            "mainAboutBoombit": "Firmie BoomBit (AidemMedia) skończyła się licencja na wykorzystywanie postaci Reksia przez co nie są w stanie jej już sprzedawać i nie mają nic przeciwko pobieraniu gier.",
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
            "reksioAndKretesTheSecret": "Reksio i Kretes Tajemnica Trzeciego Wymiaru",
            "source": "Źródło",
            "createdAndManagedBy": "Stworzone i zarządzane przez <1>Adikso</1>",
            "sourceCode": "Kod źródłowy",
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
            "reksioAndKretesTheSecretDescription": `Tajemniczy szum w środku nocy stawia na nogi Reksia, Kretesa i Koguta Wynalazcę. Przyjaciele, nie bacząc na niebezpieczeństwo, wyruszają na zwiad. Niebawem okazuje się, że na polanie w lesie wyrósł potężny Czarny Monolit. Kretes dotyka jego powierzchni i naraz wszyscy trzej bohaterowie zostają wciągnięci w czeluść trzeciego wymiaru.

                    Ktoś uprowadził przyjaciół i porzucił u podnóża Mrocznej Wieży.
                    
                    Ktoś wyrwał ich z bezpiecznego płaskiego rysunku i umieścił w niegościnnej trójwymiarowej przestrzeni.
                    
                    Ktoś przygotował 54 labirynty aby wystawić ich przyjaźń na próbę.
                    
                    Ktoś pozbawiony skrupułów
                    
                    Ktoś znajomy... 
            `,
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;