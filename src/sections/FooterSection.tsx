import { MoveUpRight } from 'lucide-react'
import copy from '../locales/it.json'
import { siteLinks } from '../data/site'
import { siteMedia } from '../data/media'
import SocialLinks from '../components/SocialLinks'

function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a className="brand brand-footer" href="#top">
          <img className="brand-mark brand-mark-logo" src={siteMedia.logo} alt="" aria-hidden="true" />
          <span>{copy.brand.name}<small>{copy.brand.location}</small></span>
        </a>

        <div className="footer-actions">
          <a className="text-link" href={siteLinks.maps}>
            {copy.contact.directions}<MoveUpRight size={17} aria-hidden="true" />
          </a>
          <SocialLinks links={siteLinks.social} labels={copy.social} />
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{copy.footer.legal}</span>
        <span>{copy.footer.vat}</span>
        <span>{copy.footer.copyright}</span>
      </div>
    </footer>
  )
}

export default FooterSection
