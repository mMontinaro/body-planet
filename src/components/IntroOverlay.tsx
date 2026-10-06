import { useEffect, useState } from 'react'

type IntroOverlayProps = {
  logo: string
  label: string
}

function IntroOverlay({ logo, label }: IntroOverlayProps) {
  const [isExiting, setIsExiting] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const exitTimer = window.setTimeout(() => setIsExiting(true), reducedMotion ? 0 : 1575)
    const removeTimer = window.setTimeout(() => setIsVisible(false), reducedMotion ? 60 : 2200)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`intro-overlay${isExiting ? ' is-exiting' : ''}`}
      aria-label={label}
      role="status"
    >
      <div className="intro-mark">
        <img src={logo} alt="" aria-hidden="true" />
        <svg className="intro-ring" viewBox="0 0 220 220" aria-hidden="true">
          <circle className="intro-ring-track" cx="110" cy="110" r="96" />
          <circle className="intro-ring-progress" cx="110" cy="110" r="96" />
        </svg>
      </div>
    </div>
  )
}

export default IntroOverlay
