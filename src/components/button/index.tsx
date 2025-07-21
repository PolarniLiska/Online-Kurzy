import Link from "next/link";

import styles from "./styles.module.scss";

interface Props {
    title: string;
    href: string;
}
export default function Button({ title, href }: Props) {
    return (
        <Link className={styles.button} href={href} passHref={true}>
            {title}
        </Link>
    );
}
