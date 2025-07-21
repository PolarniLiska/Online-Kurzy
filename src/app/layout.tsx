import Header from "@/components/header";
import "./globals.scss";
import { Barlow } from "next/font/google";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "Salón Anno",
    description:
        "Kosmetický salón Anno Opava. Nabízíme služby jako je permanentní make-up, tetování obočí, očních linek, rtů, tetování pokožky hlavy a neinvazivní úprava horních víček. Od základního kosmetické ošetření, až po chemický peeling, mezoterapie, prodlužování řas, maderoterapie, aj.",
    keywords: [
        "kosmetický salón opava",
        "kosmetický salón anno",
        "kosmetický salón",
        "opava",
        "permanentní makeup Opava",
        "PMU Opava",
        "tetování rtů opava",
        "tetování linek opava",
        "tetování vlasů opava",
        "úprava víček opava",
        "permanentní makeup",
        "PMU",
        "tetování rtů",
        "tetování linek",
        "tetování vlasů",
        "úprava víček",
        "Vlaďka Anděl Lišková",
        "Salon ANNO",
        "kosmeticky kurz",
        "kurz pmu",
        "kosmetický kurz",
        "kurz kosmetiky",
        "rekvalifikační kurz kosmetička",
        "kosmetický kurz pro začátečníky",
        "rekvalifikacni kurz kosmetika",
        "kurz kosmeticka",
        "rekvalifikační kurz kosmetička online",
        "kurz kosmetička",
        "kosmetický kurz cena",
        "kosmetička kurz",
        "kurz kosmetiky cena",
        "kurz na kosmetičku",
        "kosmetické kurzy",
        "kurz kosmetika",
        "rekvalifikační kurzy kosmetika",
        "doplňkové kurzy pro kosmetičky",
        "rekvalifikacni kurz kosmeticka",
        "kosmetička rekvalifikační kurz",
        "víkendový kurz kosmetiky",
        "rekvalifikační kurz kosmetika",
        "akreditovaný kurz kosmetička",
        "kurzy kosmetiky",
        "kosmeticka kurz",
        "kosmetika kurz",
        "rekvalifikace kosmetička",
        "rekvalifikační kurz permanentní make up",
        "kosmeticky kurz urad prace",
        "kosmetický kurz karlovy vary",
        "kosmetický kurz online",
        "kosmetický kurz s akreditací",
        "kosmetický kurz české budějovice",
        "kosmetický rekvalifikační kurz",
        "kosmetičky kurz online",
        "kurz kosmetiky karlovy vary",
        "kurz kosmetička cena",
        "kurz kosmetička české budějovice",
        "kurz na kosmetiku",
        "kurzy pro kosmetičky",
        "online kurz kosmetiky",
        "rekvalifikační kurz kosmetička české budějovice",
        "rekvalifikační kurz řasy",
        "rekvalifikační kurzy kosmetička",
        "rekvalifikační kurzy pmu",
        "školení pro kosmetičky",
        "kosmetický masterclass",
        "jednodenní kosmetický kurz",
        "individuální kosmetický kurz",
        "kosmeticky kurz moravskoslezský kraj"
    ],
    authors: [{ name: "Tvorba a správa webových stránek FUTURO" }],
};

const barlow = Barlow({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="cs" className={barlow.className}>
            <head>
                <link rel="icon" href="/icon.png" type="image/png" sizes="128x128" />
                <GoogleAnalytics gaId="G-29V0ELYNQC"></GoogleAnalytics>
                <GoogleTagManager gtmId="G-HMN23SFZ5T"></GoogleTagManager>
            </head>
            <body className={barlow.className}>
                <Header></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
