'use client';
import React, { useRef, useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from '@nextui-org/button';

const emptyContact: Contact = {
  name: '',
  company: '',
  email: '',
  subject: '',
  message: ''
}

interface ContactErrors {
  name: string,
  company: string,
  email: string,
  subject: string,
  message: string
}

const initialErrors: ContactErrors = {};
export default function ContactForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [emailReponse, setEmailResponse] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<ContactErrors>(initialErrors);
  const formMessage = useRef();

  const openModal = () => {
    setEmailResponse("");
    setContact(emptyContact);
    setFieldErrors(initialErrors);
    onOpen();
  };

  const updateContact = (field: keyof Contact) => {
    return (e: { target: { value: string; }; }) => {
      if (e?.target) {
        let value = e.target.value;
        var updatedContact = { ...contact, [field]: value };
        setContact(updatedContact);
      }
    };
  };

  const handleValidation = async () => {
    let requiredFields = ['email', 'subject', 'message'];
    let errors = {};
    let formIsValid = true;
    if (contact['company'] === '' && contact['name'] === '') {
      errors['company'] = "Please enter your NAME and/or your COMPANY'S NAME.";
      errors['name'] = "Please enter your NAME and/or your COMPANY'S NAME.";
      formIsValid = false
    }
    for (let index in requiredFields) {
      let field: keyof Contact = requiredFields[index];
      if (contact[field] === '') {
        formIsValid = false
        errors[field] = "Please enter your "+field+"."
      }
    }
    return [formIsValid, errors];
  };

  const handleSubmit = async () => {
    const [formIsValid, errors] = await handleValidation();
    if (formIsValid) {
      const res = await fetch("/api/mail", {
        body: JSON.stringify({
          email: contact.email,
          name: contact.name,
          company: contact.company,
          subject: contact.subject,
          message: contact.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error, status } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      setEmailResponse(status);
    }
    setFieldErrors(errors);
    formMessage.current?.scrollIntoView();
  };
  return (
    <>
      <Button
        className='animate-buttonFadeIn my-8 mx-16 p-8 border-1 border-bismark text-bismark bg-opacity-0 hover:transition-all duration-75 hover:-translate-y-1 hover:-translate-x-1 ease-in rounded-md text-lg md:text-xl lor-button'
        onClick={() => openModal()}
      >
        Get in touch
      </Button>
      <Modal  isOpen={isOpen} onOpenChange={onOpenChange} placement='center' size="3xl">
        <ModalContent id="modal-form" className={`modal-content bg-blue-Zodiac ${emailReponse || fieldErrors ? 'overflow-y-scroll' : 'overflow-hidden'}`}>
          {(onClose) => (
            <>
              <ModalBody ref={formMessage} >
                <div className="pt-6">
                  { emailReponse === 'Success' ? 
                  <div id="form-message" className="text-big-stone text-center bg-green-700 pt-4 rounded-lg md:mx-24">
                    <div className="bg-green-300 py-4 my-4 md:my-2 rounded-b-md">
                      Message sent!
                    </div>
                  </div>
                  :
                  <div/>
                  }
                  { emailReponse === 'Error' ? 
                  <div className="text-big-stone text-center bg-red-700 pt-4 rounded-lg md:mx-24">
                    <div className="bg-red-300 py-4 my-4 md:my-2 rounded-b-md px-2 md:px-6">
                      Oh no! something happened. <br/>Try contacting me directly at: <br/><span className="font-bold">s.bloodworth842@gmail.com</span>
                    </div>
                  </div>
                  :
                    <div/>
                  }
                  <form onSubmit={handleSubmit} className="lg:pt-8 md:mx-24 max-w-screen-md ">
                    <label className="block mb-2 text-sm font-medium text-flord">Name</label>
                    <input
                      type="text"
                      id="name"
                      className=" bg-small-stone shadow-sm shadow-slate-900 border-1 border-t-0 border-big-stone border-b-blue-Dianne border-l-blue-Dianne text-flord text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4"
                      placeholder="John/Jane Doe"
                      onChange={updateContact('name')}
                    />
                    <div className="mb-2 md:mb-4 text-red-500">{fieldErrors.name || ""}</div>
                    <label className="block mb-2 text-sm font-medium text-flord">Company</label>
                    <input
                      type="text"
                      id="company"
                      className=" bg-small-stone shadow-sm shadow-slate-900 border-1 border-t-0 border-big-stone border-b-blue-Dianne border-l-blue-Dianne text-flord text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4"
                      placeholder="Company Inc."
                      onChange={updateContact('company')}
                    />
                    <div className="mb-2 md:mb-4 text-red-500">{fieldErrors.company || ""}</div>
                    <label className="block mb-2 text-sm font-medium text-flord">Email</label>
                    <input
                      type="email"
                      id="email"
                      className=" bg-small-stone shadow-sm shadow-slate-900 border-1 border-t-0 border-big-stone border-b-blue-Dianne border-l-blue-Dianne text-flord text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4"
                      placeholder="e@mail.com"
                      onChange={updateContact('email')}
                      required
                    />
                    <div className="mb-2 md:mb-4 text-red-500">{fieldErrors.email || ""}</div>
                    <label className="block mb-2 text-sm font-medium text-flord">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="block w-full text-sm text-flord bg-small-stone rounded-lg shadow-sm shadow-slate-900 border-1 border-t-0 border-big-stone border-b-blue-Dianne border-l-blue-Dianne focus:ring-primary-500 focus:border-primary-500 p-4"
                      placeholder="Let me know how I can help you"
                      onChange={updateContact('subject')}
                      required
                    />
                    <div className="mb-2 md:mb-4 text-red-500">{fieldErrors.subject || ""}</div>
                    <label className="block mb-2 text-sm font-medium text-flord">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="block w-full text-sm text-flord bg-small-stone rounded-lg shadow-sm shadow-slate-900 border-1 border-t-0 border-big-stone border-b-blue-Dianne border-l-blue-Dianne focus:ring-primary-500 focus:border-primary-500 p-4"
                      placeholder="Leave a message..."
                      onChange={updateContact('message')}
                      required
                    />
                    <div className="mb-2 md:mb-4 text-red-500">{fieldErrors.message || ""}</div>
                  </form>
                </div>
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
