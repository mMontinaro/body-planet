import copy from './locales/it.json'
import { siteMedia } from './data/media'
import IntroOverlay from './components/IntroOverlay'
import HeaderSection from './sections/HeaderSection'
import HeroSection from './sections/HeroSection'
import GymSection from './sections/GymSection'
import CoursesSection from './sections/CoursesSection'
import ScheduleSection from './sections/ScheduleSection'
import DocumentsSection from './sections/DocumentsSection'
import GallerySection from './sections/GallerySection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

function App() {
  return (
    <div className="site-shell">
      <IntroOverlay logo={siteMedia.logo} label={copy.intro.loading} />
      <HeaderSection />

      <main id="top">
        <HeroSection />
        <GymSection />
        <CoursesSection />
        <ScheduleSection />
        <DocumentsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default App
