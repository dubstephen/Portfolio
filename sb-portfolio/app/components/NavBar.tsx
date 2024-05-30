'use client';
import Image from "next/image";
import Link from "next/link";

interface Props {
  navBarIsOpen: boolean;
  toggleNavBar: Function;
}

const NavBar = (props: Props) => {
  const { navBarIsOpen, toggleNavBar } = props;
  const navOptions: NavOption[] = [
    {
      title: 'About',
      link: '#about'
    },
    {
      title: 'Employment',
      link: '#previous-jobs'
    },
    // {
    //   title: 'Work',
    //   link: '#personal-projects'
    // },
    {
      title: 'Work',
      link: '#previous-client-work'
    },
    {
      title: 'Contact',
      link: '#contact-me'
    },
  ]
  const navStyles = navBarIsOpen ? `max-md:bg-black-pearl max-md:rounded-s-md max-md:border-blue-Dianne max-md:border-l-1 border-t-1 max-md:right-0 w-3/4`: `max-md:-right-80`;
  return (
    <>
      <nav className="bg-black-pearl fixed top-0 left-0 right-0 z-10 font-mono md:h-24 md:bg-opacity-60 md:backdrop-blur-md">
        <div className="justify-between pt-2 pb-1 px-4 mx-auto lg:max-w-7x1 md:items-center md:flex">
          <div onClick={navBarIsOpen ? () => toggleNavBar(false) : undefined}>
            <div className="flex">
              <Link href="/">
                <h2 className="text-2x1 text-bismark font-bold pt-1">SB</h2>
              </Link>
              <div className="md:hidden ml-auto">
                <button className=" text-gray-700 rounded-md outline-none focus:border-gray-400 transition-all duration-200" onClick={() => toggleNavBar(!navBarIsOpen)}>
                    {navBarIsOpen ? (
                      <Image src={"/close.svg"} width={30} height={30} alt="close nav menu" />
                    ) : (
                      <Image
                        src={"/hamburger-menu.svg"}
                        width={30}
                        height={30}
                        alt="open nav menu"
                        className="focus:border-none active:border-none text-bismark"
                      />
                    )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 p-12 md:p-0 absolute md:static transition-all duration-200 ${navStyles}`}>
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                { navOptions.map((option, index) => {
                  index = index + 1;
                  return (
                    <Link key={'nav-item-'+index} href={option.link} scroll={true} onClick={() => toggleNavBar(false)}>
                      <li className=" pb-6 text-lg text-white py-6 md:py-4 md:px-6 text-start border-blue-Dianne border-b-2 md:border-b-0">
                          <span className="text-bismark">0{index}.</span> <span className="text-cadet-blue hover:text-bismark">{option.title}</span>
                      </li>
                    </Link>
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