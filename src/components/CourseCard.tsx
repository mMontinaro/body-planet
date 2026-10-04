import { ArrowUpRight } from 'lucide-react'
import type { Course } from '../data/courses'

type CourseCardProps = {
  course: Course
  name: string
  description: string
  index: number
}

function CourseCard({ course, name, description, index }: CourseCardProps) {
  return (
    <article className="course-card">
      {course.image && <img className="course-card-image" src={course.image} alt={name} />}
      <span className="course-number">{String(index + 1).padStart(2, '0')}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default CourseCard
