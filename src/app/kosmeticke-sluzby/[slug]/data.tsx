export interface IPriceItem {
    name: string;
    price: string;
    description?: string;
    tooltipText?: string;
}

export const getServices = () => {
    return [
        {
            slug: "nehtova-modelace",
            serviceName: "Nehtová modelace",
            personName: "Ivana Zúrik",
            personPhone: "+420724826956",
            personPhoneFormated: "+420 724 826 956",
            personImg: "/people/anno_ivana.png",
            personImgAlt: "Ivana Zúrik - Nehtová modelace",
            personVideo: "/videos/ivana-nehty.mp4",
            priceList: [
                {
                    name: "Gelové nehty",
                    price: "550,-",
                },
                {
                    name: "Gelové nehty s prodloužením šablony",
                    price: "590,-",
                },
                {
                    name: "s prodloužením (extrémní délky - nad 2cm Stiletto)",
                    price: "690,-",
                },
                {
                    name: "Gellak nohy",
                    price: "450,-",
                },
                {
                    name: "Odstranění gelových nehtů",
                    price: "250,-",
                },
                {
                    name: "Doplnění jednoho nehtu",
                    price: "50,-",
                },
                {
                    name: "Zdobení: francie, kamínky, nálepky, razítkování, malování",
                    price: "30,-",
                },
                {
                    name: "Manikúra",
                    price: "200,-",
                },
                {
                    name: "Parafínový zábal + masáž rukou",
                    price: "250,-",
                },
                {
                    name: "Masáž rukou",
                    price: "100,-",
                },
            ],
        },
        {
            slug: "pavla-kosmeticke-sluzby",
            serviceName: "Kosmetické služby",
            personName: "Pavla Večerková",
            personPhone: "+420737921186",
            personPhoneFormated: "+420 737 921 186",
            personImg: "/people/anno_pavla.png",
            personImgAlt: "Pavla Večerková - Kosmetické služby",
            personVideo: undefined,
            priceList: [
                {
                    name: "Základní kosmetické ošetření (90min)",
                    price: "1190,-",
                    description: "odlíčení, ultrazvuková špachtle, enzymaticky peeling, masáž, maska, aplikace séra, krém ultrazvukem",
                },
                {
                    name: "Kosmetické ošetření Akné (90min)",
                    price: "1190,-",
                    description: "odlíčení, ultrazvuková špachtle, plasmová terapie, peeling, maska, aplikace séra, krém ultrazvukem",
                },
                {
                    name: "Kosmetické ošetření FILLIFT (90min)",
                    price: "1490,-",
                    description: "odlíčení, ultrazvuková špachtle, enzymatický peeling, 2x masáž, liftingová maska, aplikace séra, krém ultrazvukem",
                },
                {
                    name: "Kosmetika pro muže (90min)",
                    price: "900,-",
                    descritpion: "ultrazvuková špachtle, peeling, masáž, maska, aplikace séra, krému",
                },
                {
                    name: "Čištění pleti ultrazvukovou špachtlí (30min)",
                    price: "300,-",
                },
                {
                    name: "Přístrojové čištění pleti (45min)",
                    price: "500,-",
                    descruption: "čištění šplachtlí, dermabraze",
                },
                {
                    name: "Laminace obočí",
                    price: "600,-",
                },
                {
                    name: "Barvení řas",
                    price: "100,-",
                },
                {
                    name: "Barvení a úprava obočí",
                    price: "180,-",
                },
                {
                    name: "Epilace jedné části obličeje",
                    price: "100,-",
                    description: "knírek, brada, líčka",
                },
                {
                    name: "Epilace celého obličeje",
                    price: "280,-",
                },
                {
                    name: "CO2 Karboxy terapie",
                    price: "1 690,-",
                },
                {
                    name: "Kolagenové nitě",
                    price: "1 590,-",
                },
                {
                    title: "PŘÍSTROJOVÁ KOSMETIKA",
                },
                {
                    name: "Kosmetické ošetření Anti-age a Anti-akne (90min)",
                    price: "1600,-",
                    description: "odlíčení, tepelná terapie, ultrazvuková špachtle, vodní dermabraze, plasmová terapie, okysličení pleti, fotonová maska, aplikace séra, krému ultrazvukem",
                },
                {
                    name: "Kosmetické ošetření Radiofrekvence - lifting pleti (90min)",
                    price: "1800,-",
                    description: "odlíčení, tepelná terapie, ultrazvuková špachtle, vodní dermabraze, plasmová terapie, radiofrekvence+oční okolí, okysličení pleti, maska, aplikace séra, krému ultrazvukem",
                    tooltipText:
                        <ul>
                            <li>Podpora tvorby kolagenu a elastických vláken</li>
                            <li>Pozvednutí a vyhlazení kontur obličeje</li>
                            <li>Redukuje podkožní tuk kolem očí</li>
                            <li>Potlačení tmavých kruhů kolem očí</li>
                        </ul>
                    ,
                },
                {
                    name: "Kosmetické ošetření Mezoterapie (bezjehličková metoda-elektroforéza) (90min)",
                    price: "1950,-",
                    description: "odlíčení, tepelná terapie, ultrazvuková špachtle, vodní dermabraze, plasmová terapie, mezoterapie, okysličení pleti, maska, aplikace séra, krému ultrazvukem",
                    tooltipText:
                        <ul>
                            <li>Výživa, a omlazení pokožky</li>
                            <li>Podpora tvorby kolagenu, elastinu, kyseliny hyaluronové</li>
                            <li>Zjemní a vyhladí vrásky, jizvy</li>
                            <li>Mírné vyplnění objem tváře</li>
                        </ul>
                    ,
                },
                {
                    name: "Kosmetické ošetřeni Radiofrekvence + Mikroproud (100min)",
                    price: "2050,-",
                    description: "Ošetřeni Radiofrekvence + posílení obličejových svalů, posílení kontur obličeje",
                },
                {
                    name: "Kosmetické ošetření Mezoterapie + Mikroproud (100min)",
                    price: "2150,-",
                    description: "ošetření Mezoterapie + posílení obličejových svalů, posílení kontur obličeje",
                },
                {
                    title: "LÍČENÍ",
                },
                {
                    name: "Denní, přirozené líčení",
                    price: "500,-",
                },
                {
                    name: "Večerní líčení",
                    price: "700,-",
                },
                {
                    name: "Líčení na focení",
                    price: "1000,-",
                },
                {
                    name: "Svatební líčení + zkouška",
                    price: "1000,- + 700,-",
                },
                {
                    name: "Líčení svatebčanů",
                    price: "500,-",
                },
                {
                    name: "Lepení řas + řasy",
                    price: "od 100,-",
                },
            ],
        },
        /* {
             slug: "natalie-kosmeticke-sluzby",
             serviceName: "Kosmetické služby",
             personName: "Natálie Pflegrová",
             personPhone: "+420605055960",
             personPhoneFormated: "+420 605 055 960",
             personImg: "/people/anno_natalie.png",
             personImgAlt: "Natálie Pflegrová - Kosmetické služby",
             personVideo: "/videos/madero_natka.mp4",
             priceList: [
                 {
                    title: "KOSMETICKÉ OŠETŘENÍ",
                },
                 {
                     name: "Teenager ošetření (do 18 let)",
                     price: "790,-",
                },
               {
                     name: "Základní ošetření s masáží (90 min.)",
                     price: "990,-",
                 },
                 {
                     name: "Hydratační ošetření s kyselinou hyaluronovou",
                     price: "1.190,-",
                 },
                 {
                     name: "Anti-age ošetření Icon Time",
                     price: "1.250,-",
                 },
                 {
                     name: "Relaxační masáž obličeje a dekoltu",
                     price: "500,-",
                 },
                 {
                     title: "OBOČÍ & ŘASY",
                 },
                 {
                     name: "Úprava obočí (pinzetou, voskem)",
                     price: "120,-",
                 },
                 {
                     name: "Úprava a barvení obočí",
                     price: "250,-",
                 },
                 {
                     name: "Laminace obočí s keratinem a barvením",
                     price: "690,-",
                 },
                 {
                     name: "Lash Filler (natočení řas, barvení, výživa)",
                     price: "790,-",
                 },
                 {
                     name: "Barvení řas",
                     price: "150,-",
                 },
                 {
                     name: "Úprava a barvení obočí + řas",
                     price: "350,-",
                 },
                 {
                     title: "EPILACE OBLIČEJE VOSKEM",
                 },
                 {
                     name: "Epilace horního rtu",
                     price: "100,-",
                 },
                 {
                     name: "Epilace brady",
                     price: "100,-",
                 },
                 {
                     name: "Epilace celého obličeje (horní ret, brada, obočí, tváře)",
                     price: "350,-",
                 },
                 {
                     title: "PRODLOUŽENÍ ŘAS",
                 },
                 {
                     name: "Prodloužení metodou řasa na řasu (nový set)",
                     price: "1.090,-",
                 },
                 {
                     name: "Doplnění do 3 týdnů (pro stávající klientky)",
                     price: "590,-",
                 },
                 {
                     name: "Doplnění do 4 týdnů (pro stávající klientky)",
                     price: "690,-",
                 },
                 {
                     name: "Prodloužení objemovou metodou (nový set)",
                     price: "1.290,-",
                 },
                 {
                     name: "Doplnění do 3 týdnů (pro stávající klientky)",
                     price: "690,-",
                 },
                 {
                     name: "Doplnění do 4 týdnů (pro stávající klientky)",
                     price: "790,-",
                 },
                 {
                     name: "Odstranění řas",
                     price: "250,-",
                 },
                 {
                     title: "MADEROTERAPIE",
                 },
                 {
                     name: "Maderoterapie - celé tělo (60 min)",
                     price: "690,-",
                 },
                 {
                     name: "Maderoterapie 5 procedur",
                     price: "3.190,-",
                 },
                 {
                     name: "Maderoterapie 10 procedur",
                     price: "6.200,-",
                 },
             ],
         },*/
        {
            slug: "monika-kosmeticke-sluzby",
            serviceName: "Kosmetické služby",
            personName: "Mgr. Monika Vaňková",
            personPhone: "+420732459469",
            personPhoneFormated: "+420 732 459 469",
            personImg: "/people/anno_monika.png",
            personImgAlt: "Monika Vaňková - Kosmetické služby",
            personVideo: "/videos/monika-kosmetika.mp4",
            priceList: [
                {
                    name: "Základní kosmetické ošetření (90min)",
                    price: "950,-",
                },
                {
                    name: "Kosmetické ošetření s Galvanickou žehličkou (90min)",
                    price: "1.250,-",
                },
                {
                    name: "Kosmetické ošetření 100% kyselina hyaluronová (90min)",
                    price: "1.150,-",
                },
                {
                    name: "Kosmetické ošetření Anti-akné (60min)",
                    price: "950,-",
                },
                {
                    name: "Kosmetika pro muže klasická (60min)",
                    price: "900,-",
                },
                {
                    name: "Kosmetika pro muže Anti-age (90min)",
                    price: "1050,-",
                },
                {
                    name: "Mezoterapie – mikrojehličkování – 1 ošetření (60min)",
                    price: "2000,-",
                },
                {
                    name: "Mezoterapie + BB Glow – 1 ošetření (120min)",
                    price: "2500,-",
                },
                {
                    name: "Omlazující masáž obličeje (30 min)",
                    price: "500,-",
                },
                {
                    name: "Úprava/barvení obočí",
                    price: "150,-",
                },
                {
                    name: "Úprava a barvení obočí",
                    price: "250,-",
                },
                {
                    name: "Barvení řas",
                    price: "150,-",
                },
            ],
        },
        {
            slug: "masaze",
            serviceName: "Kosmetické a masérské služby",
            personName: "Kristýna Žůrková",
            personPhone: "+420739264529",
            personPhoneFormated: "+420739 264 529",
            personImg: "/people/anno_kristyna.png",
            personImgAlt: "Kristýna Žůrková - Masáže",
            personVideo: "/videos/masaze.mp4",
            priceList: [
                {
                    title: "MASÁŽE",
                },
                {
                    name: "Celotělová olejová masáž bez/s lávovými kameny  (90min)",
                    price: "990,-",
                    description: "Použití oleje ze 101 bylin s teplými lávovými kameny (při teplých dnech, se kameny vynechávají)",
                },
                {
                    name: "Doteková terapie -  Celotělová masáž i s hlavou (120min)",
                    price: "1290,-",
                },
                {
                    name: "Abhyanga - ajurvédská celotělová masáž (80min)",
                    price: "1.100,-",
                    description: "Abhyanga je forma ájurvédské terapie, která zahrnuje středně silnou masáž celého těla od hlavy až k patě teplým bylinným olejem. Masáž je zaměřená na svaly, klouby a lymfatický systém.",
                },
                {
                    name: "Lymfatická masáž s prvky maderoterapie (60min)",
                    price: "790,-",
                    description: "Jemná zdravotní masáž zaměřená na lymfatický systém a detoxikaci organismu. Možná kombinace s masáží svalů, dle domluvy. Masáž je možné doplnit o prvky z maderoterapie (tzn. masáž hýždí za pomocí dřevěného válečku a baňky ).",
                },
                {
                    name: "Medová detoxikační masáž zad (45min)",
                    price: "690,-",
                    description: "Relaxační masáž zad s teplým medem. Med detoxikuje a uvolňuje z pórů škodlivé látky. Před masáží se provádí test na zápěstí, kvůli případné alergii na med.",
                },
                {
                    name: "Sportovní masáž zad (60min)",
                    price: "690,-",
                    description: "+ ruce a šíje. Masáž sportovního typu, která uvolňuje bolestivé a zatuhlé svaly na zádech.",
                },
                {
                    name: "Částečná olejová masáž s lávovými kameny - tělo zezadu (60min)",
                    price: "690,-",
                },
                {
                    name: "Anti-age masáž obličeje s botox-like sérem a galvanickou žehličkou (30min)",
                    price: "500,-",
                },
                {
                    name: "Masáž nohou (30min)",
                    price: "400,-",
                },
                {
                    name: "Anti-age masáž obličeje s botox-like sérem a galvanickou žehličkou (30min)",
                    price: "500,-",
                },
                {
                    name: "Antistresová masáž hlavy (15min)",
                    price: "160,-",
                    description: "doplněk k masáži",
                },
                {
                    title: "MASÁŽE A KOSMETIKA",
                },
                {
                    name: "2v1 Masáž a Kosmetika (120min)",
                    price: "1490,-",
                },
                {
                    name: "Základní kosmetické ošetření (90min)",
                    price: "990,-",
                },
                {
                    name: "Kosmetické protivráskové ošetření s galvanickou žehličkou (90min)",
                    price: "1190,-",
                },
            ],
        },
    ];
};

export const getService = (slug: string) => {
    const services = getServices();

    return services.find((service) => service.slug == slug);
};
