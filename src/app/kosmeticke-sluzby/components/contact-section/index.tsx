import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
    name: string;
    img: string;
    imgAlt: string;
    phoneElement: JSX.Element;
    video?: string;
}
const ContactSection = ({ video, img, imgAlt, name, phoneElement }: Props) => {
    return (
        <section className={styles.container}>
            <div className={styles.person}>
                <div className={styles.imageContainer}>
                    <Image fill={true} alt={imgAlt} src={img}></Image>
                </div>
                <div className={styles.info}>
                    <p>{name}</p>
                    {phoneElement}
                </div>
            </div>
            {video && (
                <video className={styles.video} controls>
                    <source src={video} type="video/mp4" />
                    Váš prohlížeč nepodporuje videa!
                </video>
            )}
        </section>
    );
};

export default ContactSection;
