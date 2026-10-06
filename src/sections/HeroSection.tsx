import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import copy from '../locales/it.json'
import { siteLinks } from '../data/site'
import { siteMedia } from '../data/media'
import { heroSlides } from '../data/heroSlides'
import HeroCarousel from '../components/HeroCarousel'
import SocialLinks from '../components/SocialLinks'
import { BsTelephone } from 'react-icons/bs'

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-visual">
          <HeroCarousel
            slides={heroSlides}
            logo={siteMedia.logo}
            logoAlt={copy.brand.logoAlt}
            logoLabel={copy.hero.visualLabel}
          />
        </div>

        <div className="hero-description-banner">
          <div className="hero-copy">
            <p>{copy.hero.description}</p>
          </div>

          <div className="hero-actions-panel">
            <div className="hero-actions">
              <a className="button" href="#corsi">
                {copy.hero.secondaryCta}<ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <SocialLinks className="social-links-hero" links={siteLinks.social} labels={copy.social} />

            <a className="text-link hero-contact-link" href={siteLinks.whatsapp}>
              <BsTelephone aria-hidden="true" size={17} />{copy.hero.primaryCta}<MoveUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
