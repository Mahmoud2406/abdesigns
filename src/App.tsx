import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/ab-designs-logo.png'
import './App.css'

type Service = {
  title: string
  description: string
  highlights: string[]
}

type CaseStudy = {
  company: string
  outcome: string
  summary: string
}

type ProcessStep = {
  title: string
  detail: string
}

type NavLink = {
  label: string
  href?: string
  to?: string
}

const navLinks: NavLink[] = [
  { label: 'Tjenester', href: '#services' },
  { label: 'Prosjekter', href: '#projects' },
  { label: 'Prosess', href: '#process' },
  { label: 'Om oss', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
  { label: 'Personvern', to: '/personvern' },
]

const services: Service[] = [
  {
    title: 'Vekstmarketing',
    description:
      'Datadrevne kampanjer som kobler merkevaren din til målgruppen der den faktisk tar beslutninger.',
    highlights: ['Paid & organic strategi', 'Innhold og kampanjeplaner', 'Marketing automation'],
  },
  {
    title: 'Nettsideutvikling',
    description:
      'Hurtige, tilgjengelige React-nettsider som kombinerer design og teknologi for å konvertere besøkende til kunder.',
    highlights: ['UX- og konseptworkshop', 'Komponentbasert design', 'Integrasjoner og analyse'],
  },
  {
    title: 'Brand & identitet',
    description:
      'Vi bygger visuelle univers og budskap som gir gjenkjennelse og tillit på tvers av alle kontaktpunkter.',
    highlights: ['Posisjonering', 'Visuelt rammeverk', 'Tone of voice'],
  },
]

const caseStudies: CaseStudy[] = [
  {
    company: 'NordicActive',
    outcome: '+64% kvalifiserte leads på 90 dager',
    summary:
      'Lanserte ny identitet og landingsside optimalisert for betalt trafikk. Resultatet ble tydeligere budskap og høyere konvertering.',
  },
  {
    company: 'Haven Workspace',
    outcome: '3x økning i demo-bookinger',
    summary:
      'Kombinerte redesign med en e-postdrevet nurture-strøm som holdt leads varme helt frem til signering.',
  },
]

const process: ProcessStep[] = [
  {
    title: 'Oppdagelse',
    detail: 'Vi kartlegger forretningsmål, målgrupper og eksisterende innsikt for å avdekke tydelige vekstmuligheter.',
  },
  {
    title: 'Strategi & konsept',
    detail: 'Workshop, tonen i kommunikasjonen og informasjonsarkitektur legger grunnlaget for design og innhold.',
  },
  {
    title: 'Design & bygging',
    detail: 'Iterativ designprosess fulgt av React-utvikling med modulære komponenter og høy ytelse.',
  },
  {
    title: 'Lansering & optimalisering',
    detail: 'Vi setter opp måling, analyserer data og forbedrer kontinuerlig for å holde vekstkurven oppe.',
  },
]

const stats = [
  { value: '12+', label: 'år med kombinert erfaring' },
  { value: '50%', label: 'kortere time-to-launch' },
  { value: '98%', label: 'kundeopprettholdelse' },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <a className="brand" href="#top" onClick={closeMenu}>
            <img src={logo} alt="AB Designs logo" className="brand-logo" />
          </a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Meny"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span className="menu-toggle-icon" />
          </button>
          <ul id="primary-navigation" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href ?? link.to}>
                {link.to ? (
                  <Link to={link.to} onClick={closeMenu}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="nav-menu-cta">
              <a className="cta-button primary" href="#contact" onClick={closeMenu}>
                Start et prosjekt
              </a>
            </li>
          </ul>
          <a className="cta-button nav-desktop-cta" href="#contact">
            Start et prosjekt
          </a>
        </nav>

        <div className="hero-content" id="top">
          <p className="hero-kicker">Markedsføring & digitale opplevelser</p>
          <h1>
            Vi bygger skalerbare merkevarer med design, innhold og teknologi som leverer målbare resultater.
          </h1>
          <p className="hero-subtitle">
            AB Designs kombinerer vekstmarketing med moderne React-utvikling. Sammen setter vi tempoet for den neste fasen av
            vekst.
          </p>
          <div className="hero-actions">
            <a className="cta-button primary" href="#services">
              Utforsk tjenester
            </a>
            <a className="cta-button ghost" href="#projects">
              Se prosjekter
            </a>
          </div>
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        <section className="section" id="services">
          <div className="section-header">
            <p className="eyebrow">Hva vi leverer</p>
            <h2>Markedsføring og nettsider som jobber sammen</h2>
            <p>
              Teamet vårt dekker hele kundereisen fra første interaksjon til lojal kunde. Hver tjeneste kan kombineres eller leveres
              separat – vi legger planen sammen.
            </p>
          </div>
          <div className="cards-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section accent" id="projects">
          <div className="section-header">
            <p className="eyebrow">Utvalgte prosjekter</p>
            <h2>Vekst vi har levert sammen med kundene våre</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="case-card" key={study.company}>
                <header>
                  <h3>{study.company}</h3>
                  <span>{study.outcome}</span>
                </header>
                <p>{study.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-header">
            <p className="eyebrow">Slik jobber vi</p>
            <h2>Fokusert, transparent og optimalisert for tempo</h2>
          </div>
          <div className="process-list">
            {process.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span className="process-index">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">Teamet</p>
              <h2>Et strategisk partnerteam for ambisiøse merkevarer</h2>
              <p>
                AB Designs er et tverrfaglig team av strateger, designere og utviklere. Vi liker å jobbe tett på kundene, teste
                hypoteser raskt og måle effekten av alt vi leverer.
              </p>
              <p>
                Vi tar prosjekter innen B2B SaaS, e-handel og profesjonelle tjenester – spesielt når det krever både markedsføring
                og teknologi for å lykkes.
              </p>
            </div>
            <div className="about-panel">
              <h3>Hva du får med oss</h3>
              <ul>
                <li>Dedikert team som følger prosjektet fra strategi til skalering</li>
                <li>Designsystemer som kan gjenbrukes og bygges videre på</li>
                <li>Pipeline for innhold, kampanjer og kontinuerlig optimalisering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="cta-content">
            <p className="eyebrow">Klar for neste steg?</p>
            <h2>La oss kartlegge hva slags vekstpotensial som ligger i merkevaren din.</h2>
            <p>
              Fortell oss om målene dine, så kommer vi tilbake med et konkret forslag til sprintplan, forventet tidslinje og
              investeringsnivå.
            </p>
            <div className="contact-actions">
              <a className="cta-button primary" href="mailto:kontakt@example.com">
                kontakt@example.com
              </a>
              <a
                className="cta-button ghost"
                href="#contact"
              >
                Book et introduksjonsmøte
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <strong>AB Designs</strong>
          <p>Markedsføring og nettsider som bygger vekst.</p>
        </div>
        <div className="footer-nav">
          <h4>Info</h4>
          <ul>
            <li>
              <a href="#articles">Artikler</a>
            </li>
            <li>
              <a href="#top">Hjem</a>
            </li>
            <li>
              <a href="#contact">Kontakt oss</a>
            </li>
            <li>
              <a href="#about">Om oss</a>
            </li>
            <li>
              <Link to="/personvern">Personvern</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Kontakt</h4>
          <ul>
            <li>
              <span>E-post: kontakt@example.com</span>
            </li>
            <li>
              <span>Telefon: +47 00 00 00 00</span>
            </li>
            <li>Besøksadresse oppdateres</li>
            <li>Kontoradresse oppdateres</li>
            <li>Postadresse oppdateres</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
