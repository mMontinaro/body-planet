import { useState } from 'react'
import { ArrowDownRight, Menu, X } from 'lucide-react'
import copy from '../locales/it.json'
import { siteLinks } from '../data/site'
import { siteMedia } from '../data/media'

function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${copy.brand.name}, home`}>
        <img className="brand-mark brand-mark-logo" src={siteMedia.logo} alt="" aria-hidden="true" />
        <span>{copy.brand.name}<small>{copy.brand.location}</small></span>
      </a>

      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="sr-only">{menuOpen ? copy.accessibility.closeMenu : copy.accessibility.openMenu}</span>
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label={copy.accessibility.primaryNav}>
        <a href="#palestra" onClick={closeMenu}>{copy.nav.gym}</a>
        <a href="#corsi" onClick={closeMenu}>{copy.nav.courses}</a>
        <a href="#orari" onClick={closeMenu}>{copy.nav.hours}</a>
        <a className="button button-small" href="#contatti" onClick={closeMenu}>
          {copy.nav.contact}<ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}

export default HeaderSection
