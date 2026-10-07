import { Facebook, Instagram, Mail, MapPin, MoveUpRight, Phone } from 'lucide-react'
import copy from '../locales/it.json'
import { siteLinks } from '../data/site'
import { siteMedia } from '../data/media'
import SectionHeading from '../components/SectionHeading'

function ContactSection() {
  return (
    <section id="contatti" className="section contact-section">
      <div className="container">
        <div className="contact-heading-row">
          <div className="mobile-description-banner">
            <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} description={copy.contact.description} />
          </div>
          <img className="brand-logo contact-logo" src={siteMedia.logo} alt={copy.brand.logoAlt} />
        </div>

        <div className="contact-grid">
          <a className="contact-card contact-primary" href={siteLinks.whatsapp}>
            <span className="contact-icon"><MoveUpRight size={20} aria-hidden="true" /></span>
            <span><small>{copy.contact.whatsapp}</small><strong>+39 347 441 3383</strong></span>
          </a>
          <a className="contact-card" href={siteLinks.social.instagram} target="_blank" rel="noreferrer">
            <Instagram size={20} aria-hidden="true" />
            <span><small>{copy.social.instagram}</small><strong>{copy.social.instagramHandle}</strong></span>
          </a>
          <a className="contact-card" href={siteLinks.maps} target="_blank" rel="noreferrer">
            <MapPin size={20} aria-hidden="true" />
            <span><small>{copy.contact.addressLabel}</small><strong>V.le della Stazione, 285<br />04100 Latina Scalo LT</strong></span>
          </a>
          <a className="contact-card" href={siteLinks.social.facebook} target="_blank" rel="noreferrer">
            <Facebook size={20} aria-hidden="true" />
            <span><small>{copy.social.facebook}</small><strong>{copy.social.facebookHandle}</strong></span>
          </a>
          <a className="contact-card" href={siteLinks.phone}>
            <Phone size={20} aria-hidden="true" />
            <span><small>{copy.contact.phoneLabel}</small><strong>+39 347 441 3383</strong></span>
          </a>
          <a className="contact-card" href={siteLinks.email}>
            <Mail size={20} aria-hidden="true" />
            <span><small>{copy.contact.emailLabel}</small><strong>bodyplanetcentrofitness@gmail.com</strong></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
