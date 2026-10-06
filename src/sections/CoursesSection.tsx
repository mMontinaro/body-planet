import copy from '../locales/it.json'
import { courses } from '../data/courses'
import { getLocalizedString } from '../utils/localization'
import CourseCard from '../components/CourseCard'
import SectionHeading from '../components/SectionHeading'

function CoursesSection() {
  return (
    <section id="corsi" className="section section-tint">
      <div className="container">
        <SectionHeading title={copy.courses.title} description={copy.courses.description} />
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              name={getLocalizedString(course.nameKey)}
              description={getLocalizedString(course.descriptionKey)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
