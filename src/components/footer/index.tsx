import Link from "next/link";
import ContactForm from "../contact-form";
import styles from "./styles.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ContactForm />
            <section className={styles.links}>
                <div>
                    <p className={styles.title}>Mapa stránek</p>
                    <Link href={"/"} className={styles.item}>
                        Úvod
                    </Link>
                    <Link href={"/tetovani"} className={styles.item}>
                        PMU / Tetování
                    </Link>
                    <Link href={"/kosmeticke-sluzby"} className={styles.item}>
                        Kosmetické služby
                    </Link>
                    <Link href={"/skoleni"} className={styles.item}>
                        Školení
                    </Link>
                    <Link href={"/cenik"} className={styles.item}>
                        Ceník
                    </Link>
                    <Link href={"https://shop.salonanno.cz"} className={styles.item}>
                        E-Shop
                    </Link>
                    {/*
                    <Link href={"#"} className={styles.item}>
                        Akademie
                    </Link>
                    */}
                    <Link href={"/rezervace"} className={styles.item}>
                        Rezervace
                    </Link>
                </div>
                <div>
                    <p className={styles.title}>Užitečné odkazy</p>
                    <Link href={"https://www.italystyle.cz/o-nas/italy-style/"} className={styles.item}>
                        ItalyStyle
                    </Link>
                    <Link href={"https://www.beautyonline.cz/znacky/alissa-beaute/?gad_source=1&gclid=CjwKCAiAjrarBhAWEiwA2qWdCGmdrZZh9bTtuEYW7I0Abh-McnuwpmCHojBIr_cXqNpl8mTZbDgxXhoCEDQQAvD_BwE"} className={styles.item}>
                        AlissaBeaute
                    </Link>
                    <Link href={"https://www.beautyonline.cz/znacky/diego-dalla-palma/"} className={styles.item}>
                        DiegeDallaPalma
                    </Link>
                </div>
                <div>
                    <p className={styles.title}>Sociální sítě</p>
                    <Link href={"https://www.facebook.com/salonanno"} className={styles.item}>
                        Facebook
                    </Link>
                    <Link href={"https://www.instagram.com/salonanno/"} className={styles.item}>
                        Instagram
                    </Link>
                </div>
                <div>
                    <p className={styles.title}>Kontakt</p>
                    <p className={styles.item}>Telefon: <a href="tel:420602202015">602 20 20 15</a></p>
                    <p className={styles.item}>Email: <a href="mail:salon.anno@gmail.com">salon.anno@gmail.com</a></p>
                    <p className={styles.item}>Adresa: Bílovecká 182a, Opava-Kylešovice</p>
                </div>
            </section>
            <section className={styles.signature}>www.salon-anno.cz &copy;2025, Tvorba a správa webových stránek FUTURO</section>
        </footer>
    );
}
