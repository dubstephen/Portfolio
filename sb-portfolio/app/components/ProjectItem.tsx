'use project';
import { useState } from "react";
import Image from "next/image";

interface Props {
  project: PersonalProject;
  showMore: boolean;
}

const ProjectItem = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { project, showMore } = props;
  const idIsEven = parseInt(project.id) % 2 === 0;
  return (
    <>
    <div id={`mobile-project-${project.id}`} className="md:hidden">
      <li className={`${showMore ? '' : 'hidden md:flex'} flex flex-col md:justify-between card shadow-xl col-span-1 md:h-80 w-full max-w-md bg-blue-Zodiac hover:bg-base-200`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
        <div className="relative px-6 py-4">
          { hovered ?
            <a href={project.link}><h2 className="font-bold text-xl card-title text-bismark text-center">{project.title}</h2></a>
          :
          <a href={project.link}><h2 className="font-bold text-xl card-title text-gray-200 text-center">{project.title}</h2></a>
          }
        </div>
        <div className="px-6 pt-4 pb-6 text-start">
            <p className='text-cadet-blue text-base'>{project.description}</p>
        </div>
        { project.link &&
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-bismark hover:underline ml-6 w-24">Learn More</a>
        }
        <div id={'project-card-'+project.id} className="px-6 py-4 align-bottom pt-auto mb-0">
          { project.technologies.map((tech, index) => {
            return (
              <span key={'project-'+project.id+'-tech-'+index} className="inline-block bg-black-pearl rounded-full px-3 py-1 text-sm font-semibold text-cadet-blue mr-2 mb-2">#{tech}</span>
            )
          })}
        </div>
      </li>
    </div>
    <div id={`desktop-project-${project.id}`} className="hidden md:flex columns-2 pb-20">
      { idIsEven ? 
      <>
        <div className="w-fit max-w-[40rem] text-left">
          <h3 className="text-xl py-4"><a href={project.link}>{project.title}</a></h3>
          <p className="bg-blue-Zodiac h-fit col-span-2 p-8">{project.description}</p>
          <div id={'project-card-'+project.id} className="px-6 py-4 align-bottom pt-auto mb-0">
            { project.technologies.map((tech, index) => {
              return (
                <span key={'project-'+project.id+'-tech-'+index} className="inline-block bg-black-pearl rounded-full px-3 py-1 text-sm font-semibold text-cadet-blue mr-2 mb-2">{tech}</span>
              )
            })}
          </div>
        </div>
        <div className="w-1/2 col-span-1 inline">
          <Image className="opacity-80" src={project.imageSRC} width={600} height={600} alt="logo" />
        </div>
      </>
      :
      <>
        <div className="w-1/2 col-span-1 inline">
          <Image className="opacity-80" src={project.imageSRC} width={600} height={600} alt="logo" />
        </div>
        <div className="w-fit max-w-[40rem] text-right">
          <h3 className="text-xl py-4"><a href={project.link}>{project.title}</a></h3>
          <p className="bg-blue-Zodiac h-fit col-span-2 p-8">{project.description}</p>
          <div id={'project-card-'+project.id} className="px-6 py-4 align-bottom pt-auto mb-0">
            { project.technologies.map((tech, index) => {
              return (
                <span key={'project-'+project.id+'-tech-'+index} className="inline-block bg-black-pearl rounded-full px-3 py-1 text-sm font-semibold text-cadet-blue mr-2 mb-2">{tech}</span>
              )
            })}
          </div>
        </div>
      </>
      }
    </div>
    </>
  );
}

export default ProjectItem