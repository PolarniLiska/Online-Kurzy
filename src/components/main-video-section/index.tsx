import styles from "./styles.module.scss";

const MainVideoSection = () => {
    return (
        <div className={styles.container}>
            <video controls>
                <source src="/videos/salon_anno.mp4" type="video/mp4" />
                Váš prohlížeč nepodporuje videa!
            </video>
        </div>
    );
};

export default MainVideoSection;
