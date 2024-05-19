import React from 'react'
import Image from "next/image";
import './AboutMe.css'
import TechRow from './TechRow';

const AboutMeSection = () => {
const technologiesRow1: Technology[] = [
  {
    title: 'Next.js',
    imageSRC: '/next-js-seeklogo.svg',
    link: 'https://nextjs.org/'
  },
  {
    title: 'TypeScript',
    imageSRC: '/typescript.svg',
    link: 'https://www.typescriptlang.org/'
  },
  {
    title: 'Tailwind',
    imageSRC: '/Tailwind_CSS_Logo.svg',
    link: 'https://tailwindcss.com/'
  },
]
const technologiesRow2: Technology[] = [
  {
    title: 'Django',
    imageSRC: '/djangoproject.svg',
    link: 'https://www.djangoproject.com/'
  },
  {
    title: 'Python',
    imageSRC: '/python-logo-only.svg',
    link: 'https://www.python.org/'
  },
  {
    title: 'Lua',
    imageSRC: '/lua-icon.svg',
    link: 'https://www.lua.org/'
  },
]
const technologiesRow3: Technology[] = [
  {
    title: '.NET',
    imageSRC: '/Microsoft_.NET_logo.svg',
    link: 'https://dotnet.microsoft.com/en-us/'
  },
  {
    title: 'C#',
    imageSRC: '/Logo_C_sharp.svg',
    link: 'https://dotnet.microsoft.com/en-us/languages/csharp'
  },
  {
    title: 'Ionic',
    imageSRC: '/ionicframework-icon.svg',
    link: 'https://ionicframework.com/'
  }
]
  return (
    <>
      <section id='about' className='text-white bg-big-stone justify-center md:justify-start md:text-left flex about'>
        <div className="pl-8 pr-8 md:ml-auto md:mr-auto md:mb-64 mt-32 md:mt-64">
          <h3>
            <div className="flex items-center w-full">
              <span className="text-bismark text-xl md:text-2xl pr-2">01.</span>
              <span className="text-cadet-blue text-xl md:text-2xl">About Me</span>
              <hr className="w-40 md:w-64 h-0.5 ml-2 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
          </h3>
          <div className='flex'>
            <div className='flex-col'>
              <Image className='inline xl:hidden mt-8 rounded-md' src={'/Profile Pic.jpg'} width={300} height={300} alt="logo" />
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue md:text-flord text-lg md:text-xl '>
                  Hello! My name is Stephen and I enjoy creating things that live<br/>
                  on the internet. My interest in web development started back in<br/>
                  2019 when I decided to try editing customer Tumblr theme --<br/>
                  turns out hacking together a customer reblog button taught me<br/>
                  a lot about HTML & CSS!
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue md:text-flord text-lg md:text-xl '>
                  Fast-forward to today, and I’ve had the privilege of working at<br/>
                  an advertising agency, a start-up, a huge corporation, and a<br/>
                  student-led design studio. My main focus these days is building<br/>
                  accessible, inclusive products and digital experiences at<br/>
                  Upstatement for a variety of clients.
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-cadet-blue md:text-flord text-lg md:text-xl '>
                  I also recently launched a course that covers everything you<br/>
                  need to build a web app with the Spotify API using Node &<br/>
                  React.
                </p>
              </div>
              <div className="flex items-center justify-start w-full">
                <p className='pt-8 md:p-2 hero-description text-bismark md:text-cadet-blue text-lg md:text-xl '>
                  Here are a few technologies I’ve enjoyed using:
                </p>
              </div>
              <div className=" pt-16">
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
            <div className='flex-col pt-4 pl-8'>
              <Image className='hidden xl:inline' src={'/Prof-Headshot.jpg'} width={300} height={300} alt="logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMeSection