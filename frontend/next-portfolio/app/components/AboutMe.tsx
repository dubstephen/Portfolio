'use client';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import './AboutMe.css'
import TechRow from './TechRow';

const technologiesRow1: Technology[] = [
  {
    title: 'Next.js',
    imageSRC: '/next-js-seeklogo.svg',
    link: 'https://nextjs.org/',
    id: '1'
  },
  {
    title: 'TypeScript',
    imageSRC: '/typescript.svg',
    link: 'https://www.typescriptlang.org/',
    id: '2'
  },
  {
    title: 'Tailwind',
    imageSRC: '/Tailwind_CSS_Logo.svg',
    link: 'https://tailwindcss.com/',
    id: '3'
  },
]
const technologiesRow2: Technology[] = [
  {
    title: 'Django',
    imageSRC: '/djangoproject.svg',
    link: 'https://www.djangoproject.com/',
    id: '4'
  },
  {
    title: 'Python',
    imageSRC: '/python-logo-only.svg',
    link: 'https://www.python.org/',
    id: '5'
  },
  {
    title: 'Lua',
    imageSRC: '/lua-icon.svg',
    link: 'https://www.lua.org/',
    id: '6'
  },
]
const technologiesRow3: Technology[] = [
  {
    title: '.NET',
    imageSRC: '/Microsoft_.NET_logo.svg',
    link: 'https://dotnet.microsoft.com/en-us/',
    id: '7'
  },
  {
    title: 'C#',
    imageSRC: '/Logo_C_sharp.svg',
    link: 'https://dotnet.microsoft.com/en-us/languages/csharp',
    id: '8'
  },
  {
    title: 'Ionic',
    imageSRC: '/ionicframework-icon.svg',
    link: 'https://ionicframework.com/',
    id: '9'
  }
]

const AboutMeSection = () => {
  const [showSection, setShowSection] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollY > 0 && !showSection) {
    setShowSection(true);
  }
  return (
    <>
      <section className='text-white bg-big-stone justify-center md:text-left flex about'>
        <span id='about' className=" md:mb-0 mt-12 " />
        <div  className="ml-8 mr-8 md:mb-0 mt-36 md:mt-32 ">
          <h3>
            <div className={`flex items-center w-full transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
              <span className="text-bismark text-md sm:text-xl md:text-3xl pr-2 font-mono">01.</span>
              <div className={`transition-opacity  ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
                <span className="text-cadet-blue text-md sm:text-xl md:text-3xl font-sans">About Me</span>
              </div>
              <hr className="w-40 md:w-80 h-0.5 ml-2 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
          </h3>
          <div className={`flex justify-center transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
            <div className='flex-col font-sans'>
              <Image className='xl:hidden mx-auto mt-8 mb-8 rounded-md' src={'/Profile Pic.jpg'} width={300} height={300} alt="logo" />
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue md:text-flord text-lg md:text-lg '>
                  Hello, My name is Stephen and I love building software!<br/>
                  My interest in software development started in the early<br/>
                  stages of my adult life, but I never thought I would be<br/>
                  able to truly pursue it. it wasn't until spring of 2019 that<br/>
                  I finally decided to dive in and see what this field had<br/>
                  to offer.
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue md:text-flord text-lg md:text-lg '>
                  I spent the next year learning everything I could in order<br/>
                  to launch my new career off the ground. I managed to<br/>
                  stumble upon an amazing team of engineers at <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark hover:underline">a software<br/> consulting firm </a>
                  based out of Florence, AL. They took<br/>
                  me on and trained me on everything front to<br/>
                  back.
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue md:text-flord text-lg md:text-lg '>
                  While working there I had many opurtunities to get<br/>
                  my hands on a wide variety of technologies<br/>
                  <span className='hero-description text-cadet-blue text-lg md:text-lg '>Here are just a few of my favorites:</span>
                </p>
              </div>
              <div className=" pt-8">
                <div className="w-full columns-3">
                  <div className="">
                    { technologiesRow1.map((tech) => {
                      return (
                        <TechRow tech={tech} />
                      )
                    })}
                  </div>
                  <div className="">
                    { technologiesRow2.map((tech) => {
                      return (
                        <TechRow tech={tech} />
                      )
                    })}
                  </div>
                  <div className="">
                    { technologiesRow3.map((tech) => {
                      return (
                        <TechRow tech={tech} />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden xl:inline flex-col pt-4 pl-8'>
              <Image src={'/Prof-Headshot.jpg'} width={300} height={300} alt="logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMeSection