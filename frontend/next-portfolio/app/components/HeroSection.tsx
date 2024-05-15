import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <section id='hero' className='text-white h-screen bg-gradient-to-b from-black-pearl to-big-stone flex text-center md:text-left hero'>
        <div className='hero-container'>
          <p className='p-2 introduction text-bismark text-base md:text-base '>Hi, my name is</p>
          <h1 className='p-2 name text-cadet-blue text-4xl md:text-5xl '>Stephen Bloodworth.</h1>
          <h2 className='p-2 what-i-do text-flord text-4xl md:text-5xl '>I build software.</h2>
          <p className='pt-8 md:p-2 hero-description text-flord text-lg md:text-xl '>
            I am a software engineer specializing in building highly performant<br/>
            applications that solve real-world problems and provide users with an<br/>
            awesome experience. I’m currently working using Spring Boot and Angular
          </p>
        </div>
      </section>
    </>
  )
}

export default HeroSection