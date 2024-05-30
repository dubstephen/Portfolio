'use client';
import React from 'react'
import './ContactMe.css'
import ContactForm from './ContactForm';

interface Props {
  navBarIsOpen: boolean;
}

const ContactMe = (props: Props) => {
  const { navBarIsOpen } = props;
  return (
    <>
      <section className='text-white bg-gradient-to-b from-big-stone to-small-stone justify-center md:text-left flex contact-me'>
        <div  className={`transition-all duration-75 ${navBarIsOpen ? 'blur-sm ' : ''} ml-8 mr-8 mb-8 mt-64 pt-24 md:mt-40 md:justify-between`}>
          <h3>
            <div className='flex items-center justify-center'>
              <span className="text-cadet-blue text-xl md:text-3xl font-sans">Let's talk about your project!</span>
            </div>
          </h3>
          <span className="flex text-center items-center justify-center text-flord text-sm md:text-lg font-sans">Leave a message and I'll get back to you</span>
          <div className='flex items-center justify-center'>
            <ContactForm />
          </div>
          <div id='contact-me' className='text-sm text-cadet-blue text-center mt-48 md:pt-32 ml-auto mr-auto mb-0 pb-0'>
            Built with {' '}
            <a href='https://nextjs.org/' target="_blank" rel="noopener noreferrer"className='hover:text-bismark'>
              Next.js
            </a> by {' '}
            <a href='https://github.com/dubstephen' target="_blank" rel="noopener noreferrer" className='hover:text-bismark'>
              Stephen Bloodworth
            </a> using<br/> designs by {' '}
            <a href='https://brittanychiang.com/' target="_blank" rel="noopener noreferrer" className='hover:text-bismark'>
              Brittany Chiang
            </a>.
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactMe