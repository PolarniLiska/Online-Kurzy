import CosmeticService, { ICosmeticServiceProps, ICosmeticServiceShowcase } from "@/components/cosmetic-service";
import styles from "./styles.module.scss";
import { getGalleryImagePaths } from "../utils/gallery";

const services: ICosmeticServiceProps[] = [
    //{
    // title: "Kosmetické služby, aplikace umělých řas, maderoterapie, laminace obočí, lash filler, maderoterapie aj.",
    // personName: "Natálie Pflegrová",
    // personPhone: "+420 605 055 960",
    // personPhoto: { alt: "Kosmetické služby - Natálie Pflegrová", src: "/people/anno_natalie.png" },
    // priceListSlug: "natalie-kosmeticke-sluzby",
    // showcasePhoto: getGalleryImagePaths(
    //     3,
    //     "Kosmetické služby - Natálie Pflegrová",
    //     "/cosmetic-services/natalie-kosmetika/c-kosmetika-",
    //     ".jpg"
    // ) as ICosmeticServiceShowcase,
    // goldenBg: true,
    // },
    {
        title: "Nehtová modelace, gel lak, gelové nehty, manikúra, P-Shine aj.",
        priceListSlug: "nehtova-modelace",
        personName: "Ivana Zúrik",
        personPhone: "+420 724 826 956",
        personPhoto: { alt: "Nehtová modelace - Ivana Zúrik", src: "/people/anno_ivana.png" },
        showcasePhoto: getGalleryImagePaths(
            3,
            "Nehtová modelace - Ivana Zúrik",
            "/cosmetic-services/ivana-nehtova-modelaz/c-nehtova-modelace-",
            ".jpg"
        ) as ICosmeticServiceShowcase,
        goldenBg: false,
    },
    {
        title: "Kosmetické služby, mezoterapie, BB glow, radiofrekvence, lash filler",
        personName: "Mgr. Monika Vaňková",
        personPhone: "+420 732 459 469",
        personPhoto: { alt: "Kosmetické služby - Mgr. Monika Vaňková", src: "/people/anno_monika.png" },
        priceListSlug: "monika-kosmeticke-sluzby",
        showcasePhoto: getGalleryImagePaths(
            3,
            "Kosmetické služby - Mgr. Monika Vaňková",
            "/cosmetic-services/monika-kosmetika/c-kosmetika-",
            ".jpg"
        ) as ICosmeticServiceShowcase,
        goldenBg: false,
    },
    {
        title: "Kosmetické služby, mezoterapie",
        personName: "Pavla Večerková",
        personPhone: "+420 737 921 186",
        personPhoto: { alt: "Kosmetické služby - Pavla Večerkova", src: "/people/anno_pavla.png" },
        priceListSlug: "pavla-kosmeticke-sluzby",
        showcasePhoto: getGalleryImagePaths(
            3,
            "Kosmetické služby - Pavla Večerková",
            "/cosmetic-services/pavla-kosmetika/pavla-kosmetika-",
            ".jpg"
        ) as ICosmeticServiceShowcase,
        goldenBg: true,
    },
];

export default function KosmetickeSluzby() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1>Kosmetické služby, manikúra, masaže</h1>
                <p>
                    Náš salón také nabízí všechny druhy kosmetického ošetření, úpravy obočí, prodloužení a barvení řas, epilace obličeje, maderoterapii,
                    neinvazivní mezoterapii, radiofrekvenci, lash lifting, lash filler, masáže, laminace obočí, relaxační masáže a nehtová modeláž.
                </p>
            </div>

            {services.map((service, index) => (
                <CosmeticService
                    personName={service.personName}
                    personPhone={service.personPhone}
                    personPhoto={service.personPhoto}
                    priceListSlug={service.priceListSlug}
                    showcasePhoto={service.showcasePhoto}
                    title={service.title}
                    goldenBg={index % 2 == 0 ? false : true}
                    key={"service-" + index}
                />
            ))}
        </main>
    );
}
