import { getSchoolings } from "./data";
import styles from "./styles.module.scss";
export interface ISchoolingItem {
    title: string;
    subtitle?: string;
    text: string | JSX.Element;
}
const SchoolingItem = ({ title, text, subtitle }: ISchoolingItem) => {
    if (subtitle && title)
        return (
            <div className={styles.schooling}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                {text}
            </div>
        );

    if (!subtitle && title)
        return (
            <div className={styles.schooling}>
                <h2>{title}</h2>
                {text}
            </div>
        );
};

export default function Skoleni() {
    const schoolings = getSchoolings();

    return (
        <main className={`${styles.page}`}>
            <h1>Školení</h1>
            <section className={styles.schoolings}>
                {schoolings.map((schooling, index) => {
                    return <SchoolingItem text={schooling.text} title={schooling.title} subtitle={schooling.subtitle} key={"schooling-" + index} />;
                })}
            </section>
        </main>
    );
}
