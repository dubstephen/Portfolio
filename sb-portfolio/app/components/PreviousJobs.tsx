// @ts-nocheck
'use client';
import React, { useRef, useState } from 'react'
import './PreviousJobs.css'
import LORModal from './LORModal'
import { useIsVisible } from '../helpers';

interface Props {
  navBarIsOpen: boolean;
  lightDividerActive: boolean;
  toggleDivider: Function;
}

const PreviousJobs = (props: Props) => {
  const { navBarIsOpen, lightDividerActive, toggleDivider } = props;
  const [showSection, setShowSection] = useState<boolean>(false);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  if (isVisible && !showSection) {
    setShowSection(true);
  }
  return (
    <>
    <section id='previous-jobs' className='text-white bg-big-stone flex md:columns-3'>
      <div className='hidden md:flex md:col-span-1 md:w-2/5 pr-32'/>
      <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} flex justify-center md:col-span-2 pl-8 pr-8 previous-jobs mb-32 pt-16 md:pt-28 transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
        <div>
          <h3 >
            <div className="flex items-center w-full mb-2">
              <span className="text-bismark text-2xl sm:text-xl md:text-3xl pr-2">02.</span>
              <span className="text-cadet-blue text-2xl sm:text-xl md:text-3xl">Employment</span>
              <hr className={`${
                  lightDividerActive ?
                  'transition-all duration-500 border-bismark rounded-xl border-l-1.5' :
                  'transition-all duration-500 border-blue-Dianne h-0.5'
                } w-[50%] md:w-[28%] h-0.5 ml-2 my-4 rounded md:my-10 cursor-pointer`}
                onClick={() => toggleDivider(!lightDividerActive)} />
            </div>
          </h3>
          <h4>
            <div id='mobile-job-title' className="flex md:hidden items-center w-full">
              <div className='flex-col'>
                <div className="h-[56px] bg-bismark w-[2px] "></div>
              </div>
              <div className='flex-col'>
                <div className="flex items-center justify-start w-full">
                  <span className="text-cadet-blue text-xl md:text-2xl ml-4">Software Engineer</span>
                </div>
                <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark underline text-xl md:text-2xl ml-4">@ Cypress Mill Co.</a>
              </div>
            </div>
            <div id='desktop-job-title' className="hidden md:flex items-center w-full">
              <div className="h-[40px] bg-bismark w-[2px] "></div>
              <div className="flex items-center justify-start w-full">
                <span className="text-cadet-blue text-xl md:text-2xl ml-6">Software Engineer</span>
                <span className="text-bismark text-xl md:text-2xl md:ml-2 hidden md:inline">@</span>
                <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark text-xl md:text-2xl md:ml-2 hidden md:inline underline"> Cypress Mill Co.</a>
              </div>
            </div>
            <div className="text-flord text-sm ml-6">April 2020 - April 2024</div>
          </h4>
          <div ref={ref} className="flex justify-start items-center w-full pt-6 md:ml-6 md:w-1/2 ">
            <ul className="pl-2 h-24 job-resp">
              <li className="items-center justify-start w-full before:top-11 md:before:top-5">
                <p className='pt-8 md:p-2 text-cadet-blue text-lg md:text-xl '>
                  Wrote modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </p>
              </li>
              <li className="items-center justify-start w-full before:top-11 md:before:top-5">
                <p className='pt-8 md:p-2 text-cadet-blue text-lg md:text-xl '>
                  Worked with a variety of different languages, platforms, and 
                  frameworks such as JavaScript, TypeScript, React,
                  Django, Python, and more!
                </p>
              </li>
              <li className="items-center justify-start w-full before:top-11 md:before:top-5">
                <p className='pt-8 md:p-2 md:pb-12 text-cadet-blue text-lg md:text-xl '>
                  Communicated with multi-disciplinary teams of engineers
                  and clients on a daily basis
                </p>
              </li>
              <div className="flex items-center justify-center 2xl:mr-36">
                <LORModal />
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='md:flex md:col-span-3'/> */}
    </section>
    </>
  )
}

export default PreviousJobs