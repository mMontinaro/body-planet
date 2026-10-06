import { Download } from 'lucide-react'
import copy from '../locales/it.json'
import { siteMedia } from '../data/media'

function DocumentsSection() {
  return (
    <section className="hero-media-section">
      <img className="hero-media" src={siteMedia.heroImage} alt={copy.heroImage.alt} />
      <div className="container hero-documents">
        <a className="document-download" href="/documents/attivita.pdf" download>
          <Download size={17} aria-hidden="true" />{copy.documents.activities}
        </a>
        <a className="document-download" href="/documents/codice_di_condotta.pdf" download>
          <Download size={17} aria-hidden="true" />{copy.documents.codeOfConduct}
        </a>
        <a className="document-download" href="/documents/MOG.pdf" download>
          <Download size={17} aria-hidden="true" />{copy.documents.mog}
        </a>
      </div>
    </section>
  )
}

export default DocumentsSection
