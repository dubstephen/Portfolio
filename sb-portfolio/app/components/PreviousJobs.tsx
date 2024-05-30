// @ts-nocheck
'use client';
import React, { useRef, useState } from 'react'
import './PreviousJobs.css'
import LORModal from './LORModal'
import { useIsVisible } from '../helpers';

interface Props {
  navBarIsOpen: boolean;
}

const PreviousJobs = (props: Props) => {
  const { navBarIsOpen } = props;
  const [showSection, setShowSection] = useState<boolean>(false);
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  if (isVisible && !showSection) {
    setShowSection(true);
  }
  return (
    <>
    <section id='previous-jobs' className='text-white bg-big-stone flex md:columns-3'>
      <div className='hidden md:flex md:col-span-1 md:w-2/5 '/>
      <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} flex items-center justify-center md:col-span-2 pl-8 pr-8  previous-jobs mb-32 transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
        <div>
          <h3>
            <div className="flex items-center w-full">
              <span className="text-bismark text-md sm:text-xl md:text-3xl pr-2">02.</span>
              <span className="text-cadet-blue text-md sm:text-xl md:text-3xl">Previous Jobs</span>
              <hr className="w-[50%] md:w-[13%] h-0.5 ml-2 my-4 bg-blue-Dianne border-0 rounded md:my-10" />
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
                <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark text-xl md:text-2xl ml-4">@ Cypress Mill Co.</a>
              </div>
            </div>
            <div id='desktop-job-title' className="hidden md:flex items-center w-full">
              <div className="h-[40px] bg-bismark w-[2px] "></div>
              <div className="flex items-center justify-start w-full">
                <span className="text-cadet-blue text-xl md:text-2xl ml-6">Software Engineer</span>
                <span className="text-bismark text-xl md:text-2xl md:ml-2 hidden md:inline">@</span>
                <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark text-xl md:text-2xl md:ml-2 hidden md:inline hover:underline"> Cypress Mill Co.</a>
              </div>
            </div>
            <div className="text-flord text-sm ml-6">April 2020 - April 2024</div>
          </h4>
          <div ref={ref} className="flex justify-start items-center w-full pt-6 md:ml-6 md:w-1/2 ">
            <div className="h-24">
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 text-bismark text-lg md:text-xl '>
                  {'>'}
                  <br className='min-[491px]:hidden min-[768px]:inline'/>
                  <br className='min-[1512px]:hidden' />
                  <br className='min-[390px]:hidden'/>
                  <br className=''/>
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 text-bismark text-lg md:text-xl '>
                  {'>'}
                  <br className='' />
                  <br className='min-[1643px]:hidden'/>
                  <br className='min-[412px]:hidden min-[768px]:inline'/>
                  <br className='min-[1179px]:hidden'/>
                  <br className='min-[360px]:hidden'/>
                  <br className='min-[716px]:hidden min-[768px]:inline'/>
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 text-bismark text-lg md:text-xl '>
                  {'>'}<br/>
                </p>
              </div>
            </div>
            <div className="pl-2 h-24">
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 text-cadet-blue text-lg md:text-xl '>
                  Wrote modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 text-cadet-blue text-lg md:text-xl '>
                  Worked with a variety of different languages, platforms, and 
                  frameworks such as JavaScript, TypeScript, React,
                  Django, Python, .NET, and more!
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 md:pb-12 text-cadet-blue text-lg md:text-xl '>
                  Communicated with multi-disciplinary teams of engineers
                  and clients on a daily basis
                </p>
              </div>
              <div className="flex items-center justify-center">
                <LORModal />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='md:flex md:col-span-3'/> */}
    </section>
    </>
  )
}

export default PreviousJobs