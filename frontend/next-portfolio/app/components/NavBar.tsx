'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [navBar, setNavBar] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full bg-black-pearl fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-betweenpy-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2x1 text-cyan-600 font-bold">LOGO</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavBar(!navBar)}
                  >
                    {navBar ? (
                      <Image src={"/close.svg"} width={30} height={30} alt="logo" />
                    ) : (
                      <Image
                        src={"/hamburger-menu.svg"}
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navBar ? `p-12 md:p-0 block`: `hidden`
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-950">
                  <Link href="#about" onClick={() => setNavBar(false)}>
                    <span className="text-bismark">01.</span> <span className="text-cadet-blue">About</span>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-950">
                  <Link href="#previous-jobs" onClick={() => setNavBar(false)}>
                    <span className="text-bismark">02.</span> <span className="text-cadet-blue">Experience</span>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-950">
                  <Link href="#personal-projects" onClick={() => setNavBar(false)}>
                    <span className="text-bismark">03.</span> <span className="text-cadet-blue">Work</span>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-950">
                  <Link href="#previous-client-work" onClick={() => setNavBar(false)}>
                    <span className="text-bismark">04.</span> <span className="text-cadet-blue">Clients</span>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-950">
                  <Link href="#contact-me" onClick={() => setNavBar(false)}>
                    <span className="text-bismark">05.</span> <span className="text-cadet-blue">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar