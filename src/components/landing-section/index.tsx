import Link from "next/link";
import styles from "./styles.module.scss";

import Image from "next/image";

export default function LandingSection() {
    return (
        <section className={styles.landingScreen}>
            <div className={styles.landingContent}>
                <h1>
                    KOSMETICKÝ SALÓN <b>ANNO</b> OPAVA
                    <br />
                    PERMANENTNÍ MAKE-UP
                </h1>
                <Link href={"/rezervace"} className={styles.ctaButton}>OBJEDNEJTE SE JIŽ DNES</Link>
            </div>
            <div className={styles.landingImage}>
                <Image src="/landing_background.png" fill={true} alt={"Anno Salón - Landing Background"} />
                <div className={styles.vladkaBackground}>
                    <Image src={"/vladka_transparent.png"} fill={true} alt={"Anno Salón - Vlaďka Transparent"} />
                </div>
            </div>
        </section>
    );
}
