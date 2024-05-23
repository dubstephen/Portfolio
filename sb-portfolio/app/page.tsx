import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import PreviousJobs from './components/PreviousJobs'
import PersonalProjects from './components/PersonalProjects'
import PreviousClientWork from './components/PreviousClientWork'
import ContactMe from './components/ContactMe'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main className='h-fit !scroll-smooth'>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <PreviousJobs />
      {/* <PersonalProjects /> */}
      <PreviousClientWork />
      <ContactMe />
    </main>
  )
}