'use client';
import React, { FormEvent, useState } from 'react'
import {Input} from "@nextui-org/react";
import './ContactMe.css'
import ContactForm from './ContactForm';

const ContactMe = () => {

  return (
    <>
      <section id='contact-me' className='text-white bg-big-stone justify-center md:text-left flex contact-me'>
        <div  className="ml-8 mr-8 mb-8 mt-36 md:mt-32 md:justify-between">
          <h3>
            <div className='flex items-center justify-center w-full ml-auto mr-auto'>
              <span className="text-cadet-blue text-2xl md:text-3xl font-sans">Interested?</span>
            </div>
          </h3>
          <ContactForm />
          <div className='text-sm text-cadet-blue text-center mt-32 md:pt-32 ml-auto mr-auto mb-0 pb-0'>
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