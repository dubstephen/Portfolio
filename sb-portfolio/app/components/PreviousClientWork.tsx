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
    title: 'International Composting Facilities',
    description: 'Developed and implemented many new features while strategizing \
    with a small team of engineers. Together, we built systems used across the globe to \
    automate and maintain piles of compost.',
    link: 'https://cypressmill.co/project-showcase/green-mountain-technologies/',
    technologies: ['Controllers', 'React', 'Lua', 'JS', 'IoT'],
  },
  {
    id: '2',
    title: 'Rapid Emergency Notification Tool',
    description: 'Collaborated with engineers to develop a rapid emergency notification tool to be \
    utilized by schools. I implemented multiple features on this tool including geo-fencing and positioning.',
    link: 'https://cypressmill.co/project-showcase/nside/',
    technologies: ['Xamarin', 'C#'],
  },
]
const clientCardRow2: ClientCard[] = [
  {
    id: '3',
    title: 'Case Management Platform',
    description: 'Built out new features for an online case management tool used for reducing waste \
    and helping organizations accurately allocate their funds to those in need.',
    link: 'https://cypressmill.co/project-showcase/simon-solutions/',
    technologies: ['Django', 'Python', 'Python Templates'],
  },
  {
    id: '4',
    title: 'Luxury Coach Management Tool',
    description: "Helped build and maintain a tool designed for managing fleets of luxury coaches to be leased out for top touring musicians.\
    I added code that would calculate pricing based on a number of factors such as hourly rates for drivers, how many stops, which cities, etc.",
    link: 'https://cypressmill.co/project-showcase/senators-coaches/',
    technologies: ['Python', 'React', 'JS'],
  },
  {
    id: '5',
    title: 'Workorder System',
    description: "Created a client's workorder system from the ground up alongside my team lead and our in house designer. \
    The system needed to seamlessly transision the client away from their existing system while maintaining Quickbooks integration",
    technologies: ['React', 'TS', 'Ionic', 'Django', 'Python'],
  },
  {
    id: '6',
    title: 'Horse Managing Application',
    description: 'Implemented many features such as event scheduling, user logins, API endpoints, file uploads, and more.',
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
  const scrollTo = showMore ? '#client-card-2' : '#client-card-1';
  return (
    <>
      <section id='previous-client-work' className='text-white bg-big-stone flex previous-client-work'>
        <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} ml-8 mr-8 md:mb-32 mt-16 md:mt-0 md:pt-32 transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
          <h3>
            <div className="flex w-full ml-auto items-center justify-center">
              <span className="text-cadet-blue text-2xl">Work I've Done</span>
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