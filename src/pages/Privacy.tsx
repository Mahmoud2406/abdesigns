import { Link } from 'react-router-dom'
import './Privacy.css'

const policySections = [
  {
    title: '1. Om denne personvernerklæringen',
    body:
      'AB Designs behandler personopplysninger i tråd med gjeldende lover og regler. Denne erklæringen beskriver hvilke data vi samler inn, hvorfor vi gjør det og hvilke rettigheter du har.',
  },
  {
    title: '2. Behandlingsansvarlig',
    body:
      'AB Designs, org.nr 998 123 456, er behandlingsansvarlig for personopplysninger knyttet til leveranse av markedsføringstjenester, nettsider og kommunikasjon med kunder og interessenter.',
  },
  {
    title: '3. Hvilke data samles inn?',
    body:
      'Vi behandler kontaktinformasjon (navn, e-post, telefon), virksomhetsdata, kommunikasjonshistorikk og prosjektrelaterte dokumenter du deler med oss. Når du besøker nettsiden kan vi også samle inn anonymisert statistikk om trafikk og bruksmønster.',
  },
  {
    title: '4. Formål og behandlingsgrunnlag',
    body:
      'Opplysningene brukes til å svare på henvendelser, planlegge og levere prosjekter, sende relevant informasjon og forbedre tjenestene våre. Behandlingsgrunnlaget er avtaleoppfyllelse, berettiget interesse og samtykke der det kreves.',
  },
  {
    title: '5. Lagring og deling',
    body:
      'Data lagres på sikre plattformer innenfor EU/EØS eller hos tilbydere med gyldige overføringsgrunnlag. Vi deler ikke opplysninger med tredjeparter med mindre det er nødvendig for å levere avtalte tjenester eller oppfylle lovpålagte krav.',
  },
  {
    title: '6. Lagringstid',
    body:
      'Vi lagrer opplysninger så lenge det er nødvendig for formålet de ble samlet inn for. Prosjektrelatert informasjon lagres normalt i inntil tre år etter avslutning, med mindre annet følger av lovkrav eller avtaler.',
  },
  {
    title: '7. Dine rettigheter',
    body:
      'Du kan be om innsyn, korrigering, begrensning eller sletting av personopplysninger. Du kan også protestere mot behandlingen eller trekke tilbake samtykke. Kontakt oss på personvern@abdesigns.no for å utøve dine rettigheter.',
  },
  {
    title: '8. Informasjonskapsler',
    body:
      'Vi bruker informasjonskapsler for å gi en best mulig brukeropplevelse og for anonymisert analyse. Du kan endre innstillinger i nettleseren for å blokkere eller slette informasjonskapsler.',
  },
  {
    title: '9. Kontakt',
    body:
      'Har du spørsmål om personvern hos AB Designs kan du kontakte oss på e-post ah@etcnor.no eller telefon +47 91 28 19 17. Vår postadresse er Strandvegen 4, 2212 Kongsvinger.',
  },
]

function Privacy() {
  return (
    <main className="privacy-page">
      <nav className="privacy-nav">
        <Link to="/">← Tilbake til forsiden</Link>
      </nav>
      <section className="privacy-hero">
        <h1>Personvernerklæring</h1>
        <p>Oppdatert 11. november 2025</p>
        <p>
          Vi tar personvern på alvor. Her beskriver vi hvordan vi samler inn, bruker og beskytter opplysninger i forbindelse med tjenestene våre.
        </p>
      </section>

      <section className="privacy-content">
        {policySections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Privacy
