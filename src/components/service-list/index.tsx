import ServiceItem from "../service-item";
import styles from "./styles.module.scss";

const services = [
    {
        title: "Tetování rtů",
        description: `Podtrhne krásu vašich přirozených rtů.Aplikací barvy po celé ploše, dodáme rtům opticky plnější vzhled a srovnáme případnou asymetrii. Aplikace trvá cca 3 hodiny a výsledek vydrží 3-4 roky, v závislosti na typu pleti.`,
        href: "/tetovani/tetovani-rtu",
        image: "/services/tetovani-rtu.png",
    },
    {
        title: "Microblading",
        description: `Tetování obočí formou microblading. Tento styl vláskování vytváří efekt vzdušného a přirozeného obočí, který je momentálně nejpoptávanější metodou tetování obočí. Nechte se i Vy okouzlit tímto přirozeným tetováním jako je microblading.
        `,
        href: "/tetovani/microblading",
        image: "/services/microblading.png",
    },
    {
        title: "Pudrové obočí",
        description: `Pudrové obočí je úprava vhodná hlavně pro klientky, které mají rády upravený a uhlazený styl obočí. Výhodou pudrového obočí je, že se dá pracovat s intenzitou barev. Je tedy možné vytvořit velmi jemný efekt, který pouze podtrhne tvar obočí`,
        href: "/tetovani/pudrove-oboci",
        image: "/services/pudrove-oboci.png",
    },
    {
        title: "Tetování očních linek",
        description: `Linka má za úkol opticky zahustit řasy a zvýraznit oči. Linky jsou vhodné pro téměř všechny typy oka. Výhodou je, že meziřasová linka je ideální pro klientky s povislými horními víčky a je ideální také pro velmi nenápadný vzhled.`,
        href: "/tetovani/tetovani-ocnich-linek",
        image: "/services/tetovani-ocnich-linek.png",
    },
    {
        title: "Phi-Lon",
        description: `Philon ošetření je neinvazivní rekonstrukce pokožky. Proces omlazení se provádí na odstranění nadměrného množství kůže, zvedání, remodelování a omlazení pokožky na obličeji a těle. Nechirurgické odstranění spadlých očních víč...`,
        href: "/tetovani/philon-microneedling",
        image: "/services/philon.png",
    },
];

export default function ServiceList() {
    return (
        <section className={styles.serviceList}>
            {services.map((service, index) => (
                <ServiceItem description={service.description} href={service.href} imageUrl={service.image} title={service.title} key={`service-` + index} />
            ))}
        </section>
    );
}
