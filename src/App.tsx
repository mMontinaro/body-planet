import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Clock3, Dumbbell, Mail, MapPin, Menu, MoveUpRight, Phone, X } from 'lucide-react'
import copy from './locales/it.json'
import { openingHours, siteLinks } from './data/site'

type Course = (typeof copy.courses.list)[number]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeGroup, setActiveGroup] = useState('fitness')
  const courses = copy.courses.list.filter((course: Course) => course.group === activeGroup)
  const groupKeys = Object.keys(copy.courses.groups) as Array<keyof typeof copy.courses.groups>

  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${copy.brand.name}, home`}><span className="brand-mark">BP</span><span>{copy.brand.name}<small>{copy.brand.location}</small></span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">{menuOpen ? copy.accessibility.closeMenu : copy.accessibility.openMenu}</span>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navigazione principale">
        <a href="#palestra" onClick={closeMenu}>{copy.nav.gym}</a><a href="#corsi" onClick={closeMenu}>{copy.nav.courses}</a><a href="#orari" onClick={closeMenu}>{copy.nav.hours}</a><a href="#contatti" onClick={closeMenu}>{copy.nav.contact}</a>
        <a className="button button-small" href={siteLinks.whatsapp}>{copy.hero.primaryCta}<ArrowUpRight size={16} aria-hidden="true" /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-dark">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /></div>
        <div className="container hero-content"><div className="hero-copy"><span className="eyebrow eyebrow-light">{copy.hero.eyebrow}</span><h1>{copy.hero.title}</h1><p>{copy.hero.description}</p><div className="hero-actions"><a className="button" href={siteLinks.whatsapp}>{copy.hero.primaryCta}<ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link light-link" href="#corsi">{copy.hero.secondaryCta}<MoveUpRight size={17} aria-hidden="true" /></a></div></div><div className="hero-side"><div className="hero-stamp"><Dumbbell size={24} aria-hidden="true" /><span>Move<br /><b>better</b></span></div><p>{copy.hero.note}</p></div></div>
      </section>

      <section id="palestra" className="section section-overlap"><div className="container split-layout"><div className="visual-panel"><div className="visual-panel-label">{copy.brand.name}<span>01 / 04</span></div><div className="visual-ring" aria-hidden="true"><Dumbbell size={48} /></div><span className="vertical-word">TRAINING</span></div><div className="section-content"><SectionHeading eyebrow={copy.gym.eyebrow} title={copy.gym.title} description={copy.gym.description} /><div className="feature-list">{copy.gym.items.map((item) => <div className="feature-item" key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></div>)}</div></div></div></section>

      <section id="corsi" className="section section-tint"><div className="container"><SectionHeading eyebrow={copy.courses.eyebrow} title={copy.courses.title} description={copy.courses.description} /><div className="course-tabs" role="tablist" aria-label="Categorie corsi">{groupKeys.map((key) => <button key={key} className={activeGroup === key ? 'tab is-active' : 'tab'} type="button" role="tab" aria-selected={activeGroup === key} onClick={() => setActiveGroup(key)}>{copy.courses.groups[key]}<ChevronDown size={15} aria-hidden="true" /></button>)}</div><div className="course-grid">{courses.map((course) => <article className="course-card" key={course.name}><span className="course-number">{String(copy.courses.list.indexOf(course) + 1).padStart(2, '0')}</span><h3>{course.name}</h3><p>{course.description}</p><span className="card-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span></article>)}</div></div></section>

      <section id="orari" className="section section-dark schedule-section"><div className="container schedule-layout"><div><SectionHeading eyebrow={copy.schedule.eyebrow} title={copy.schedule.title} description={copy.schedule.description} /><a className="button" href={siteLinks.whatsapp}>{copy.schedule.cta}<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="hours-card"><div className="hours-card-heading"><Clock3 size={22} aria-hidden="true" /><h3>{copy.schedule.hoursTitle}</h3></div><dl>{openingHours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div></div></section>

      <section className="section app-section"><div className="container app-layout"><div className="app-art" aria-hidden="true"><span className="app-circle circle-one" /><span className="app-circle circle-two" /><div className="phone-shape"><span>BP</span></div></div><div className="app-copy"><SectionHeading eyebrow={copy.app.eyebrow} title={copy.app.title} description={copy.app.description} /><ul className="check-list">{copy.app.features.map((feature) => <li key={feature}><Check size={17} aria-hidden="true" />{feature}</li>)}</ul></div></div></section>

      <section id="contatti" className="section contact-section"><div className="container"><SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} description={copy.contact.description} /><div className="contact-grid"><a className="contact-card contact-primary" href={siteLinks.whatsapp}><span className="contact-icon"><MoveUpRight size={20} aria-hidden="true" /></span><span><small>{copy.contact.whatsapp}</small><strong>+39 347 441 3383</strong></span></a><a className="contact-card" href={siteLinks.phone}><Phone size={20} aria-hidden="true" /><span><small>{copy.contact.phoneLabel}</small><strong>+39 347 441 3383</strong></span></a><a className="contact-card" href={siteLinks.email}><Mail size={20} aria-hidden="true" /><span><small>{copy.contact.emailLabel}</small><strong>bodyplanetcentrofitness@gmail.com</strong></span></a><a className="contact-card" href={siteLinks.maps}><MapPin size={20} aria-hidden="true" /><span><small>{copy.contact.addressLabel}</small><strong>V.le della Stazione, 285<br />04100 Latina Scalo LT</strong></span></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-top"><a className="brand brand-footer" href="#top"><span className="brand-mark">BP</span><span>{copy.brand.name}<small>{copy.brand.location}</small></span></a><a className="text-link" href={siteLinks.maps}>{copy.contact.directions}<MoveUpRight size={17} aria-hidden="true" /></a></div><div className="container footer-bottom"><span>{copy.footer.legal}</span><span>{copy.footer.vat}</span><span>{copy.footer.copyright}</span></div></footer>
  </div>
}

export default App
