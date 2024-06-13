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
  const [lightDividerActive, setLightDividerActive] = useState<boolean>(false);

  const toggleNavBar = (navBarState: boolean) => {
    setNavBar(navBarState)
  };
  const toggleDivider = (dividerState: boolean) => {
    setLightDividerActive(dividerState)
  };
  return (
    <main className='h-fit !scroll-smooth '>
      <NavBar navBarIsOpen={navBar} toggleNavBar={toggleNavBar} pageName="home"/>
      <span onClick={() => setNavBar(false)}>
        <HeroSection navBarIsOpen={navBar} lightDividerActive={lightDividerActive} toggleDivider={toggleDivider}/>
        <AboutMe navBarIsOpen={navBar} lightDividerActive={lightDividerActive} toggleDivider={toggleDivider}/>
        <PreviousJobs navBarIsOpen={navBar} lightDividerActive={lightDividerActive} toggleDivider={toggleDivider}/>
        <PersonalProjects navBarIsOpen={navBar} lightDividerActive={lightDividerActive} toggleDivider={toggleDivider}/>
        <PreviousClientWork navBarIsOpen={navBar}/>
        <ContactMe navBarIsOpen={navBar}/>
      </span>
    </main>
  )
}
