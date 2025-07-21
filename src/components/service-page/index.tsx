import Gallery from "../gallery";
import styles from "./styles.module.scss";

interface ImgInfo {
    src: string;
    alt: string;
}

interface Props {
    title: string;
    description: JSX.Element;
    galleryImages: ImgInfo[];
}
export default function ServicePage({ description, galleryImages, title }: Props) {
    return (
        <main className={styles.servicePage}>
            <div className={styles.intro}>
                <div className={styles.textInfo}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <Gallery galleryImages={galleryImages}></Gallery>
        </main>
    );
}
