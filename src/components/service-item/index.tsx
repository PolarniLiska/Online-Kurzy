import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
    title: string;
    description: string;
    href: string;
    imageUrl: string;
}
export default function ServiceItem({ href, title, description, imageUrl }: Props) {
    return (
        <Link style={{ backgroundImage: `url(${imageUrl})` }} className={styles.serviceCard} href={href}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>

                <div className={styles.button}>VÍCE</div>
            </div>
        </Link>
    );
}
