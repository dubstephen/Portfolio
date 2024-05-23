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

const AboutMeDescription = () => {
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
      <div className={`flex justify-center text transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
        <div className='flex-col font-sans'>
          <Image className='xl:hidden mx-auto mt-8 mb-8 rounded-md' src={'/Profile Pic.jpg'} width={300} height={300} alt="logo" />
          <div id='mobile-about-me-desc' className='md:hidden'>
            <div className="flex items-center justify-start w-full">
              <p className='pt-8 md:p-2 text-flord text-lg md:text-lg '>
                Hello, My name is Stephen <br/>and I love building software!
                My interest in software development started in the early
                stages of my adult life, but I never thought I would be
                able to truly pursue it. It wasn not until spring of 2019 that
                I finally decided to dive in and see what this field had
                to offer.
              </p>
            </div>
            <div className="flex items-center justify-start w-full">
              <p className='pt-8 md:p-2 text-flord text-lg md:text-lg '>
                I spent the next year learning everything I could in order
                to launch my new career off the ground. I managed to
                stumble upon an amazing team of engineers at <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark hover:underline">a software consulting firm </a>
                based out of Florence, AL. They took
                me on and trained me on everything from front to
                back.
              </p>
            </div>
            <div className="flex items-center justify-start w-full">
              <p className='pt-8 md:p-2 text-flord text-lg md:text-lg '>
                While working there I had many opurtunities to get
                my hands on a wide variety of technologies.<br/><br/>
                <span className='text-cadet-blue text-lg'>Here are just a few of my favorites:</span>
              </p>
            </div>
          </div>
          <div id='desktop-about-me-desc' className='hidden md:inline'>
            <div className="flex items-center justify-start w-full">
              <p className='pt-8 md:p-2 text-flord text-lg md:text-lg '>
                Hello, My name is Stephen and I love building software!<br/>
                My interest in software development started in the early<br/>
                stages of my adult life, but I never thought I would be<br/>
                able to truly pursue it. it wasn not until spring of 2019 that<br/>
                I finally decided to dive in and see what this field had<br/>
                to offer.
              </p>
            </div>
            <div className="flex items-center justify-start w-full">
              <p className='pt-8 md:p-2 text-flord text-lg md:text-lg '>
                I spent the next year learning everything I could in order<br/>
                to launch my new career off the ground. I managed to<br/>
                stumble upon an amazing team of engineers at <a href='https://cypressmill.co/' target="_blank" rel="noopener noreferrer" className="text-bismark hover:underline">a software<br/> consulting firm </a>
                based out of Florence, AL. They took<br/>
                me on and trained me on everything front to<br/>
                back.
              </p>
            </div>
            <div className="flex items-center justify-start w-full">
              <p className='pt-8 md:p-2 text-flord text-lg md:text-lg '>
                While working there I had many opurtunities to get<br/>
                my hands on a wide variety of technologies.<br/><br/>
                <span className='text-cadet-blue text-lg'>Here are just a few of my favorites:</span>
              </p>
            </div>
          </div>
          <div className=" pt-8">
            <div className="w-full columns-3">
              <div className="">
                { technologiesRow1.map((tech) => {
                  return (
                    <div key={'tech-item-'+tech.id} className='pb-16'>
                      <TechRow tech={tech} />
                    </div>
                  )
                })}
              </div>
              <div className="">
                { technologiesRow2.map((tech) => {
                  return (
                    <div key={'tech-item-'+tech.id} className='pb-16'>
                      <TechRow tech={tech} />
                    </div>
                  )
                })}
              </div>
              <div className="">
                { technologiesRow3.map((tech) => {
                  return (
                    <div key={'tech-item-'+tech.id} className='pb-16'>
                      <TechRow tech={tech} />
                    </div>
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
    </>
  )
}

export default AboutMeDescription