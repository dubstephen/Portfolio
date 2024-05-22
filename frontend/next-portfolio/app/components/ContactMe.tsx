'use client';
import React, { FormEvent, useState } from 'react'
import {Input} from "@nextui-org/react";
import './ContactMe.css'

const emptyContact: Contact = {
  name: '',
  company: '',
  email: '',
  subject: '',
  message: ''
}

const ContactMe = () => {
  const [contact, setContact] = useState<Contact>(emptyContact);
  // const [name, setName] = useState("");
  // const [company, setCompany] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  const updateContact = (field: keyof Contact) => {
    return (e: { target: { value: string; }; }) => {
      if (e?.target?.value) {
        let value = e.target.value;
        var updatedContact = { ...contact, [field]: value };
        setContact(updatedContact);
      }
    };
  };

  const handleSubmit = async () => {
    console.log(contact);

    // let isValidForm = handleValidation();

    
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: contact.email,
          fullname: contact.name,
          subject: contact.subject,
          message: contact.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
    console.log(
      contact.name, contact.email,
      contact.subject, contact.message
    );
  };

  return (
    <>
      <section id='contact-me' className='text-black justify-center contact-me'>
        <h3>
          <div className="flex w-full ml-auto items-center justify-center ">
            <span className="text-2xl">Contact Me</span>
          </div>
        </h3>
        <form onSubmit={handleSubmit} className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white">
          <label className="block mb-2 text-sm font-medium text-black">Name</label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="John/Jane Doe"
            onChange={updateContact('name')}
            // required
          />
          <label className="block mb-2 text-sm font-medium text-black">Company</label>
          <input
            type="text"
            id="company"
            className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Company Inc."
            onChange={updateContact('company')}
            // required
          />
          <label className="block mb-2 text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="e@mail.com"
            onChange={updateContact('email')}
            // required
          />
          <label className="block mb-2 text-sm font-medium text-black">Subject</label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let me know how I can help you"
            onChange={updateContact('subject')}
            // required
          />
          <label className="block mb-2 text-sm font-medium text-black">Your message</label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a message..."
            onChange={updateContact('message')}
          />
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
              Send message
            </button>
        </form>
      </section>
    </>
  )
}

export default ContactMe