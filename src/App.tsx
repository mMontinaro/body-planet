import { useState } from 'react'
import { ArrowUpRight, Clock3, Download, Dumbbell, Mail, MapPin, Menu, MoveUpRight, Phone, X } from 'lucide-react'
import copy from './locales/it.json'
import { openingHours, siteLinks } from './data/site'
import CourseCard from './components/CourseCard'
import { courses } from './data/courses'
import Gallery from './components/Gallery'
import SocialLinks from './components/SocialLinks'
import { siteMedia } from './data/media'

function getLocalizedString(key: string): string {
  const value = key.split('.').reduce<unknown>((current, segment) => {
    if (typeof current !== 'object' || current === null) return undefined
    return (current as Record<string, unknown>)[segment]
  }, copy)

  return typeof value === 'string' ? value : key
}

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-heading">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2 className="uppercase">{title}</h2>{description && <p>{description}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${copy.brand.name}, home`}><img className="brand-mark brand-mark-logo" src={siteMedia.logo} alt="" aria-hidden="true" /><span>{copy.brand.name}<small>{copy.brand.location}</small></span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">{menuOpen ? copy.accessibility.closeMenu : copy.accessibility.openMenu}</span>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navigazione principale">
        <a href="#palestra" onClick={closeMenu}>{copy.nav.gym}</a><a href="#corsi" onClick={closeMenu}>{copy.nav.courses}</a><a href="#orari" onClick={closeMenu}>{copy.nav.hours}</a><a href="#contatti" onClick={closeMenu}>{copy.nav.contact}</a>
        <a className="button button-small" href={siteLinks.whatsapp}>{copy.hero.primaryCta}<ArrowUpRight size={16} aria-hidden="true" /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-dark">
        <div className="container hero-content">
          <div className="hero-copy">
            <h1 className="uppercase primary">{copy.hero.title}</h1>
            <p>{copy.hero.description}</p>
            <div className="hero-actions">
              <a className="button" href={siteLinks.whatsapp}>{copy.hero.primaryCta}<ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="text-link light-link" href="#corsi">{copy.hero.secondaryCta}<MoveUpRight size={17} aria-hidden="true" /></a>
            </div>
            <SocialLinks className="social-links-hero" links={siteLinks.social} labels={copy.social} />
          </div>
          <div className="hero-visual">
            <div className="hero-logo-panel">
              <img className="brand-logo hero-logo" src={siteMedia.logo} alt={copy.brand.logoAlt} />
            </div>
            <p className="hero-note">{copy.hero.note}</p>
          </div>
        </div>
      </section>

      <section id="palestra" className="section section-overlap"><div className="container split-layout"><div className="visual-panel"><div className="visual-panel-label">{copy.brand.name}<span>01 / 04</span></div><div className="visual-ring" aria-hidden="true"><Dumbbell size={48} /></div><span className="vertical-word">TRAINING</span></div><div className="section-content"><SectionHeading title={copy.gym.title} description={copy.gym.description} /><p className="section-description2">{copy.gym.description2}</p></div></div></section>

      <section id="corsi" className="section section-tint"><div className="container"><SectionHeading title={copy.courses.title} description={copy.courses.description} /><div className="course-grid">{courses.map((course, index) => <CourseCard key={course.id} course={course} name={getLocalizedString(course.nameKey)} description={getLocalizedString(course.descriptionKey)} index={index} />)}</div></div></section>

      <section id="orari" className="section section-dark schedule-section"><div className="container schedule-layout"><div><SectionHeading title={copy.schedule.title} description={copy.schedule.description} /><a className="button" href={siteLinks.whatsapp}>{copy.schedule.cta}<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="hours-card"><div className="hours-card-heading"><Clock3 size={22} aria-hidden="true" /><h3>{copy.schedule.hoursTitle}</h3></div><dl>{openingHours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div></div></section>

      <section className="hero-media-section">
        <img className="hero-media" src={siteMedia.heroImage} alt={copy.heroImage.alt} />
        <div className="container hero-documents">
          <a className="document-download" href="/documents/attivita.pdf" download><Download size={17} aria-hidden="true" />{copy.documents.activities}</a>
          <a className="document-download" href="/documents/codice_di_condotta.pdf" download><Download size={17} aria-hidden="true" />{copy.documents.codeOfConduct}</a>
          <a className="document-download" href="/documents/MOG.pdf" download><Download size={17} aria-hidden="true" />{copy.documents.mog}</a>
        </div>
      </section>

      <section className="section gallery-section"><div className="container"><SectionHeading eyebrow={copy.gallery.eyebrow} title={copy.gallery.title} description={copy.gallery.description} /><Gallery images={siteMedia.gallery.map((image) => ({ ...image, alt: getLocalizedString(image.altKey) }))} previousLabel={copy.gallery.previous} nextLabel={copy.gallery.next} positionLabel={copy.gallery.position} /></div></section>

      <section id="contatti" className="section contact-section"><div className="container"><div className="contact-heading-row"><SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} description={copy.contact.description} /><img className="brand-logo contact-logo" src={siteMedia.logo} alt={copy.brand.logoAlt} /></div><div className="contact-grid"><a className="contact-card contact-primary" href={siteLinks.whatsapp}><span className="contact-icon"><MoveUpRight size={20} aria-hidden="true" /></span><span><small>{copy.contact.whatsapp}</small><strong>+39 347 441 3383</strong></span></a><a className="contact-card" href={siteLinks.phone}><Phone size={20} aria-hidden="true" /><span><small>{copy.contact.phoneLabel}</small><strong>+39 347 441 3383</strong></span></a><a className="contact-card" href={siteLinks.email}><Mail size={20} aria-hidden="true" /><span><small>{copy.contact.emailLabel}</small><strong>bodyplanetcentrofitness@gmail.com</strong></span></a><a className="contact-card" href={siteLinks.maps}><MapPin size={20} aria-hidden="true" /><span><small>{copy.contact.addressLabel}</small><strong>V.le della Stazione, 285<br />04100 Latina Scalo LT</strong></span></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-top"><a className="brand brand-footer" href="#top"><img className="brand-mark brand-mark-logo" src={siteMedia.logo} alt="" aria-hidden="true" /><span>{copy.brand.name}<small>{copy.brand.location}</small></span></a><div className="footer-actions"><a className="text-link" href={siteLinks.maps}>{copy.contact.directions}<MoveUpRight size={17} aria-hidden="true" /></a><SocialLinks links={siteLinks.social} labels={copy.social} /></div></div><div className="container footer-bottom"><span>{copy.footer.legal}</span><span>{copy.footer.vat}</span><span>{copy.footer.copyright}</span></div></footer>
  </div>
}

export default App
