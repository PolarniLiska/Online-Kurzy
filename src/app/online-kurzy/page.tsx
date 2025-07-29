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

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        setSuccess("✅ Uživatel zaregistrován");
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
  
  // New state to manage login status
  const { setLoggedInUser } = useAuth();


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
        setSuccess("✅ Přihlášení úspěšné");
        setLoggedInUser(email); // Store email on successful login
        // Don't clear email input, it's needed for activation
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
    loggedInUser: string | null;
    setLoggedInUser: (email: string | null) => void;
    isActivated: boolean;
    setActivated: (status: boolean) => void;
    loading: boolean;
} | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
    const [isActivated, setActivated] = useState(false);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await fetch('/api/me');
                if (res.ok) {
                    const { user } = await res.json();
                    setLoggedInUser(user.email);
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

export default function OnlineKurzyPage() {
  return (
    <AuthProvider>
      <OnlineKurzyContent />
    </AuthProvider>
  );
}


function OnlineKurzyContent() {
  const { loggedInUser, isActivated, loading } = useAuth();
  
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

      {/* Course content - shown only if activated */}
      {isActivated ? (
        <>
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
        </>
      ) : (
         <section className="text-center p-8 bg-gray-100/50 my-8">
            <h2 className="text-2xl font-bold">Obsah kurzu je zamčený</h2>
            <p className="mt-2">Pro zobrazení obsahu se přihlaste a aktivujte kurz pomocí kódu.</p>
         </section>
      )}

      {/* REGISTRATION & LOGIN SECTIONS */}
      <section className="max-w-xl mx-auto mt-12 mb-8 p-8 bg-white/80 rounded-lg shadow flex flex-col gap-12">
        {/* Registrace */}
        {!loggedInUser && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Registrace</h2>
            <RegistrationForm />
          </div>
        )}
        {/* Přihlášení & Aktivace */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {loggedInUser ? `Přihlášen jako ${loggedInUser}` : "Přihlášení"}
          </h2>
          {!loggedInUser && <LoginForm />}
          {loggedInUser && !isActivated && <ActivateCourseForm userEmail={loggedInUser} />}
          {loggedInUser && isActivated && (
             <div className="text-center text-green-700 font-bold p-4 bg-green-100 rounded">
                ✅ Kurz je aktivní a odemčený.
             </div>
          )}
        </div>
      </section>
    </main>
  );
} 