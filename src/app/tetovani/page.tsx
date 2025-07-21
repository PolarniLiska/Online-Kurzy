import Footer from "@/components/footer";
import styles from "./styles.module.scss";
import ServiceList from "@/components/service-list";

export default function Tetovani() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>Permanentní Make-up & Tetování</h1>
                <p className={styles.description}>
                    Permanentní make-up slouží jako náhrada či doplnění dekorativní kosmetiky. Do vrchní vrstvy pokožky se při něm aplikují hypoalergenní
                    přírodní pigmenty pomocí speciálních přístrojů. I když se mu říká permanentní, nejde o trvalé tetování, nýbrž o dočasné líčení, které vám v
                    závislosti na metodě a typu pokožky vydrží od jednoho do tří let.
                </p>
                <ServiceList />
            </div>
            <section className={`${styles.beforeTattoo} ${styles.container}`}>
                <h2>Pokyny před tetováním</h2>
                <p>
                    Výsledek je extrémně nejistý v případě, že máte jednu z kontraindikací. Pokud se rozhodnete podstoupit riziko, napříč kontraindikacím, je to
                    na vás.{" "}
                </p>

                <ul>
                    <h3>Kontraindikace:</h3>
                    <li>Před tetováním očních linek nepoužívejte min. 2 měsíce sérum na řasy</li>
                    <li>Botox v čele (tetování obočí, linek), a výplň rtů (tetování rtů), kratší než měsíc</li>
                    <li>Herpes (je kontraindikac při tetování rtů, občí, linek, který není zahojený aspoň 10 dní)</li>
                    <li>Máte nalepené umělé řasy při tetování očních linek</li>
                    <li>
                        Barvené obočí (barvit obočí je zakázané 1 týdny před procedurou, jinak hrozí zapracování henny nebo barvy do kůže tetovací jehlou, což
                        může vyvolat kombinaci s pigmentem silné alergické reakce)
                    </li>
                    <li>
                        Opálená pokožka (7 dní před tetováním se nesmí vytvořit sluneční mozol, který vzniká při opalování, jinak hrozí nežádoucí zbarvení po
                        tetování)
                    </li>
                    <li>
                        4 hodiny před tetováním jste pili kávu, energetický nápoj a čaje, nebo jste kouřili - velmi důležité (kvůli rozšiřování a stahování cév,
                        nevíme jaká je správná hloubka tetování, kvůli krvácení se nedá tetovat v nesprávné hloubce a vám po zahojení v kůži nic nezůstane,
                        anebo naopak, bude pracovat nechtěně velmi hluboko a barva se může časem měnit do jiných odstínů.
                    </li>
                    <li>24 hodin předem nepijte alkohol</li>
                    <li>Kojení, těhotenství (tetovat je možné nejdříve 2 měsíce po úplném ukončení kojení)</li>
                    <li>Rosacea, dermatitida, kuperózia, aktivní ekzém, psoriáza a seborea</li>
                    <li>Cukrovka (jen s potvrzením od lékře, nebo na vlastní riziko)</li>
                    <li>Antibiotika (tetujeme nejdřív 10 dní po dobrání)</li>
                    <li>Laser (tetujeme nejdříve 2-3 měsíce po laseru)</li>
                    <li>Chemický peeling, retinoidy, ovocné kyseliny, IPL (tetujeme nejdříve měsíc po)</li>
                    <li>Chemoteraoie a radiofrekvence (nejdříve 3-6 měsíců po léčbě - případně souhlas lékaře)</li>
                    <li>Rakovina, Epilepsie a autoimunií onemocnění)</li>
                    <li>Hemofílie a pokud berete léky proti srážlivosti krvi (vynechat den před procedurou)</li>
                    <li>Máte jakoukoliv nezahojenou ránu v oblasti tetovaného místa</li>
                    <li>Užijte tablety s kyselinou salicylovou (Anopyrin, Aspirin, Acylpyrin - léky, proti bolesti jsou zakázané)</li>
                    <li>Máte-li vysoký krevní tlak, je potřeba poradit se s lékařem</li>
                    <li>Jakékoliv infekční onemocnění</li>
                    <li>Alergie na kovy, anestetika, barvy</li>
                    <li>Keloidní jizvy</li>
                    <li>Endokrinologické problémy (léky na štítnou žlázu, výrazně ovlivňují životnost, hojivost a intenzitu barvy)</li>
                    <li>Extrémní tenká kůže na očních víčkách, přecitlivělé oči a operace víček nejdříve rok před tetování - oční linky</li>
                    <li>Nemáte-li 18 let (je potřeba přijít v doprovodu zákonného zástupce)</li>
                </ul>
            </section>
            <section className={`${styles.recommended} ${styles.container}`}>
                <h2>Doporučené pokyny</h2>

                <ul>
                    <li>Pokud tetujeme rty, doneste si oblíbenou barvy rtěnky</li>
                    <li>Pokud nám chcete ukázat, co se vám líbí, můžete nám prosím donést ukázku mé práce</li>
                    <li>Můžete přijít nenalíčená tak, ať se cítíte dobře</li>
                    <li>Pokud máte staré tetování, mastnou kůži, laserem ostraňované tetování - počítejte s minimálně dalšími 2 korekcemi</li>
                    <li>Pokud míváte opary a tetujeme rty, užíjte před tetováním Herpesin 400, alespoň 2 dny před zákrokem a po proceduře 3-5 dní</li>
                    <li>Prosíme, aby jste si před tetováním rtů důkladně hydratovali alespoň týden a nepoužívali žádný peeling</li>
                </ul>
            </section>
            <section className={`${styles.careAfter} ${styles.container}`}>
                <h2>Starostlivost po tetování</h2>
                <ol>
                    <li>
                        Hned po zákroku, celý den vsakovat plazmu (čirou tekutinu) suchou čistou papírovým kapesníkem, první hodinu cca každých 10-30 minut.
                        Jednou za hodinu čistit obočí vlhčeným, pořádně vymačkaným vatovým tampónem (nesmí být mokrý, ani suchý, jen vlhký)
                    </li>
                    <li>
                        Na druhý den opět odsávat plazmu kapesníkem a následně přetírat vlhčeným, vatovým tampónem. Třikrát denně krémovat jemnou vrstvou krému
                        Bepanthen (nebo bambucké máslo). Krémovat častěji jen, když je obočí VELMI suché. Pozir, obočí nesmí být celý den mastné ani velmi
                        suché.
                    </li>
                    <li>
                        Další dny už neodsávat, nepřetírat tampónem, jen krémovat 3x denně, případně častěji při silném pocitu pnutí a v případě, že vám pro
                        mimice pocitově obličej „praská“, až do odpadnutí posledního stroupku. Štípání, pálení a pocit napnuté pleti v oblasti obočí a lehtání,
                        je v pořádku, obočí se hojí. Pokud potřebujete pnutí uvolnt, natřete si tenkou vrstvu krému Bepanthen (nebo bambucké máslo).
                    </li>
                    <li>
                        14 dní se snažte vyhýbat slunci, soláriu, sauně, cvičení, vlhkým, zapařeným a zaprášeným prostorům, neaplikujte make-up v blízkosti
                        obočí a nepoužívejte špinavé houbičky a štětce. Pokud se chcete opalovat, je potřeba pokrývku hlavy nebo velké brýle a VŽDY používat
                        make-up s SPF faktorem. Na obočí si nesahejte, neškrábejte. Pokud je potřeba, použijte na uvolnění vlhčený tampón. Stroupky si nesmíte
                        strhávat (je téměř nemožné poté toto poškozené místo dostat další barvu). V oblasti obočí se neumývejte vodou po celou dobu hojení.
                        Chloupky si můžete v okolí obočí vytrhávat týden po zákroku. Barvení obočí stínami, tužkou, fixou, či jinými barvami je po čas celé doby
                        hojení zakázáno. Obočí vypadá zhojené již za týden, ale to však jen na povrchu. Reálně se obočí hojí 3-4 týdny. Proto prosím dodržujte
                        pokyny celých 30 dní po zákroku. První dny po zákroku bude obočí vypadat velmi tmavě a působit hrubě. Bude ostré a první hodiny (u
                        někoho i dny) i asymetrické. Pigment se pomalu ukládá do pokožky, postupně se hojí a postupně odeznívá opuchnutí. Po úplném vyhojení je
                        obočí měkké, velmi jemné, tenké a přirozené a barva skoro o 50% světlejší. Stroupky či šupinky jsou běžnou reakcí na tetování. Pod
                        stroupky je barva světlá, v porovnání s prvnotním tetováním. Barva se ustálí v kůži až po 3 týdnech. Do té doby nemá smysl hodnotit, zda
                        a jestli vůbec vám tetování chytlo. Někomu se vytvoří velký , hrubý strup a po odlupování jsou pod nim světlá místa, které se po
                        celkovém zahojení pěkně ustálí a vytvoří jednotnou barvu. Když se vytvoří hrubý a silný strup, je téměř 90 % jisté, že bude potřebná
                        korekce. Někomu se vytvoří pouze šupinky a v těchto případech na téměř 80 % korekce nebude potřeba. Korekce je možná nejdříve za 30 dní.
                        Pokožka musí být zhojená a pigment ustálený. Při korekci se hodnotí stav hojení a dodělávají se pouze chloupky - v případě microbladingu
                        a v případě pudrového obočí se dělá celé, nebo jen vypadané místa, které v průběhu hojení nejvíce vybledli nebo dokonce vůbec nechytly.
                        Po korekci se obočí hojí další dva týdny. V průběhu těchto týdnů se dodržují stejné pokuny jako při prvním tetování.
                    </li>
                </ol>
            </section>
        </main>
    );
}
