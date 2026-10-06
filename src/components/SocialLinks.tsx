import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

type SocialLinksProps = {
  links: {
    facebook: string
    instagram: string
  }
  labels: {
    title: string
    facebook: string
    instagram: string
  }
  className?: string
}

function SocialLinks({ links, labels, className = '' }: SocialLinksProps) {
  return (
    <nav className={`social-links ${className}`.trim()} aria-label={labels.title}>
      <a className="social-link" href={links.instagram} target="_blank" rel="noreferrer" aria-label={labels.instagram}>
        <FaInstagram aria-hidden="true" />
        <span>{labels.instagram}</span>
      </a>
      <a className="social-link" href={links.facebook} target="_blank" rel="noreferrer" aria-label={labels.facebook}>
        <FaFacebookF aria-hidden="true" />
        <span>{labels.facebook}</span>
      </a>
    </nav>
  )
}

export default SocialLinks
