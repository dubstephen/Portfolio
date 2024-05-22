'use client';
import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
// import './ContactForm.css'

const emptyContact: Contact = {
  name: '',
  company: '',
  email: '',
  subject: '',
  message: ''
}

export default function ContactForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [contact, setContact] = useState<Contact>(emptyContact);

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
      <Button className='animate-buttonFadeIn my-8 mx-16 p-8 border-1 border-bismark text-bismark bg-opacity-0 hover:transition-all duration-75 hover:-translate-y-1 hover:-translate-x-1 ease-in rounded-md text-lg md:text-xl lor-button' onClick={onOpen}>Let's Talk</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' size="3xl">
        <ModalContent className="modal-content bg-blue-Zodiac">
          {(onClose) => (
            <>
              <ModalBody>
                <h3>
                  <div className="flex w-full ml-auto items-center justify-center ">
                    <span className=" pt-4 text-2xl text-cadet-blue">Contact Me</span>
                  </div>
                </h3>
                <form onSubmit={handleSubmit} className="lg:pt-8 md:mx-24 max-w-screen-md ">
                  <label className="block mb-2 text-sm font-medium text-flord">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-flord text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 mb-2 md:mb-4"
                    placeholder="John/Jane Doe"
                    onChange={updateContact('name')}
                    // required
                  />
                  <label className="block mb-2 text-sm font-medium text-flord">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-flord text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 mb-2 md:mb-4"
                    placeholder="Company Inc."
                    onChange={updateContact('company')}
                    // required
                  />
                  <label className="block mb-2 text-sm font-medium text-flord">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-flord text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 mb-2 md:mb-4"
                    placeholder="e@mail.com"
                    onChange={updateContact('email')}
                    // required
                  />
                  <label className="block mb-2 text-sm font-medium text-flord">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="block w-full text-sm text-flord bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 p-4 mb-2 md:mb-4"
                    placeholder="Let me know how I can help you"
                    onChange={updateContact('subject')}
                    // required
                  />
                  <label className="block mb-2 text-sm font-medium text-flord">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block w-full text-sm text-flord bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-4 mb-2 md:mb-4"
                    placeholder="Leave a message..."
                    onChange={updateContact('message')}
                  />
                </form>
              </ModalBody>
              <ModalFooter className="pt-0 justify-center md:justify-end">
                <Button className="mb-8 md:mb-4 mr-2 border-1 border-some-red hover:bg-opacity-100 text-white bg-some-red rounded-md" onClick={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  className="mb-8 md:mb-4 mr-2 text-bismark border-1 border-bismark hover:bg-opacity-100 hover:text-black hover:bg-bismark bg-opacity-0 rounded-md"
                  onClick={() => handleSubmit()}>
                    Send Message
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
