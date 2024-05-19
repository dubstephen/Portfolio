import React from 'react'
import './PreviousClientWork.css'
import ClientCard from './ClientCard'

const PreviousClientWork = () => {
  const clientCardRow1: ClientCard[] = [
    {
      title: 'International Composting Facilities',
      description: 'Strategized with a small team of engineers to build software used for monitoring and automating various processes revolving around composting while adhering to environmental regulations.',
      technologies: ['Lua', 'React', 'JS', 'I/O controllers']
    },
    {
      title: 'Rapid emergency notification tool',
      description: 'Collaborated with engineers to develop a rapid emergency notification tool to be utilized by schools. This tool uses geo-positioning to equip all staff to initiate an urgent response to any emergency.',
      technologies: ['Xamarin', 'C#']
    },
    {
      title: 'Case Management Platform',
      description: 'Built out new features for an online case management tool used for reducing waste and helping organizations accurately allocate their funds to those in need.',
      technologies: ['Django', 'Python', 'Python Templates']
    },
  ]
  const clientCardRow2: ClientCard[] = [
    {
      title: 'International Composting Facilities',
      description: 'Strategized with a small team of engineers to build software used for monitoring and automating various processes revolving around composting while adhering to environmental regulations.',
      technologies: ['Lua', 'React.js', 'bootstrap', 'I/O controllers']
    },
    {
      title: 'Workorder System',
      description: 'A client presented the need for a modernized work order system that would automate system processes with QuickBooks. Using the following technologies, we saw the completion of this system from start to finish.',
      technologies: ['React', 'TS', 'Ionic', 'Django', 'Python']
    },
    {
      title: 'Rapid emergency notification tool',
      description: 'Collaborated with engineers to develop a rapid emergency notification tool to be utilized by schools. This tool uses geo-positioning to equip all staff to initiate an urgent response to any emergency.',
      technologies: ['Xamarin', 'C#']
    },
  ]
  return (
    <>
      <section id='previous-client-work' className='text-white bg-big-stone flex previous-client-work'>
        <div className="ml-8 mr-8 md:mb-64 mt-32 md:mt-64">
          <h3>
            <div className="flex w-full ml-auto items-center justify-center">
              <span className="text-cadet-blue text-2xl">Previous Client Work</span>
            </div>
          </h3>
            <ul className="flex flex-row items-center justify-center gap-4 pt-8 md:pt-16 md:ml-auto flex-wrap">
              {clientCardRow1.map((client: ClientCard) => (
                    <ClientCard client={client} />
              ))}
              {clientCardRow2.map((client: ClientCard) => (
                    <ClientCard client={client} />
              ))}
            </ul>
        </div>
      </section>
    </>
  )
}

export default PreviousClientWork