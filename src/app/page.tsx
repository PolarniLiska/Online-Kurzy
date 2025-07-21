import LandingSection from "@/components/landing-section";
import CardsSection from "@/components/cards-section";
import AboutSection from "@/components/about-section";
import MainVideoSection from "@/components/main-video-section";



export default function Home() {
    return (
        <main>
            <LandingSection />
            <CardsSection />
            <AboutSection />
            <MainVideoSection />
        </main>
    );
}
