'use client';
import React from 'react';
import './HeroSection.css';

interface Props {
  navBarIsOpen: boolean;
}

const HeroSection = (props: Props) => {
  const { navBarIsOpen } = props;
  const HandleResumeDownload = () => {
    fetch("/Stephen Bloodworth Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Stephen Bloodworth Resume.pdf";
        a.click();
      });
    });
  };

  return (
    <>
      <section id='hero' className=' text-white bg-gradient-to-b from-black-pearl to-big-stone flex text-center md:text-left'>
        <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} ml-auto mr-auto md:mb-0 mt-16 md:mt-32 hero-container`}>
          <span className='md:hidden p-2 introduction text-bismark text-base md:text-base font-mono animate-fadeIn1 overflow-hidden inline-block whitespace-nowrap'>Hello!<br/> my name is</span>
          <span className='hidden md:inline-block p-2 introduction text-bismark text-base md:text-base font-mono animate-typing overflow-hidden whitespace-nowrap'>Hi, my name is</span>
          <h1 className='p-2 md:mt-4 name text-cadet-blue text-4xl md:text-7xl font-bold font-sans animate-fadeIn2'>Stephen <br className='md:hidden'/>Bloodworth.</h1>
          <h2 className='p-2 md:mt-4 what-i-do text-flord text-4xl md:text-7xl font-bold font-sans animate-fadeIn3'>I build software.</h2>
          <span id='modile-hero-details' className='md:hidden'>
            <p className='ml-auto mr-auto w-80 md:w-full pt-4 md:mt-4 md:p-2 leading-9 text-flord text-lg md:text-xl font-sans animate-fadeIn3'>
              I am <br/>an engineer <br/>specializing in building <br/>highly performant
              applications <br/>that provide users with an
              awesome 
            </p>
            <div className="relative flex items-center pt-2">
              <div className="animate-borderXFadeIn left-0 top-0 h-0 border-t-1 border-blue-Dianne"/>
              <a href='#about' className="animate-fadeIn4 flex-shrink mx-4 text-bismark text-sm font-bold tracking-widest">EXPERIENCE</a>
              <div className="animate-borderXFadeIn bottom-0 right-0 h-0 w-0 border-b-1 ml-auto border-blue-Dianne"/>
            </div>
          </span>
          <span id='desktop-hero-details' className='hidden md:inline'>
            <p className='ml-auto mr-auto w-80 md:w-full pt-8 md:mt-4 md:p-2 text-flord text-lg md:text-xl font-sans animate-typing2 overflow-hidden inline-block whitespace-nowrap'>
              I am <br/>an engineer <br/>specializing in building <br/>highly performant
              applications that <br/>provide users with an
              awesome experience.
            </p>
            <div className="relative flex items-center ">
              <span className="animate-borderYFadeIn1 absolute left-0 bottom-0 h-0 w-0 border-l-1 border-blue-Dianne" />
              <span className="xl:animate-borderYFadeIn2 absolute right-64 xl:right-[19rem] top-0 h-0 w-0 border-r-1 border-blue-Dianne " />
              <div className="animate-borderXFadeIn1 left-0 top-0 h-0 border-t-1 border-blue-Dianne" />
            </div>
          </span>
          <button
            className='group relative animate-buttonFadeIn mt-10 md:mt-8 p-4 w-50 text-bismark bg-opacity-0 hover:transition-all duration-75 hover:-translate-y-1 hover:-translate-x-1 ease-in rounded-md text-lg md:text-xl lor-button'
            onClick={() => HandleResumeDownload()}
          >
            <span className="animate-buttonXFadeIn absolute left-0 top-0 h-0 border-t-1 border-bismark " />
            <span className="animate-buttonYFadeIn absolute right-0 top-0 h-0 w-0 border-r-1 border-bismark " />
            <span className="animate-buttonXFadeIn absolute bottom-0 right-0 h-0 w-0 border-b-1 border-bismark " />
            <span className="animate-buttonYFadeIn absolute bottom-0 left-0 h-0 w-0 border-l-1 border-bismark " />
            Download Resume
          </button>
        </div>
      </section>
    </>
  )
}

export default HeroSection