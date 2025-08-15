# 🎥 Návod: Jak přidat videa do kurzu

## 📍 Kde upravovat videa

Všechna videa upravuješ v souboru: `src/app/online-kurzy/page.tsx`
Najdi sekci s komentářem `// 🎥 KONFIGURACE VIDEÍ - UPRAVUJ TADY!`

## 🎬 Typy videí, které můžeš použít

### 1. **YouTube videa** (doporučeno pro jednoduchost)
```jsx
{
  id: "video-1",
  title: "Úvod do tetování obočí", 
  description: "Základní přehled techniky",
  duration: "15 min",
  videoType: "youtube",
  videoId: "dQw4w9WgXcQ", // ⬅️ ZMĚŇ NA SKUTEČNÉ YouTube ID
}
```
**Jak získat YouTube ID:** Z URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ` je ID `dQw4w9WgXcQ`

### 2. **Vimeo videa**
```jsx
{
  id: "video-2",
  title: "Pokročilé techniky",
  description: "Detailní ukázka",  
  duration: "22 min",
  videoType: "vimeo",
  videoId: "123456789", // ⬅️ Vimeo video ID
}
```

### 3. **Lokální videa** (na tvém serveru)
```jsx
{
  id: "video-3", 
  title: "Praktická ukázka",
  description: "Step by step proces",
  duration: "35 min", 
  videoType: "local",
  videoSrc: "/videos/kurz-prakticka-ukazka.mp4", // ⬅️ Cesta k souboru
  thumbnailSrc: "/videos/thumbs/kurz-3-thumb.jpg" // Volitelný náhled
}
```

### 4. **Přímé URL** (odkaz na video)
```jsx
{
  id: "video-4",
  title: "Péče po zákroku", 
  description: "Aftercare instructions",
  duration: "18 min",
  videoType: "url", 
  videoSrc: "https://example.com/direct-video-link.mp4"
}
```

## 📁 Kde ukládat lokální videa

Pro lokální videa vytvoř složky:
```
public/
├── videos/
│   ├── kurz-1-uvod.mp4
│   ├── kurz-2-techniky.mp4
│   ├── kurz-3-prakticka-ukazka.mp4
│   └── kurz-4-aftercare.mp4
└── videos/thumbs/  (volitelné náhledy)
    ├── kurz-1-thumb.jpg
    ├── kurz-2-thumb.jpg  
    └── ...
```

## 🔧 Pokročilé možnosti

### Instalace React Player (volitelné)
Pro více možností nainstaluj:
```bash
npm install react-player
```

Pak můžeš používat:
- YouTube, Vimeo, Facebook, SoundCloud
- Živé streamy
- Pokročilé ovládání přehrávání

### Příklad s React Player
```jsx
import ReactPlayer from 'react-player'

<ReactPlayer
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  width="100%"
  height="100%" 
  controls={true}
  light={true} // Zobrazí náhled před přehráním
  playing={false}
  config={{
    youtube: {
      playerVars: { showinfo: 0, modestbranding: 1 }
    }
  }}
/>
```

## ⚙️ Jak změnit video

1. **Otevři:** `src/app/online-kurzy/page.tsx`
2. **Najdi:** `const courseVideos = [`
3. **Uprav video:** Změň `videoId`, `videoSrc`, nebo `videoType`
4. **Ulož soubor** a stránka se automaticky aktualizuje

## 📝 Příklad kompletní konfigurace

```jsx
const courseVideos = [
  // Video 1 - Vždy odemčené
  {
    id: "intro-video",
    title: "Úvod do tetování obočí",
    description: "Seznámení s technikami a bezpečností",
    duration: "15 min",
    videoType: "youtube",
    videoId: "TVOJE_YOUTUBE_ID", // ⬅️ ZMĚŇ!
  },
  
  // Video 2 - Odemkne se po aktivaci
  {
    id: "techniques-video", 
    title: "Základní techniky",
    description: "Microblading vs pudrové obočí",
    duration: "22 min",
    videoType: "local",
    videoSrc: "/videos/zakladni-techniky.mp4",
    thumbnailSrc: "/videos/thumbs/techniky-thumb.jpg"
  },
  
  // Video 3 - Pokročilé
  {
    id: "advanced-video",
    title: "Pokročilé techniky", 
    description: "Kombinované metody a speciální případy",
    duration: "35 min",
    videoType: "vimeo",
    videoId: "987654321"
  }
];
```

## 🎯 Rychlý start

1. **Nahraj videa** na YouTube (nejjednodušší)
2. **Zkopíruj video ID** z URL 
3. **Uprav `courseVideos`** v `page.tsx`
4. **Změň `videoId`** na skutečné ID
5. **Hotovo!** 🎉

## 🔒 Logika odemykání

- **Video 1**: Vždy dostupné (i neregistrovaným)
- **Videa 2-5**: Dostupné až po aktivaci kurzu kódem
- Po aktivaci se automaticky odemknou všechna videa

## 🐛 Řešení problémů

- **Video se nenačítá**: Zkontroluj správnost `videoId` nebo `videoSrc`
- **404 chyba**: Pro lokální videa zkontroluj, že soubor existuje v `public/videos/`
- **Styling problémy**: Všechny styly jsou v `src/components/video-player/styles.module.scss`

---

**💡 Tip:** Doporučuji začít s YouTube videi - je to nejjednodušší a nejspolehlivější!
