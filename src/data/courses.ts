export type CourseGroup = 'fitness' | 'cardio' | 'wellness' | 'martialArts'

export type Course = {
  id: string
  nameKey: string
  descriptionKey: string
  image?: string
}

export const courses: Course[] = [
  { id: 'cross-training', nameKey: 'courses.crossTraining.name', descriptionKey: 'courses.crossTraining.description'},
  { id: 'fit-boxe', nameKey: 'courses.fitBoxe.name', descriptionKey: 'courses.fitBoxe.description'},
  { id: 'functional-training', nameKey: 'courses.functionalTraining.name', descriptionKey: 'courses.functionalTraining.description'},
  { id: 'ginnastica-posturale', nameKey: 'courses.postural.name', descriptionKey: 'courses.postural.description'},
  { id: 'pilates', nameKey: 'courses.pilates.name', descriptionKey: 'courses.pilates.description'},
  { id: 'fit-ball-gym', nameKey: 'courses.fitBall.name', descriptionKey: 'courses.fitBall.description'},
  { id: 'full-body-workout', nameKey: 'courses.fullBodyWorkout.name', descriptionKey: 'courses.fullBodyWorkout.description'},
  { id: 'karate', nameKey: 'courses.karate.name', descriptionKey: 'courses.karate.description'},
  { id: 'female-training', nameKey: 'courses.femaleTraining.name', descriptionKey: 'courses.femaleTraining.description'},
  { id: 'kickboxing', nameKey: 'courses.kickboxing.name', descriptionKey: 'courses.kickboxing.description'},
  { id: 'indoor-cycling', nameKey: 'courses.indoorCycling.name', descriptionKey: 'courses.indoorCycling.description'},
  { id: 'jeet-kune-do', nameKey: 'courses.jeetKuneDo.name', descriptionKey: 'courses.jeetKuneDo.description'},
]
