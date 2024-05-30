// @ts-nocheck
'use client';
import React, { useRef, useState } from 'react'
import './PreviousClientWork.css'
import ClientCard from './ClientCard'
import { useIsVisible } from '../helpers'

interface Props {
  navBarIsOpen: boolean;
}

const clientCardRow1: ClientCard[] = [
  {
    id: '1',
    title: 'Case Management Platform',
    description: 'Built out new features for an online case management tool used for reducing waste \
    and helping organizations accurately allocate their funds to those in need.',
    link: 'https://cypressmill.co/project-showcase/simon-solutions/',
    technologies: ['Django', 'Python', 'Python Templates'],
  },
  {
    id: '2',
    title: 'Rapid Emergency Notification Tool',
    description: 'Collaborated with engineers to develop a rapid emergency notification tool to be \
    utilized by schools. This tool uses geo-positioning to equip all staff to initiate an urgent \
    response to any emergency.',
    link: 'https://cypressmill.co/project-showcase/nside/',
    technologies: ['Xamarin', 'C#'],
  },
  {
    id: '3',
    title: 'International Composting Facilities',
    description: 'Strategized with a small team of engineers to build software used for monitoring \
    and automating various processes revolving around composting while adhering to environmental regulations.',
    link: 'https://cypressmill.co/project-showcase/green-mountain-technologies/',
    technologies: ['Controllers', 'React', 'Lua', 'JS', 'IoT'],
  },
]
const clientCardRow2: ClientCard[] = [
  {
    id: '4',
    title: 'Luxury Coach Management Tool',
    description: "Worked on and maintained a tool designed for managing fleets of luxury coaches to be leased out for top touring musicians.\
    This tool also calculates pricing based on multiple factors including the selected driver's hourly rate and which cities the musician is visiting.",
    link: 'https://cypressmill.co/project-showcase/senators-coaches/',
    technologies: ['Python', 'React', 'JS'],
  },
  {
    id: '5',
    title: 'Workorder System',
    description: 'A modernized work order system that automates \
    processes with QuickBooks. Using the following technologies, my team and I saw the completion of \
    this project from start to finish.',
    technologies: ['React', 'TS', 'Ionic', 'Django', 'Python'],
  },
  {
    id: '6',
    title: 'Horse Managing Application',
    description: 'An application for managing horses. This app keeps track of the horse, maintenance records, stables, and more.',
    technologies: ['React', 'TS', 'Ionic', 'Django', 'Python'],
  }
]

const PreviousClientWork = (props: Props) => {
  const { navBarIsOpen } = props;
  const [showSection, setShowSection] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  if (isVisible && !showSection) {
    setShowSection(true);
  }
  const showText = showMore ? 'Show Less' : 'Show More';
  const scrollTo = showMore ? '#client-card-3' : '#client-card-2';
  return (
    <>
      <section id='previous-client-work' className='text-white bg-big-stone flex previous-client-work'>
        <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} ml-8 mr-8 md:mb-32 mt-32 md:mt-0 md:pt-32 transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
          <h3>
            <div className="flex w-full ml-auto items-center justify-center">
              <span className="text-cadet-blue text-2xl">Previous Client Work</span>
            </div>
          </h3>
          <ul ref={ref} className="flex flex-row items-center justify-center gap-4 mt-8 md:mt-16 md:ml-auto flex-wrap">
            {clientCardRow1.map((client: ClientCard) => {
              return (
                <ClientCard key={'client-card-'+client.id} client={client} showMore={true} />
              )
            })}
            {clientCardRow2.map((client: ClientCard) => {
              return (
                <ClientCard key={'client-card-'+client.id} client={client} showMore={showMore} />
              )
            })}
            <a
              href={scrollTo}
              onClick={() => setShowMore(!showMore)}
              className="md:hidden flex text-center items-center justify-center text-bismark text-xl hover:underline w-32 mt-12"
            >
              {showText}
            </a>
          </ul>
        </div>
      </section>
    </>
  )
}

export default PreviousClientWork