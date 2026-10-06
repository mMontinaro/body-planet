import { ArrowUpRight, Clock3 } from 'lucide-react'
import copy from '../locales/it.json'
import { openingHours, siteLinks } from '../data/site'
import SectionHeading from '../components/SectionHeading'

function ScheduleSection() {
  return (
    <section id="orari" className="section section-dark schedule-section">
      <div className="container schedule-layout">
        <div>
          <SectionHeading title={copy.schedule.title} description={copy.schedule.description} />
          <a className="button" href={siteLinks.whatsapp}>
            {copy.schedule.cta}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="hours-card">
          <div className="hours-card-heading">
            <Clock3 size={22} aria-hidden="true" />
            <h3>{copy.schedule.hoursTitle}</h3>
          </div>
          <dl>
            {openingHours.map(([day, hours]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
