import React, { useRef, useState } from 'react'
import './PersonalProjects.css'
import { useIsVisible } from '../helpers';
import ProjectItem from './ProjectItem';

const ProjectList: PersonalProject[] = [
  {
    id: '1',
    title: 'Data Visualizer',
    description: "A simple tool that will apply data from a CSV to a graph of the user's choice.",
    imageSRC: "/portfolio_image.png",
    link: '/dv',
    technologies: ['Next.js', 'Tailwind', 'Django', 'Python', 'Docker', 'Heroku'],
  },
  {
    id: '2',
    title: 'My portfolio',
    description: "The page you are currently on. Before creating this portfolio I did not have \
    any experience working with Next.js. Since Next.js appears to be in high demand I took this \
    oppurtunity to learn it and apply it to a project.",
    imageSRC: "/portfolio_image.png",
    link: '/',
    technologies: ['Next.js', 'Tailwind', 'Docker', 'Heroku'],
  },
]

interface Props {
  navBarIsOpen: boolean;
  lightDividerActive: boolean;
  toggleDivider: Function;
}

const PersonalProjects = (props: Props) => {
  const { navBarIsOpen, lightDividerActive, toggleDivider } = props;
  const [showSection, setShowSection] = useState<boolean>(false);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  if (isVisible && !showSection) {
    setShowSection(true);
  }
  return (
    <>
      <section id='personal-projects' className='text-white bg-big-stone justify-center  personal-projects'>
        <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} ml-8 mr-8 md:mb-0 mt-36 md:mt-32`}>
          <h3>
            <div className={`flex items-center w-full transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
              <span className="text-bismark text-2xl sm:text-xl md:text-3xl pr-2 font-mono">01.</span>
              <div className={`transition-opacity  ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
                <span className="text-cadet-blue text-2xl sm:text-xl md:text-3xl font-sans">Personal Projects</span>
              </div>
              <hr className={`${
                  lightDividerActive ?
                  'transition-all duration-500 border-bismark rounded-xl border-l-1.5' :
                  'transition-all duration-500 border-blue-Dianne h-0.5'
                } w-[43%] md:w-[31%] h-0.5 ml-2 my-4 rounded md:my-10`}
                  onClick={() => toggleDivider(!lightDividerActive)}
              />
            </div>
          </h3>
          <ul ref={ref} className="flex flex-row items-center justify-center gap-4 mt-8 md:mt-16 md:ml-auto flex-wrap">
            {ProjectList.map((project: PersonalProject) => {
              return (
                <ProjectItem key={'project-card-'+project.id} project={project} showMore={true} />
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default PersonalProjects