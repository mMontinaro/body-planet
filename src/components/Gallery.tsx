import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type GalleryImage = {
  id: string
  src: string
  alt: string
}

type GalleryProps = {
  images: GalleryImage[]
  previousLabel: string
  nextLabel: string
  positionLabel: string
}

function Gallery({ images, previousLabel, nextLabel, positionLabel }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length)

  return (
    <div className="gallery-carousel" aria-roledescription="carousel">
      <figure className="gallery-slide">
        <img src={activeImage.src} alt={activeImage.alt} />
      </figure>
      <div className="gallery-controls">
        <button className="gallery-control" type="button" onClick={showPrevious} aria-label={previousLabel}>
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <span className="gallery-position" aria-live="polite">{positionLabel} {activeIndex + 1} / {images.length}</span>
        <button className="gallery-control" type="button" onClick={showNext} aria-label={nextLabel}>
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default Gallery
