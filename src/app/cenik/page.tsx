import { getPriceList } from "./data";
import styles from "./styles.module.scss";

export default function Cenik() {
    const priceList = getPriceList();

    return (
        <main className={styles.page}>
            <h1>Ceník</h1>
            <div className={styles.priceList}>
                {priceList.map((item, index) => {
                    return (
                        <div className={styles.item} key={`priceItem-` + index}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.price}>{item.price}</div>
                        </div>
                    );
                })}
            </div>
            <p>
                Konzultaci provádíme v den zákroku. <br />V případě zájmu o jakoukoli jinou techniku provedení nebo o repasování starého obočí mě můžete
                kontaktovat osobně, popř. zaslat fotografii.
            </p>
        </main>
    );
}
