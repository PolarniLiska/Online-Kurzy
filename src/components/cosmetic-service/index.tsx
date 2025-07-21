import CosmeticPriceList from "../cosmetic-price-list";
import styles from "./styles.module.scss";
import Image from "next/image";

export type ICosmeticServiceShowcase = [{ alt: string; src: string }, { alt: string; src: string }, { alt: string; src: string }];

export interface ICosmeticServiceProps {
    title: string;
    priceListSlug: string;
    personName: string;
    personPhone: string;
    personPhoto: { alt: string; src: string };
    showcasePhoto: ICosmeticServiceShowcase;
    goldenBg?: boolean;
    description?: string;
}

export default function CosmeticService({ title, personName, personPhone, personPhoto, goldenBg, showcasePhoto, priceListSlug,}: ICosmeticServiceProps) {
    return (
        <section className={`${styles.cosmeticService} ${goldenBg ? styles.goldenBackground : ""}`}>
            <h2>{title}</h2>
            <div className={styles.content}>
                <div className={styles.person}>
                    <div className={styles.info}>
                        <p className={styles.personName}>{personName}</p>
                        <p className={styles.personPhone}>{personPhone}</p>
                        <span className={styles.divider}></span>
                        <CosmeticPriceList transparentBackground={!goldenBg} priceListSlug={priceListSlug} />
                    </div>
                    <div className={styles.imageContainer}>
                        <Image alt={personPhoto.alt} src={personPhoto.src} fill={true} />
                    </div>
                </div>
                <div className={styles.showCase}>
                    {showcasePhoto.map((image, index) => (
                        <div key={"sImage-" + index} className={styles.imageContainer}>
                            <Image alt={image.alt} src={image.src} fill={true} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
