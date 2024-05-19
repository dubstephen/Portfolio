import React from 'react'
import './PreviousJobs.css'

const PreviousJobs = () => {
  return (
    <>
    <section id='previous-jobs' className='text-white bg-big-stone justify-center h-max md:justify-start md:text-left flex previous-jobs'>
        <div className="pl-8 pr-8 md:ml-auto md:mr-auto h-screen md:mb-64 mt-32 md:mt-64">
          <h3>
            <div className="flex items-center w-full">
              <span className="text-bismark text-xl md:text-2xl pr-2">02.</span>
              <span className="text-cadet-blue text-xl md:text-2xl">Previous Jobs</span>
              <hr className="w-24 md:w-64 h-0.5 ml-2 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
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
                <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark text-xl md:text-2xl md:ml-2 hidden md:inline">@ Cypress Mill Co.</a>
              </div>
            </div>
            <div className="text-flord text-sm ml-6">April 2020 - April 2024</div>
          </h4>
          <div className="flex justify-start items-center w-full pt-6 ml-6">
            <div className="h-24">
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-bismark text-lg md:text-xl '>
                  {'>'}<br/>
                  <br/>
                  <span className='md:hidden'>
                    <br/>
                    <br/>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-bismark text-lg md:text-xl '>
                  {'>'}<br/>
                  <br/>
                  <br/>
                  <br/>
                  <span className='md:hidden'>
                    <br/>
                    <br/>
                    <br/>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-bismark text-lg md:text-xl '>
                  {'>'}<br/>
                </p>
              </div>
            </div>
            <div className="pl-2 h-24">
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue text-lg md:text-xl '>
                  Write modern, performant, maintainable code for a diverse<br/>
                  array of client and internal projects
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue text-lg md:text-xl '>
                  Work with a variety of different languages, platforms,<br/>
                  frameworks, and content management systems such as<br/>
                  JavaScript, TypeScript, Gatsby, React, Craft, WordPress,<br/>
                  Prismic, and Netify
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 md:pb-12 hero-description text-cadet-blue text-lg md:text-xl '>
                  Communicate with multi-disciplinary teams of engineers,<br/>
                  designers, producers, and clients on a daily basis
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <LORModal />
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default PreviousJobs