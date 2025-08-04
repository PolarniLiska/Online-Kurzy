"use client";

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

import React, { useState, useEffect } from "react";

function RegistrationForm({ onRegister }: { onRegister?: (user: { name: string; email: string; activated: boolean }) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { setLoggedInUser, setActivated } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== password2) {
      setError("Hesla se neshodují.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        // Po registraci automaticky přihlásím uživatele
        const loginRes = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (loginRes.ok) {
          const { user } = await loginRes.json();
          setLoggedInUser({ name: user.name, email: user.email });
          setActivated(user.activated);
          if (onRegister) onRegister(user);
        }
        setSuccess("✅ Uživatel zaregistrován a přihlášen");
        setName(""); setEmail(""); setPassword(""); setPassword2("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Registrace selhala.");
      }
    } catch (err) {
      setError("Chyba připojení k serveru.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        placeholder="Jméno"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Heslo"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Potvrzení hesla"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={password2}
        onChange={e => setPassword2(e.target.value)}
        required
      />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-700 text-sm">{success}</div>}
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded mt-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Registruji..." : "Registrovat"}
      </button>
    </form>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { setLoggedInUser, setActivated } = useAuth();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const { user } = await res.json();
        setSuccess("✅ Přihlášení úspěšné");
        setLoggedInUser({ name: user.name, email: user.email });
        setActivated(user.activated);
        setPassword("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Přihlášení selhalo.");
      }
    } catch (err) {
      setError("Chyba připojení k serveru.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
      <input
        type="email"
        placeholder="Email"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Heslo"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-700 text-sm">{success}</div>}
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded mt-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Přihlašuji..." : "Přihlásit"}
      </button>
    </form>
  );
}

function ActivateCourseForm({ userEmail }: { userEmail: string }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { setActivated } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("/api/courses/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, code }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message || "✅ Kurz odemčen");
        setActivated(true); // Update activation status
        setCode("");
      } else {
        setError(data.error || "Aktivace selhala.");
      }
    } catch (err) {
      setError("Chyba připojení k serveru.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit} autoComplete="off">
      <h3 className="text-xl font-bold text-center">Aktivace kurzu</h3>
      <input
        type="text"
        placeholder="Zadejte kód kurzu"
        className="border rounded px-3 py-2 focus:outline-none focus:ring"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        required
      />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-700 text-sm">{success}</div>}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mt-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Aktivuji..." : "Aktivovat kurz"}
      </button>
    </form>
  );
}

// Simple context for managing auth state
const AuthContext = React.createContext<{
    loggedInUser: { name: string; email: string } | null;
    setLoggedInUser: (user: { name: string; email: string } | null) => void;
    isActivated: boolean;
    setActivated: (status: boolean) => void;
    loading: boolean;
} | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [loggedInUser, setLoggedInUser] = useState<{ name: string; email: string } | null>(null);
    const [isActivated, setActivated] = useState(false);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await fetch('/api/me');
                if (res.ok) {
                    const { user } = await res.json();
                    setLoggedInUser({ name: user.name, email: user.email });
                    setActivated(user.activated);
                }
            } catch (error) {
                console.error("Failed to fetch user status", error);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const value = { loggedInUser, setLoggedInUser, isActivated, setActivated, loading };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// Czech name declension for vocative case (5th case)
function toVocative(name: string): string {
    if (!name) return '';
    const lowerName = name.toLowerCase();
    const lastChar = lowerName.slice(-1);
    const lastTwoChars = lowerName.slice(-2);

    // Specific exceptions
    if (lowerName === 'Ježíš') return 'Ježíši';
    if (lowerName === 'bůh') return 'Bože';
    
    // General rules (simplified)
    if (lastTwoChars === 'ec') return name.slice(0, -2) + 'če';
    if (lastChar === 'a') return name.slice(0, -1) + 'o';
    if (lastChar === 'o') return name;
    if (lastChar === 'e') return name;
    if (lastChar === 'k') return name.slice(0, -1) + 'ku';
    if (lastChar === 'h') return name.slice(0, -1) + 'hu';
    if (lastChar === 'g') return name.slice(0, -1) + 'gu';
    if (['c', 'č', 'j', 'ň', 'ř', 'š', 'ž'].includes(lastChar)) return name + 'i';
    
    // Default for most male names
    return name + 'e';
}


export default function OnlineKurzyPage() {
  return (
    <AuthProvider>
      <OnlineKurzyContent />
    </AuthProvider>
  );
}


function OnlineKurzyContent() {
  const { loggedInUser, isActivated, loading, setLoggedInUser, setActivated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showHeroForm, setShowHeroForm] = useState(false);
  const [afterRegister, setAfterRegister] = useState(false);

  useEffect(() => {
    if (loggedInUser && isActivated) {
      setShowHeroForm(false);
      setAfterRegister(false);
    }
  }, [loggedInUser, isActivated]);

  const handleLogout = async () => {
    try {
        await fetch('/api/logout', { method: 'POST' });
        setLoggedInUser(null);
        setActivated(false);
        setAfterRegister(false);
    } catch (error) {
        console.error('Logout failed', error);
    }
  };

  if (loading) {
      return (
          <main className={styles.onlineKurzyPage}>
              <div className="flex justify-center items-center h-screen">
                  <p>Načítání...</p>
              </div>
          </main>
      )
  }

  return (
    <>
      <main className={styles.onlineKurzyPage}>
        {/* Hero sekce - vždy viditelná */}
        <section className={styles.heroSection}>
          <div className={styles.heroBgWrapper}>
            <Image src="/kurzy/kurz-hero.png" alt="Online kurz tetování obočí" fill priority className={styles.heroBgImg} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <h1>Online kurzy tetování obočí</h1>
            <p>Ovládněte moderní techniky permanentního make-upu z pohodlí domova. Vhodné pro začátečníky i pokročilé.</p>
            <a className={styles.heroButton} href="https://shop.salonanno.cz/products/online-kurz-tetovani-oboci" target="_blank" rel="noopener noreferrer">Koupit kurz</a>
            {/* Přihlásit se / Aktivovat kurz tlačítko nebo přivítání */}
            {loggedInUser && isActivated ? (
              <div style={{marginTop:'1.2rem'}}>
                <div style={{fontWeight:600,fontSize:'1.1rem',marginBottom:'0.5rem',color:'#fff',textShadow:'0 2px 8px rgba(0,0,0,0.18)'}}>Vítejte, {toVocative(loggedInUser.name)}!</div>
                <button className={styles.heroSecondaryButton} onClick={handleLogout}>Odhlásit se</button>
              </div>
            ) : (
              <>
                {!loggedInUser && (
                  <button className={styles.heroSecondaryButton} onClick={() => { setShowHeroForm(v => !v); setAfterRegister(false); }}>
                    {showHeroForm ? "Zavřít" : "Přihlásit se"}
                  </button>
                )}
                {loggedInUser && !isActivated && (
                  <button className={styles.heroSecondaryButton} onClick={() => setShowHeroForm(v => !v)}>
                    {showHeroForm ? "Zavřít" : "Aktivovat kurz"}
                  </button>
                )}
              </>
            )}
            {/* Formulář rozbalený s animací */}
            {showHeroForm && (
              <div className={styles.heroFormWrapper}>
                {loggedInUser && !isActivated ? (
                  <>
                    <h1>Aktivace kurzu</h1>
                    <p>Zadejte aktivační kód, který jste obdrželi po zakoupení kurzu.</p>
                    <ActivateCourseForm userEmail={loggedInUser.email} />
                    <div className={styles.heroAuthLinks}>
                      <button onClick={handleLogout} style={{background:'#7a6a4f',color:'#fff',border:'none',borderRadius:'8px',padding:'0.7rem 1.5rem',fontWeight:600,cursor:'pointer',marginTop:'1.5rem'}}>Odhlásit se</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${styles.formContainer} ${!showLogin ? styles.formActive : ''}`}>
                      <div className={styles.formInner}>
                        <h1>Registrace</h1>
                        <p>Vytvořte si účet a získejte přístup ke kurzu.</p>
                        <RegistrationForm onRegister={() => { setAfterRegister(true); setShowLogin(false); }} />
                        <div className={styles.heroAuthLinks}>
                          <a href="#login" onClick={e => { e.preventDefault(); setShowLogin(true); }}>
                            Máte už účet? Přihlaste se zde
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.formContainer} ${showLogin ? styles.formActive : ''}`}>
                      <div className={styles.formInner}>
                        <h1>Přihlášení</h1>
                        <p>Pokračujte do své vzdělávací cesty.</p>
                        <LoginForm />
                        <div className={styles.heroAuthLinks}>
                          <a href="#register" onClick={e => { e.preventDefault(); setShowLogin(false); setAfterRegister(false); }}>
                            Nemáte účet? Zaregistrujte se zde
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Obsah kurzu - pouze pro přihlášené a aktivované */}
        {loggedInUser && isActivated && (
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
        )}

        {/* Benefit sekce - vždy viditelná */}
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
          </div>
        </section>
      </main>
    </>
  );
} 