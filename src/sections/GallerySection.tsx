import copy from '../locales/it.json'
import { siteMedia } from '../data/media'
import { getLocalizedString } from '../utils/localization'
import Gallery from '../components/Gallery'
import SectionHeading from '../components/SectionHeading'

function GallerySection() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <SectionHeading eyebrow={copy.gallery.eyebrow} title={copy.gallery.title} description={copy.gallery.description} />
        <Gallery
          images={siteMedia.gallery.map((image) => ({ ...image, alt: getLocalizedString(image.altKey) }))}
          previousLabel={copy.gallery.previous}
          nextLabel={copy.gallery.next}
          positionLabel={copy.gallery.position}
        />
      </div>
    </section>
  )
}

export default GallerySection
