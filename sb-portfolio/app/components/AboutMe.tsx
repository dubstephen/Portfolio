'use client';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import './AboutMe.css'
import TechRow from './TechRow';
import AboutMeDescription from './AboutMeDescription';

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
              <hr className="w-[60%] md:w-[13%] h-0.5 ml-2 my-4 bg-blue-Dianne border-0 rounded md:my-10 " />
            </div>
          </h3>
          <AboutMeDescription />
        </div>
      </section>
    </>
  )
}

export default AboutMeSection