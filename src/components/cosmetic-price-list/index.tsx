"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

interface Props {
    priceListSlug: string;
    transparentBackground?: boolean;
}
export default function CosmeticPriceList({ priceListSlug, transparentBackground = true }: Props) {
    return (
        <>
            <Link href={`/kosmeticke-sluzby/${priceListSlug}`} className={`${styles.priceListBtn} ${transparentBackground && styles.transparentBackground}`}>
                CENÍK
            </Link>
        </>
    );
}
