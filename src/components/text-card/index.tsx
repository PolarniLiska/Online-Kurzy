import styles from "./styles.module.scss";

interface Props {
    title: React.ReactNode;
    content: JSX.Element;
}
export default function TextCard({ title, content }: Props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{content}</div>
        </div>
    );
}
