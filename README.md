# AB Designs – Marketing & Web Development Site

Moderne markedsførings- og nettsideside bygget i React 18/19 med Vite 7 og TypeScript. Løsningen er tilpasset byrået AB Designs og viser frem tjenester, prosesser og kontaktpunkter i en rask og tilgjengelig opplevelse.

## Forutsetninger

- Node.js **22.12.0 eller nyere** (prosjektet er satt til å kreve >=22.12 i `package.json` for å matche ny Vite og sikre kompatibilitet fremover).
- npm 10 (installeres sammen med Node). Andre pakkehåndterere fungerer også, men npm-skript i `package.json` er utgangspunktet.

> Tips: På Windows kan du bruke `nvm-windows` til å installere og bytte versjon:
> 1. Installer fra https://github.com/coreybutler/nvm-windows/releases
> 2. `nvm install 22.12.0`
> 3. `nvm use 22.12.0`

## Kom i gang

```powershell
npm install
npm run dev
```

Utviklingsserveren starter normalt på `http://localhost:5173`. Etter at du har startet `npm run dev`, trykk `o` i terminalen for å åpne siden i nettleseren.

## Nyttige skript

- `npm run dev` – starter Vite i utviklingsmodus med hot reload.
- `npm run build` – bygger en produksjonsklar versjon i `dist/`.
- `npm run preview` – forhåndsviser produksjonsbygget lokalt.

## Struktur

- `src/App.tsx` – hovedlayout, navigasjon, seksjoner og tilgjengelighetslogikk (skip‑link, fokusfelle for mobilmeny).
- `src/App.css` – seksjonsbasert styling, responsive regler, fokusstiler og redusert‑bevegelse fallback.
- `src/index.css` – globale typografi- og bakgrunnsinnstillinger.
- `src/pages/Privacy.tsx` / `Privacy.css` – personvernside med semantiske landemerker, tidsstempel og forbedret kontrast.
- `src/assets/*` – logo + dekorative/ikon‑SVG-er (`hero-pattern.svg`, `icon-*.svg`).

## Tilgjengelighet (WCAG) Implementert

- Semantiske landemerker: `header` (banner), `nav` (aria-label="Hovedmeny"), `main` (role="main"), `footer` (contentinfo).
- Skip‑link: "Hopp til hovedinnhold" for tastaturnavigasjon, synlig ved fokus.
- Fokusindikatorer: Tydelige `outline` på lenker/knapper (`:focus-visible`).
- Mobilmeny: Tastatursløyfe (fokusfelle) og Escape for å lukke; `aria-expanded` + `aria-controls` på toggle‑knapp.
- Kontrast: Palett justert for AA-kontrast (mørk bakgrunn + lys tekst, gradienter med tilstrekkelig lyshet; primær blå er dempet).
- Redusert bevegelse: `prefers-reduced-motion` kutter animasjoner og overganger.
- Tekstalternativer: Dekorative SVG-er markert med `aria-hidden="true"` og tom `alt"` der passende.
- Skjemaer: (Ingen enda) – anbefalt å legge inn riktig `label` og `aria-describedby` når kontaktskjema implementeres.

## Videre arbeid

- Legg inn ekte caser, statistikk og kontaktinformasjon når dette er klart.
- Erstatt placeholder e-post med reelt domene eller kontaktskjema (f.eks. Formspree / egen backend).
- Implementer analytics med samtykke (Plausible / Matomo / GA4) + oppdatert personvernseksjon.
- Legg til Open Graph + meta-tags i `index.html` (tittel, beskrivelse, image) for deling.
- Sett opp automatiske enhetstester for kritiske komponenter (navigasjon, skip-link, menylogikk).

## Lisens / Rettigheter

Innholdet er skreddersydd for AB Designs. Ikoner og mønster er genererte plassholdere og kan fritt erstattes.
