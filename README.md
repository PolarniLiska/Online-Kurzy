# Salon Anno – Online Kurzy

Tento repozitář obsahuje frontendovou část aplikace pro online kurzy kosmetického salonu [SalonAnno.cz](https://salonanno.cz).  
Stránka umožňuje nákup digitálních kurzů přes Shopify, registraci uživatele, zadání unikátního kódu a následný přístup k videoobsahu.

---

## 🧩 Použité technologie

- **Next.js / React**
- **Node.js (API routes)**
- **MongoDB Atlas** – databáze uživatelů a kódů
- **Shopify** – nákup kurzů jako digitálních produktů
- **TailwindCSS** – stylování
- **Email Webhook** – rozeslání unikátního kódu po nákupu

---

## ✨ Funkce

- Přihlašovací / registrační systém
- Ověření jednorázového unikátního kódu
- Trvalý přístup k obsahu po jeho aktivaci
- Ochrana proti opakovanému použití kódu
- Možnost budoucího rozšíření o zkoušky s certifikací

---

## 🔐 Bezpečnost

- Hesla jsou ukládána pomocí bcrypt hashování
- Aktivace kódu je jednorázová a přiřazena ke konkrétnímu účtu
- Přístup k videím je chráněn login systémem a validací tokenu

---

## ⚙️ Lokální vývoj

```bash
git clone https://github.com/tvoje-uzivatelske-jmeno/salon-anno-online-kurzy.git
cd salon-anno-online-kurzy
npm install
npm run dev
```

---

## 🌍 Deployment

Projekt je nasazen přes FTP na doménu `salonanno.cz`  
Databáze je cloudová: **MongoDB Atlas**  
Platby zajišťuje **Shopify** a následně přes webhook posílá data o objednávce (včetně e-mailu).

---

## 📦 Struktura projektu

```
/pages
  /online-kurzy
    - index.tsx (hlavní rozhraní)
    - login.tsx
    - register.tsx
    - dashboard.tsx
/api
  - auth (login, register)
  - code (activation)
/components
  - VideoSection.tsx
  - LoginForm.tsx
  - RegisterForm.tsx
```

---

## 🧪 Co bude potřeba nastavit

- MongoDB cluster + kolekce `users`, `accessCodes`
- SMTP nebo jiná služba pro zasílání e-mailů
- Shopify digitální produkt s napojeným webhookem
- Ověření kódu na frontendu i backendu
- Login systém s ochranou stránek

---

## 📅 Deadline projektu

**Cíl dokončení:** do **20.8.2025**

---

## 👨‍💻 Autor

Tento systém vyvíjí Jan Spiška  
