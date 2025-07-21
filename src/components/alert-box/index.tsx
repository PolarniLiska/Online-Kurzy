"use client";

import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export default function AlertBox({ children }: PropsWithChildren) {
    return <div className={styles.alertBox}>{children}</div>;
}
