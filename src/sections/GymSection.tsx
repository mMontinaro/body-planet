import { Dumbbell } from 'lucide-react'
import copy from '../locales/it.json'
import SectionHeading from '../components/SectionHeading'

function GymSection() {
  return (
    <section id="palestra" className="section section-overlap">
      <div className="container split-layout">
        <div className="visual-panel">
          <div className="visual-panel-label">{copy.brand.name}<span>01 / 04</span></div>
          <div className="visual-ring" aria-hidden="true"><Dumbbell size={48} /></div>
          <span className="vertical-word">TRAINING</span>
        </div>

        <div className="section-content mobile-description-banner">
            <SectionHeading title={copy.gym.title} description={copy.gym.description} />
        </div>
      </div>
    </section>
  )
}

export default GymSection
