'use client';
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import PreviousJobs from './components/PreviousJobs'
import PersonalProjects from './components/PersonalProjects'
import PreviousClientWork from './components/PreviousClientWork'
import ContactMe from './components/ContactMe'
import NavBar from './components/NavBar'
import { useState } from 'react'

export default function Home() {
  const [navBar, setNavBar] = useState<boolean>(false);

  const toggleNavBar = (navBarState: boolean) => {
    setNavBar(navBarState)
  };
  return (
    <main className='h-fit !scroll-smooth '>
      <NavBar navBarIsOpen={navBar} toggleNavBar={toggleNavBar} />
      <span onClick={() => setNavBar(false)}>
        <HeroSection navBarIsOpen={navBar}/>
        <AboutMe navBarIsOpen={navBar}/>
        <PreviousJobs navBarIsOpen={navBar}/>
        {/* <PersonalProjects navBarIsOpen={navBar}/> */}
        <PreviousClientWork navBarIsOpen={navBar}/>
        <ContactMe navBarIsOpen={navBar}/>
      </span>
    </main>
  )
}
