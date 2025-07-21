import styles from "./styles.module.scss";
import Image from "next/image";

export default function Rezervace() {
    return (
        <main className={styles.page}>
            <h1>Rezervace</h1>
            <section className={styles.intro}>
                <div className={styles.imageContainer}>
                    <Image fill={true} alt="Kancelář - Anno Salón" src="/salon/annosalon-min.png" />
                </div>
                <div className={styles.info}>
                    <div className={styles.upper}>
                        <p>
                            Telefon: <a href="tel:420602202015">602 20 20 15</a>
                        </p>
                        <p>
                            Email: <a href="mail:salon.anno@gmail.com">salon.anno@gmail.com</a>
                        </p>
                        <br />
                        <p>Adresa: Bílovecká 182a, Opava-Kylešovice</p>
                        <p>IČO: 73089567</p>
                    </div>
                    <div className={styles.bottom}>
                        <p>Můžete nás také najít na sociálních sítích:</p>
                        <p>
                            <a href="https://www.facebook.com/salonanno">Facebook</a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/salonanno/">Instagram</a>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.reception}>
                <h2>Vyřizování objednávek, rezervace, recepce</h2>
                <p className={styles.phone}>
                    <br></br>
                    <a href="tel:420602202015">+420 602 20 20 15</a>
                </p>
                <div className={styles.receptionist}>
                    <p className={styles.message + ' ' + styles.messageRaised}>
                        V případě zájmu o jakoukoliv službu, <b>vyplňte prosím kontaktní formulář níže</b> a my se Vám ozveme.
                        <br />
                        Budeme se těšit na Vaši návštěvu.
                    </p>
                </div>
                <div className={styles.showcase}>
                    <div className={styles.imgOne}>
                        <Image fill alt="Salón Anno Recepce 1" src={"/salon/annosalon-couch.png"} />
                    </div>
                    <div className={styles.imgTwo}>
                        <Image fill alt="Salón Anno Recepce 2" src={"/salon/annosalon-reception.png"} />
                    </div>
                </div>
            </section>
        </main>
    );
}
