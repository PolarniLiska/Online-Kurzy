"use client";

import styles from "./styles.module.scss";

import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import Image from "next/image";
import { useState } from "react";
import NavigationItem from "../navigation-item";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationMenuButtonProps {
    openMenu: () => void;
}
function NavigationMenuButton({ openMenu }: NavigationMenuButtonProps) {
    return (
        <div onClick={openMenu} className={styles.navMenuOpenButton}>
            <IoIosMenu />
        </div>
    );
}

interface NavigationMenuExitButtonProps {
    closeMenu: () => void;
}
function NavigationMenuExitButton({ closeMenu }: NavigationMenuExitButtonProps) {
    return (
        <div onClick={closeMenu} className={styles.navMenuExitButton}>
            <IoCloseSharp />
        </div>
    );
}

export default function Header() {
    const [isNavigationShown, setIsNavigationShown] = useState<boolean>(false);
    const openMenu = () => {
        if (!isNavigationShown) setIsNavigationShown(true);
    };
    const closeMenu = () => {
        if (isNavigationShown) setIsNavigationShown(false);
    };

    const pathname = usePathname();
    const stickyHeader = pathname == "/" ? false : true;

    return (
        <header className={`${styles.navigationHeader} ${stickyHeader ? `${styles.sticky}` : ""}`}>
            <Link href={"/"}>
                <Image width={186} height={64} alt="Anno Salón - Logo" src={"/logo_custom.png"} />
            </Link>
            <nav className={`${styles.navigationMenu} ${isNavigationShown ? styles.navigationActive : ""}`}>
                <NavigationMenuExitButton closeMenu={closeMenu} />
                <NavigationItem closeMenu={closeMenu} label="Úvod" href="/" />
                <NavigationItem closeMenu={closeMenu} label="PMU/Tetování" href="/tetovani/" />
                <NavigationItem closeMenu={closeMenu} label="Služby" href="/kosmeticke-sluzby/" />
                <NavigationItem closeMenu={closeMenu} label="Školení" href="/skoleni/" />
                <NavigationItem closeMenu={closeMenu} label="Ceník" href="/cenik/" />
                {/* <NavigationItem closeMenu={closeMenu} label="Online kurzy" href="/online-kurzy/" /> */}
                <NavigationItem closeMenu={closeMenu} label="E-Shop" href="https://shop.salonanno.cz" />
                {/*
                    Turn On After E-shop & Academy release
                    <NavigationItem label="Akademie" href="#" />
                */}
                <NavigationItem closeMenu={closeMenu} label="Rezervace" href="/rezervace" />
            </nav>
            <NavigationMenuButton openMenu={openMenu} />
        </header>
    );
}
