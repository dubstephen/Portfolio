'use client';
import React from 'react';
import './HeroSection.css';
import { Button } from '@nextui-org/button';

const HeroSection = () => {
  const HandleResumeDownload = () => {
    fetch("/Stephen Bloodworth Resume.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Stephen Bloodworth Resume.docx";
        a.click();
      });
    });
  };
  return (
    <>
      <section id='hero' className=' text-white bg-gradient-to-b from-black-pearl to-big-stone flex text-center md:text-left'>
        <div className='ml-auto mr-auto md:mb-0 mt-32 hero-container'>
          <span className='md:hidden p-2 introduction text-bismark text-base md:text-base font-mono animate-fadeIn1 overflow-hidden inline-block whitespace-nowrap'>Hello!<br/> my name is</span>
          <span className='hidden md:inline-block p-2 introduction text-bismark text-base md:text-base font-mono animate-typing overflow-hidden whitespace-nowrap'>Hi, my name is</span>
          <h1 className='p-2 md:mt-4 name text-cadet-blue text-4xl md:text-7xl font-bold font-sans animate-fadeIn1'>Stephen <br className='md:hidden'/>Bloodworth.</h1>
          <h2 className='p-2 md:mt-4 what-i-do text-flord text-4xl md:text-7xl font-bold font-sans animate-fadeIn2'>I build software.</h2>
          <span id='modile-hero-details' className='md:hidden'>
            <p className='ml-auto mr-auto w-80 md:w-full pt-8 md:mt-4 md:p-2 text-flord text-lg md:text-xl font-sans animate-fadeIn3'>
              I am <br/>an engineer <br/>specializing in building <br/>highly performant
              applications <br/>that solve real-world problems <br/>and provide users with an
              awesome 
            </p>
            <div className="relative flex items-center ">
              <div className="animate-borderXFadeIn left-0 top-0 h-0 border-t-1 border-blue-Dianne"></div>
              <span className="animate-fadeIn4 flex-shrink mx-4 text-bismark text-sm font-bold tracking-widest">EXPERIENCE</span>
              <div className="animate-borderXFadeIn bottom-0 right-0 h-0 w-0 border-b-1 ml-auto border-blue-Dianne"></div>
            </div>
          </span>
          <span id='desktop-hero-details' className='hidden md:inline'>
            <p className='ml-auto mr-auto w-80 md:w-full pt-8 md:mt-4 md:p-2 text-flord text-lg md:text-xl font-sans animate-typing2 overflow-hidden inline-block whitespace-nowrap'>
              I am an engineer <br/>specializing in building <br/>highly performant
              applications <br/>that solve real-world problems and <br/>provide users with an
              awesome experience.
            </p>
            <div className="relative flex items-center ">
              <span className="animate-borderYFadeIn1 absolute left-0 bottom-0 h-0 w-0 border-l-1 border-blue-Dianne " />
              <span className="animate-borderYFadeIn2 absolute right-64 xl:right-0 top-0 h-0 w-0 border-r-1 border-blue-Dianne " />
              <div className="animate-buttonXFadeIn left-0 top-0 h-0 border-t-1 border-blue-Dianne"></div>
              <div className="animate-buttonXFadeIn bottom-0 right-0 h-0 w-0 border-b-1 ml-auto border-blue-Dianne"></div>
            </div>
          </span>
          <button
            className='group relative animate-buttonFadeIn mt-8 p-4 w-50 text-bismark bg-opacity-0 hover:transition-all duration-75 hover:-translate-y-1 hover:-translate-x-1 ease-in rounded-md text-lg md:text-xl lor-button'
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