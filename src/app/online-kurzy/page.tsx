import LandingSection from "@/components/landing-section";
import TextCard from "@/components/text-card";
import Button from "@/components/button";
import Image from "next/image";
import styles from "./styles.module.scss";

const lessons = [
  {
    title: "Úvod do tetování obočí",
    content: <>Seznámení s technikami, bezpečností a hygienou.</>,
  },
  {
    title: "Výběr správné techniky",
    content: <>Microblading, pudrové obočí, kombinované techniky.</>,
  },
  {
    title: "Praktická ukázka",
    content: <>Krok za krokem – od přípravy po finální úpravu.</>,
  },
  {
    title: "Péče po zákroku",
    content: <>Jak pečovat o obočí po tetování pro nejlepší výsledky.</>,
  },
  {
    title: "Chyby a řešení",
    content: <><span title="Nejčastější chyby a jejich řešení">Tipy a triky pro profesionální výsledek.</span></>,
    fullTitle: "Nejčastější chyby a jejich řešení"
  },
];

export default function OnlineKurzyPage() {
  return (
    <main className={styles.onlineKurzyPage}>
      {/* Hero sekce */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrapper}>
          <Image src="/kurzy/kurz-hero.png" alt="Online kurz tetování obočí" fill priority className={styles.heroBgImg} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1>Online kurzy tetování obočí</h1>
          <p>Ovládněte moderní techniky permanentního make-upu z pohodlí domova. Vhodné pro začátečníky i pokročilé.</p>
          <Button title="Koupit kurz" href="https://shop.salonanno.cz/products/online-kurz-tetovani-oboci" />
        </div>
      </section>

      {/* Obsah kurzu */}
      <section className={styles.lessonsSection}>
        <h2>Obsah kurzu</h2>
        <div className={styles.lessonsList}>
          {lessons.map((lesson, idx) => (
            <TextCard
              key={idx}
              title={
                lesson.fullTitle ? (
                  <>
                    <span className="small">Chyby a jejich řešení</span>
                  </>
                ) : (
                  lesson.title
                )
              }
              content={lesson.content}
            />
          ))}
        </div>
      </section>

      {/* Přínos kurzu */}
      <section className={styles.benefitSection}>
        <div className={styles.benefitContent}>
          <h2>Proč si vybrat náš online kurz?</h2>
          <ul>
            <li>Flexibilní studium kdykoliv a odkudkoliv</li>
            <li>Praktické ukázky a detailní návody</li>
            <li>Podpora zkušené lektorky Vlaďky Anděl Liškové</li>
            <li>Přístup ke kurzu na počítači i mobilu</li>
            <li>Certifikát o absolvování</li>
          </ul>
          <Button title="Koupit kurz" href="https://shop.salonanno.cz/products/online-kurz-tetovani-oboci" />
        </div>
      </section>
    </main>
  );
} 