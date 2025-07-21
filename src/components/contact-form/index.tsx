"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./styles.module.scss";
import AlertBox from "../alert-box";
import Alert, { AlertType, IAlertProps } from "../alert";
import { usePathname } from "next/navigation";
import { Barlow } from "next/font/google";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const pathName = usePathname();
    console.log(pathName);

    const cosmeticServicePath = "/kosmeticke-sluzby/";
    const intendedForList = {
        [cosmeticServicePath + "natalie-kosmeticke-sluzby/"]: "Natálie Pflegrová",
        [cosmeticServicePath + "monika-kosmeticke-sluzby/"]: "Monika Věntusová",
        [cosmeticServicePath + "pavla-kosmeticke-sluzby/"]: "Pavla Večerková",
        [cosmeticServicePath + "nehtova-modelace/"]: "Ivana Zúrik",
    };
    const intendedFor = intendedForList[pathName];

    const [alerts, setAlerts] = useState<IAlertProps[]>([]);
    const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
    const onSubmit = async (data: any) => {
        if (isSendingEmail) return;

        try {
            setIsSendingEmail(true);
            const request = await fetch("/send-email.php", {
                method: "POST",
                headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
                body: Object.entries(intendedFor ? { ...data, intendedFor } : data)
                    .map(([k, v]) => {
                        return k + "=" + v;
                    })
                    .join("&"),
            });

            const result = await request.json();
            setIsSendingEmail(false);

            if (result.success == true) {
                setAlerts([...alerts, { message: "Email byl úspěšně odeslán!", type: AlertType.Success }]);
                reset();
            } else {
                setAlerts([
                    ...alerts,
                    {
                        message: "Email nebylo možné odeslat. Zkuste to později!",
                        type: AlertType.Failure,
                    },
                ]);
            }
        } catch (err) {
            setIsSendingEmail(false);
            setAlerts([
                ...alerts,
                {
                    message: "Email nebylo možné odeslat. Zkuste to později!",
                    type: AlertType.Failure,
                },
            ]);
        }
    };

    return (
        <section className={styles.formSection}>
            <AlertBox>
                {alerts.map((alert, index) => (
                    <Alert message={alert.message} type={alert.type} key={"alert-" + index} />
                ))}
            </AlertBox>

            <div className={styles.titleSection}>
                <p className={styles.title}>Máte dotaz nebo zájem?</p>
                <p>Kontaktujte nás!</p>
            </div>

            <div className={styles.windowSection}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {errors.name && <p className={styles.error}>{errors.name?.message as string}</p>}
                    <input {...register("name", { required: "Vyplňte Vaše jméno:" })} className={styles.textInput} placeholder={"VAŠE JMÉNO"} />
                    {errors.email && <p className={styles.error}>{errors.email?.message as string}</p>}
                    <input {...register("email", { required: "Vyplňte Váš email:", pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Vyplňte správný tvar emailu:'} })} className={styles.textInput} placeholder={"VÁŠ EMAIL"} />
                    {errors.phone && <p className={styles.error}>{errors.phone?.message as string}</p>}
                    <input {...register("phone", { required: "Vyplňte Váše telefonní číslo:", pattern: {value: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm, message: "Vypňte správný tvar čísla: (XXX XXX XXX)"} })} className={styles.textInput} placeholder={"VAŠE TEL. ČÍSLO"} />
                    {errors.message && <p className={styles.error}>{errors.message?.message as string}</p>}
                    <textarea
                        {...register("message", { required: "Zpráva musí být delší než 1 znak!" })}
                        rows={10}
                        className={styles.textAreaInput}
                        placeholder={"VAŠE ZPRÁVA"}
                    ></textarea>
                    <input className={`${styles.submitButton} ${isSendingEmail && styles.isSendingEmail}`} type="submit" value="ODESLAT" />
                </form>

                <div className={styles.address}>
                    <div className={styles.info}>
                        Telefon: <a href="tel:+420602202015">602 20 20 15</a>
                        <br />
                        Email: <a href="mail:salon.anno@gmail.com">salon.anno@gmail.com</a>
                        <br />
                        <br />
                        Bílovecká 182a, Opava-Kylešovice
                    </div>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2569.294061503558!2d17.91709097691765!3d49.912055425982636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713d8ff5cc8617f%3A0xa1fcf50f2b4414f9!2sB%C3%ADloveck%C3%A1%201593%2F182a%2C%20747%2006%20Opava%206!5e0!3m2!1scs!2scz!4v1701208109318!5m2!1scs!2scz"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.googleMap}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
