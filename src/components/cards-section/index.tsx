import Link from "next/link";
import Button from "../button";
import TextCard from "../text-card";

import styles from "./styles.module.scss";

const cardsContent = [
    {
        title: "Co nás motivuje?",
        content: (
            <>Hlavní myšlenkou salónu ANNO a celého kosmetického, relaxačního a zkrášlujícího centra v Opavě, je dělat ženy krásné, šťastné a spokojené.</>
        ),
    },
    {
        title: "O naších službách",
        content: (
            <>
                Nabízíme služby jako je permanentní make-up, tetování obočí, očních linek, PMU rtů, tetování pokožky hlavy a neinvazivní úpravu horních víček a
                všech PMU i kosmetických školení. Dále kosmetické ošetření: základní, luxusní, přístrojové, např. chemický peeling, mezoterapie, úpravy obočí,
                laminace obočí i řas, Lash filler, prodlužování řas, maderoterapie, radiofrekvence, galvaniku, ultrazvuk, philon a další…
                <br />
                <br />
                <br />
                <Button href="/kosmeticke-sluzby" title="VÍCE O NAŠÍCH SLUŽBÁCH" />
            </>
        ),
    },
    {
        title: "Prodej kosmetiky",
        content: (
            <>
                V naší kamenné prodejně si můžete zakoupit naše produkty a výrobky SALÓNU ANNO a produkty firmy{" "}
                <Link className={styles.contentLink} href="https://www.italystyle.cz/o-nas/italy-style/">
                    ITALY STYLE
                </Link>
                ,{" "}
                <Link
                    className={styles.contentLink}
                    href="https://www.beautyonline.cz/znacky/alissa-beaute/?gad_source=1&gclid=CjwKCAiAjrarBhAWEiwA2qWdCGmdrZZh9bTtuEYW7I0Abh-McnuwpmCHojBIr_cXqNpl8mTZbDgxXhoCEDQQAvD_BwE"
                >
                    Alissa Beaty
                </Link>{" "}
                a{" "}
                <Link className={styles.contentLink} href="https://www.beautyonline.cz/znacky/diego-dalla-palma/">
                    Diego Della Palma
                </Link>
                . <br />
                <br /> Nabízíme odborné poradenství a diagnostiku pleti, aby jste věděli, co je pro vaši pleť ideální. Koupit si můžete také poukázky na všechny
                nabízené procedury v Salón Anno.
            </>
        ),
    },
];

export default function CardsSection() {
    return (
        <section className={styles.cardSection}>
            <div className={styles.cardContainer}>
                {cardsContent.map((card, index) => (
                    <TextCard title={card.title} content={card.content} key={`${index}-card`} />
                ))}
            </div>
        </section>
    );
}
