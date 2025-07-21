"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { CgDanger } from "react-icons/cg";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export enum AlertType {
    Success,
    Failure,
}

export interface IAlertProps {
    message: string;
    type: AlertType;
}

export default function Alert({ message, type }: IAlertProps) {
    const [disabled, disable] = useState<boolean>(false);

    setTimeout(() => {
        disable(true);
    }, 5000);

    if (disabled) return null;

    return (
        <div className={`${styles.alert} ${type == AlertType.Failure && styles.failure} ${type == AlertType.Success && styles.success}`}>
            <div className={styles.content}>
                {type == AlertType.Failure && <CgDanger className={styles.icon} />}
                {type == AlertType.Success && <IoIosCheckmarkCircleOutline className={styles.icon} />}
                <p>{message}</p>
            </div>
            <IoIosCloseCircle onClick={() => disable(true)} className={styles.closeBtn} />
        </div>
    );
}
