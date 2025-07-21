import Link from "next/link";

import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
    label: string;
    href: string;
    closeMenu: () => void;
}
export default function NavigationItem({ href, label, closeMenu }: NavigationItemProps) {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <Link onClick={closeMenu} href={href} className={`${styles.navigationItem} ${pathname == href ? styles.active : ""}`}>
            {label}
        </Link>
    );
}
