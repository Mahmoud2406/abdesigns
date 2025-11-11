# AB Designs – Marketing & Web Development Site

Moderne markedsførings- og nettsideside bygget i React 18 med Vite 7 og TypeScript. Løsningen er tilpasset byrået AB Designs og viser frem tjenester, prosesser og kontaktpunkter i en enkel en-sides opplevelse.

## Forutsetninger

- Node.js **20.19.0 eller nyere** (Vite 7 krever dette). Oppgrader gjerne til siste LTS før du kjører prosjektet.
- npm 10 (installeres sammen med Node). Andre pakkehåndterere fungerer også, men npm-skript i `package.json` er utgangspunktet.

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

- `src/App.tsx` – all hovedlayout og innhold for landingssiden.
- `src/App.css` – seksjonsbasert styling, inkludert hero, tjenester, prosesser og CTA.
- `src/index.css` – globale typografi- og bakgrunnsinnstillinger.
- `src/pages/Privacy.tsx` – dedikert personvernside tilgjengelig via `/personvern`.

## Videre arbeid

- Legg inn ekte caser, statistikk og kontaktinformasjon når dette er klart.
- Bytt gjerne ut mailto-lenker med et kontaktskjema eller integrasjon mot CRM.
- Vurder å legge til analysemåling (for eksempel Plausible eller GA4) før lansering.
