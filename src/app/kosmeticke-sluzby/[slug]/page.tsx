import React from "react";
import ContactSection from "../components/contact-section";
import { getService, getServices } from "./data";
import { FaInfoCircle } from 'react-icons/fa';


import styles from "./styles.module.scss";

export async function generateStaticParams() {
    const services = getServices();

    return services.map((service) => ({
        slug: service.slug,
    }));
}
export default function Page({ params }: { params: { slug: string } }) {
    const service = getService(params.slug);

    return (
        <main className={styles.page}>
            <h1>
                Ceník - {service?.serviceName} - {service?.personName}
            </h1>
            <div className={styles.priceList}>
                {service?.priceList.map((item, index) => {
                    if ("price" in item)
                        return (
                            <div className={styles.item} key={`priceItem-` + index}>
                                {/* Levá část: Název a popis */}
                                <div className={styles.left}>
                                    <div className={styles.name}>
                                        {item.name}
                                    </div>
                                    {item.description && <p className={styles.description}>{item.description}</p>}
                                </div>
                                {/* Pravá část: Cena */}
                                <div className={styles.price}>{item.price}</div>
                            </div>
                        );

                    return <h3 key={"title-" + index}>{item.title}</h3>;
                })}
            </div>
            {service?.slug == "masaze" && <p><br /></p>}
            <ContactSection
                img={service?.personImg!}
                imgAlt={service?.personImgAlt!}
                name={service?.personName!}
                phoneElement={<a href={"tel:" + service?.personPhone}>{service?.personPhoneFormated}</a>}
                key={service?.personName + "-detail"}
                video={service?.personVideo}
            ></ContactSection>
        </main>
    );
}
