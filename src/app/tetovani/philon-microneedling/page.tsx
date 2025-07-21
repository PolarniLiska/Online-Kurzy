import { getGalleryImagePaths } from "@/app/utils/gallery";
import ServicePage from "@/components/service-page";

export default function PhilonAndMicroneedling() {
    return (
        <ServicePage
            title="Phi-lon & Microneedling"
            description={
                <>
                    Philon ošetření je neinvazivní rekonstrukce pokožky. Proces omlazení se provádí na odstranění nadměrného množství kůže, zvedání,
                    remodelování a omlazení pokožky na obličeji a těle. Nechirurgické odstranění spadlých očních víček, vějířků kolem očí, nechirurgický lifting
                    krku, lifting hlubokých mimických vrásek. Dále odstranění jizev, akné jizvy, odstranění hyperpigmentací.
                    <br />
                    <br />
                    Microneedling je nová generace neinvazivní mezoterapie, která pomáhá s redukcí vrásek a zpevněním kontur obličeje, ale samozřejmě i mnoho
                    dalšího. Snížuje také viditelnost jizev, strií a pomáhá i se zvýšenou pigmentací. To vše díky tomu, že microneedling aktivuje tvorbu
                    kolagenu a elastinu a spouští tak omlazující procesy v pokožce.
                </>
            }
            galleryImages={getGalleryImagePaths(6, "Microblading", "/services/philon/philon-", ".jpg")}
        />
    );
}
