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
            "adventuresOfReksio": "Adventures of Reksio",
            "mainSeries": "Main series",
            "educationalGames": "Educational games",
            "forVerySmallPlayers": "For the littlest players",
            "playInBrowser": "🌐 Play in the browser",
            "extras": "Extras",
            "englishVersionIsFanMade": "The English version is fan made and uses AI for dubbing.",
            "mainAboutHello": "Welcome to zagrajwreksia.pl - a website created to archive all available games from Adventures of Reksio series (including their versions), so you can download them and even play some of them directly in your browser (via ReksioEngine).",
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
            "reksioAndKretesTheSecret": "Reksio and Kretes: The Secret of the Third Dimension",
            "source": "Source",
            "createdAndManagedBy": "Created and managed by <1>Adikso</1>",
            "sourceCode": "Source code",
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
            "reksioAndKretesTheSecretDescription": `A mysterious hum in the middle of the night jolts Reksio, Kretes, and the Rooster Inventor out of bed. Without hesitation and despite the danger, the friends set out to investigate.

                    Soon, they discover that a massive Black Monolith has appeared in a forest clearing. Kretes touches its surface — and in an instant, all three heroes are pulled into the depths of the third dimension.
                    
                    Someone has kidnapped the friends and left them stranded at the foot of the Dark Tower.
                    
                    Someone has torn them from the safety of their flat, 2D world and cast them into a hostile, three-dimensional space.
                    
                    Someone has built 54 labyrinths to put their friendship to the ultimate test.
                    
                    Someone ruthless.
                    
                    Someone... familiar.
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
            "viewInOtherLanguages": "Zobacz tę stronę w innym języku:",
            "adventuresOfReksio": "Przygody Reksia",
            "mainSeries": "Główna seria",
            "educationalGames": "Gry edukacyjne",
            "forVerySmallPlayers": "Dla bardzo małych graczy",
            "playInBrowser": "🌐 Graj w przeglądarce",
            "extras": "Dodatki",
            "englishVersionIsFanMade": "Wersja w języku angielskim jest wersją fanowską i używa AI do dubbingu.",
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
    },
    ro: {
        translation: {
            "lang_pl": "Poloneză",
            "lang_ro": "Română",
            "lang_ru": "Rusă",
            "lang_cz": "Cehă",
            "lang_hu": "Maghiară",
            "lang_en": "Engleză",
            "viewInOtherLanguages": "Vezi acest site în alte limbi:",
            "adventuresOfReksio": "Aventurile lui Reksio",
            "mainSeries": "Seria principală",
            "educationalGames": "Jocuri educaționale",
            "forVerySmallPlayers": "Pentru cei mai mici jucători",
            "playInBrowser": "🌐 Joacă în browser",
            "extras": "Jocuri extra",
            "englishVersionIsFanMade": "Versiunea în engleză este făcută de fani și folosești AI pentru dublaj.",
            "mainAboutHello": "Bine ai venit pe zagrajwreksia.pl - un site făcut pentru a arhiva toate jocurile disponibile din seria Aventurile lui Reksio (cu toate versiunile lor), și pentru a permite descărcarea lor și chiar jucarea unora direct în browser (prin ReksioEngine).",
            "mainAboutReadMore": "Citește mai multe despre acest proiect",
            "mainAboutBoombit": "Studioului BoomBit (Aidem Media) i-a expirat licența de utilizat personajul Reksio, astfel că aceștia nu își mai pot vinde jocurile cu el, și nu au probleme cu ideea ca lumea să le descarce.",
            "mainAboutMoreAboutGames": "Puteți afla mai multe informații despre jocurile din seria Aventurile lui Reksio pe:",
            "mainAboutLinkAndLink": "<0>Przygody Reksia HUB</0> (🇵🇱/🇬🇧) și <2>Reksiopedia</2> (🇵🇱)",
            "chooseLanguageVersion": "Alege limba versiunii",
            "releaseDate": "Data apariției",
            "goBack": "Înapoi",
            "reksioAndPirates": "Reksio și Comoara Piraților",
            "reksioAndUFO": "Reksio și OZN-ul",
            "reksioAndWizards": "Reksio și Magicienii",
            "reksioAndTimeMachine": "Reksio și Mașina Timpului",
            "reksioAndCaptainNemo": "Reksio și Căpitanul Nemo",
            "reksioAndKretesInAction": "Reksio și Kretes în Acțiune",
            "reksioAndKretesTheSecret": "Reksio și Kretes: Misterul celei de a Treia Dimensiuni",
            "source": "Sursă",
            "createdAndManagedBy": "Create și gestionat de <1>Adikso</1>",
            "sourceCode": "Cod sursă",
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
            "reksioAndKretesTheSecretDescription": `Un zumzet misterios în mijlocul nopții îi scoală din pat pe Reksio, Kretes, și Cocoșul Inventator. Fără ezitare și în ciuda pericolului, eroii noștri ies în recunoaștere.

                    Curând, ei descoperă un un masiv Monolit Negru a apărut într-o poiană. Kretes atinge suprafața acesteia - și într-o clipă, toți trei eroi sunt trași în adâncurile celei de a treia dimensiuni.
                    
                    Cineva i-a răpit pe eroii noștri și i-a lăsat blocați la baza Turnului Întunecat.
                    
                    Cineva i-a rupt din siguranța lumii lor plate, bidimensionale, și i-a aruncat într-un spațiu ostil, tridimensional.
                    
                    Cineva a construit 54 de labirinturi pentru a le pune camaraderia prin testul suprem.
                    
                    Cineva necruțător.
                    
                    Cineva... familiar.
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