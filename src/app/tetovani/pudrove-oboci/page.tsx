import { getGalleryImagePaths } from "@/app/utils/gallery";
import ServicePage from "@/components/service-page";

export default function PudrobveOboxi() {
    return (
        <ServicePage
            title="Pudrové obočí"
            description={
                <>
                    Pudrové obočí je úprava vhodná hlavně pro klientky, které mají rády upravený a uhlazený styl obočí. Výhodou pudrového obočí je, že se dá
                    pracovat s intenzitou barev. Je tedy možné vytvořit velmi jemný efekt, který pouze podtrhne tvar obočí, nebo naopak dramatičtější vzhled,
                    pokud máte rádi výrazné obočí.
                    <br />
                    <br />
                    Tento styl permanentního make-upu je vhodný pro všechny typy pleti a pro všechny typy chloupků v obočí, ale není vhodný u Alopecie. Aplikace
                    trvá cca 2 hodiny a vydrží cca 2-3 roky.
                </>
            }
            galleryImages={getGalleryImagePaths(5, "Pudrové obočí", "/services/pudrove-oboci/pudrob", ".jpg")}
        />
    );
}
