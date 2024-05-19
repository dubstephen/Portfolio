'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [navBar, setNavBar] = useState<boolean>(false);
  const navOptions: NavOption[] = [
    {
      title: 'About',
      link: '#about'
    },
    {
      title: 'Experience',
      link: '#previous-jobs'
    },
    // {
    //   title: 'Work',
    //   link: '#personal-projects'
    // },
    {
      title: 'Clients',
      link: '#previous-client-work'
    },
    {
      title: 'Contact',
      link: '#contact-me'
    },
]
  return (
    <>
      <nav className="w-full bg-black-pearl fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
          <div>
            <div>
              <Link href="/">
                <h2 className="text-2x1 text-cyan-600 font-bold">LOGO</h2>
              </Link>
              <div className="md:hidden ml-auto">
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
                        className="focus:border-none active:border-none text-bismark"
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
              { navOptions.map((option, index) => {
                index = index + 1;
                return (
                  <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-950">
                    <Link href={option.link} onClick={() => setNavBar(false)}>
                      <span className="text-bismark">0{index}.</span> <span className="text-cadet-blue">{option.title}</span>
                    </Link>
                  </li>
                )
              })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar