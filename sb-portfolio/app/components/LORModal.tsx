'use client';
import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
import './LORModal.css'

export default function LORModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button className=' mt-8 md:p-8 border-1 border-bismark text-bismark bg-opacity-0 hover:transition-all duration-75 hover:-translate-y-1 hover:-translate-x-1 ease-in rounded-md text-lg md:text-xl lor-button' onClick={onOpen}>See What They Said</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center' size="3xl">
        <ModalContent className="overflow-scroll m-4 modal-content">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Letter of Recomendation</ModalHeader>
              <ModalBody>
                <div className="font-bold">
                  Jacob Senacal<br/>
                  CEO<br/>
                  jacob@cypressmill.co<br/>
                </div>
                <div className="font-bold">
                  April 23, 2024
                </div>
                <p> 
                  To Whom It May Concern, I am writing to recommend Stephen for any software development
                  position he may pursue.  Stephen has been an invaluable member of our team for the past four
                  years, and his dedication,  work ethic, and technical proficiency have consistently exceeded
                  expectations.
                </p>
                <p>
                  Throughout his tenure with us, Stephen has consistently demonstrated a strong work ethic,
                  always focused on delivering results and meeting deadlines. His commitment to excellence is
                  evident in the quality of his work, and he consistently goes above and beyond to ensure project
                  success. 
                </p>
                <p>
                  One of Stephen's greatest strengths is his motivation to learn new technologies. He actively
                  seeks out opportunities to expand his skill set and stay updated with the latest developments in
                  the field. His enthusiasm for learning not only benefits him personally but also enhances our
                  team's capabilities as a whole. 
                </p>
                <p>
                  Another notable trait of Stephen is his adaptability and quick learning ability. In the fast-paced
                  environment of software development, Stephen has proven time and again his ability to quickly
                  grasp new concepts and technologies, allowing him to contribute effectively to a wide range of
                  projects.
                </p>
                <p>
                  In summary, Stephen is an exceptional software developer with a stellar work ethic, a passion
                  for learning, and a knack for quickly adapting to new challenges. I am confident that he will
                  excel in any role he undertakes, and I wholeheartedly recommend him for any software
                  development position.
                </p>
                <p>
                  I highly recommend Stephen for any position and would be happy to answer any questions you
                  may have. Please feel free to contact me at jacob@cypressmill.co.
                </p>
                <div>
                  Sincerely,
                </div>
                <div>
                  Jacob Senacal
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="text-some-red border-1 border-some-red hover:bg-opacity-100 hover:text-white hover:bg-some-red bg-opacity-0 rounded-md" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
