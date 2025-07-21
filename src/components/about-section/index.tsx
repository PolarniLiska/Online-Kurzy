import styles from "./styles.module.scss";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.vladkaImgLarge}>
                <Image alt="Vlaďka Lišková" src={"/people/anno_vladka.png"} fill={true}></Image>
            </div>
            <div className={styles.sectionContainer}>
                <p className={styles.description}>
                    Jmenuji se Vlaďka Anděl Lišková a jsem PMU umělec a školitelka v oboru permanentního makeupu/tetování a kosmetických služeb.
                    Jsem absolventkou prestižní světové akademie PhiAcademy. Čtyři roky intenzivně tetuji v mém salónu ANNO v Opavě a intenzivně se školím, abych
                    stále získávala nové zkušenosti od těch nejlepších akademii na světě a také masterů, nejen v
                    České republice <br></br>(např. Zuzana Grigely, Christina Pidlozna Sviato Academy, Haven - Lea Matyi, Terezia Ridzonová,
                    Nastasya Novoselya, Albina Lazarenka, Veronika Fleiš a mnoho dalších). Účastňím se světových soutěží v PMU
                    a věnuji se tak všem technikám, jak ručních, tak strojových. Nabízím individuální kurzy a školení pro začátečníky
                    i pro pokročilé a to v jakékoliv technice.  <br /><br />
                    V případě zájmu mě prosím kontaktujte na telefonní číslo: <a href="tel:+420608383802">608 38 38 02</a>. <br /><br />
                    Těším se na Vás
                </p>
                <div className={styles.vladkaImg}>
                    <Image alt="Vlaďka Lišková" src={"/people/anno_vladka.png"} fill={true}></Image>
                </div>
                <p className={styles.quotation}>
                    <b>„Každá žena je krásná“</b>
                    <br /> - Vlaďka Anděl Lišková
                </p>
            </div>
        </section>
    );
}
