import { getGalleryImagePaths } from "@/app/utils/gallery";
import ServicePage from "@/components/service-page";

export default function Microblading() {
    return (
        <ServicePage
            title="Microblading"
            description={
                <>
                    Tetování obočí formou microblading. Tento styl vláskování vytváří efekt vzdušného a přirozeného obočí, který je momentálně nejpoptávanější
                    metodou tetování obočí.
                    <br />
                    <br />
                    Nechte se i Vy okouzlit tímto přirozeným tetováním jako je microblading. Zahojený výsledek imituje přirozené vlastní chloupky. Tento zákrok
                    je vhodný pro klientky, které mají méně vlastních chloupků nebo velmi světlé, jemné, částečně vypadané obočí či trpící alopecií.
                    <br />
                    <br />
                    Aplikují se na suchou, normální a smíšenou pokožku. Není vhodná pro extrémně mastnou a pórovitou pleť. Aplikace, včetně měření trvá cca 2
                    hodiny a výsledek vydrží cca 2 roky.
                </>
            }
            galleryImages={getGalleryImagePaths(24, "Microblading", "/services/microblading/microblading", ".jpg")}
        />
    );
}
