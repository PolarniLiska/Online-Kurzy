import { getGalleryImagePaths } from "@/app/utils/gallery";
import ServicePage from "@/components/service-page";

export default function TetovaniOcnichLinek() {
    return (
        <ServicePage
            title="Tetování očních linek"
            description={
                <>
                    Linka má za úkol opticky zahustit řasy a zvýraznit oči.
                    <br />
                    Linky jsou vhodné pro téměř všechny typy oka. Výhodou je, že meziřasová linka je ideální pro klientky s povislými horními víčky a je ideální
                    také pro velmi nenápadný vzhled. Aplikace trvá cca 2 hodiny a výsledek vydrží cca 2-3 roky
                </>
            }
            galleryImages={getGalleryImagePaths(4, "Tetování očních linek", "/services/tetovani-ocnich-linek/oclin", ".jpg")}
        />
    );
}
