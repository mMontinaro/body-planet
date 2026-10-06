import { useEffect, useState } from 'react'

type HeroSlide = {
  id: string
  src: string
  alt: string
  objectPosition?: string
}

type HeroCarouselProps = {
  slides: readonly HeroSlide[]
  logo: string
  logoAlt: string
  logoLabel: string
}

type VisibleSlides = {
  left: number
  right: number
  entering: number
}

const slideDuration = 6000
const transitionDuration = 800

function HeroCarousel({ slides, logo, logoAlt, logoLabel }: HeroCarouselProps) {
  const [visibleSlides, setVisibleSlides] = useState<VisibleSlides>({ left: 0, right: 1, entering: 2 })
  const [isAnimating, setIsAnimating] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches)
    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (reducedMotion || slides.length < 3) return

    const interval = window.setInterval(() => {
      setIsAnimating(true)
      window.setTimeout(() => {
        setVisibleSlides(({ left, entering }) => ({
          left: entering,
          right: left,
          entering: (entering + 1) % slides.length,
        }))
        setIsAnimating(false)
      }, transitionDuration)
    }, slideDuration)
    return () => window.clearInterval(interval)
  }, [reducedMotion, slides.length])

  const carouselSlides = [
    slides[visibleSlides.entering],
    slides[visibleSlides.left],
    slides[visibleSlides.right],
  ]

  return (
    <div className="hero-carousel" aria-label={logoLabel}>
      <div className={`hero-carousel-track${isAnimating ? ' is-animating' : ''}`}>
        {carouselSlides.map((slide, index) => {
          const isInitial = slide.id === slides[0].id || slide.id === slides[1].id
          return <img key={`${slide.id}-${index}`} className="hero-carousel-image" src={slide.src} alt={slide.alt} loading={isInitial ? 'eager' : 'lazy'} fetchPriority={isInitial ? 'high' : 'auto'} style={{ objectPosition: slide.objectPosition }} />
        })}
      </div>
      <div className="hero-wave"><img src={logo} alt={logoAlt} /></div>
    </div>
  )
}

export default HeroCarousel
