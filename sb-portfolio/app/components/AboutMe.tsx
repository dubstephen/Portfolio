'use client';
import React, { useEffect, useState } from 'react'
import './AboutMe.css'
import AboutMeDescription from './AboutMeDescription';

interface Props {
  navBarIsOpen: boolean;
  lightDividerActive: boolean;
  toggleDivider: Function;
}

const AboutMeSection = (props: Props) => {
  const { navBarIsOpen, lightDividerActive, toggleDivider } = props;
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
        <span id='about' className="md:mb-0 mt-20 md:mt-12" />
        <div className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} ml-8 mr-8 md:mb-0 mt-36 md:mt-32`}>
          <h3>
            <div className={`flex items-center w-full transition-opacity ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
              <span className="text-bismark text-2xl sm:text-xl md:text-3xl pr-2 font-mono">01.</span>
              <div className={`transition-opacity  ease-in duration-700 ${showSection ? "opacity-100" : "opacity-0"}`}>
                <span className="text-cadet-blue text-2xl sm:text-xl md:text-3xl font-sans">About Me</span>
              </div>
              <hr className={`${
                  lightDividerActive ?
                  'transition-all duration-500 border-bismark rounded-xl border-l-1.5' :
                  'transition-all duration-500 border-blue-Dianne h-0.5'
                } w-[43%] md:w-[31%] h-0.5 ml-2 my-4 rounded md:my-10`}
                  onClick={() => toggleDivider(!lightDividerActive)}
              />
            </div>
          </h3>
          <AboutMeDescription />
        </div>
      </section>
    </>
  )
}

export default AboutMeSection