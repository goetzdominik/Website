import { Lora } from 'next/font/google'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {Burger} from './burger';

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
} from "@nextui-org/react";

const lora = Lora({
    weight: '400',
    subsets: ['latin']
  });
  
  

const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="backdrop-blur-lg    text-primary fixed flex w-full z-30 top-0 start-0 items-center justify-center">
            <div className={lora.className}>
            <div className="   flex flex-wrap items-center justify-center pt-4 p-1 lg:p-4">
                <Link href="/" onClick={closeMenu} className="flex items-center mt-1 hover:text-gray-500 space-x-3 rtl:space-x-reverse   p-4">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Dominik Götz</span>
                </Link>
                <div className="flex lg:order-2 mt-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                    
                    <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo"
                    onClick={handleMenuToggle}
                    className='lg:hidden '
                    aria-controls="navbar-sticky"
                    radius="full"
                    aria-expanded={isMenuOpen}>

                        <Burger/>

                    </Button>
                </div>
                <div
                       className={`${isMenuOpen ? 'flex flex-col items-center h-screen' : 'hidden'} w-full text-2xl p-4 pb-2 lg:flex lg:w-auto lg:order-1 lg:h-auto`}

                    >
                    <ul className="flex flex-col   lg:flex-row items-center lg:p-0 font-medium lg:space-x-8 rtl:space-x-reverse dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        <li className='pt-2'>
                            <Link href="/" onClick={closeMenu} className="block py-1 px-3   hover:text-gray-500 rounded  lg:hover:bg-transparent lg:p-0 ">
                                
                                Home</Link>
                        </li>
                        <li className=""> 
                            <Dropdown className="bg-white rounded-lg border border:gray-50 p-0 shadow-md">
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="hover:text-gray-500 p-2  rounded-lg pb-0"
                                        radius ="lg"
                                    >
                                        Teaching
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu  className={lora.className} aria-label="Static Actions">
                                <DropdownItem className=" border-b-2 " key="PVK_ACOCII">
                                        <Link href="/PVK/ACOCII" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">PVK: ACOC II</Link>
                                    </DropdownItem>
                                    <DropdownItem className="  " key="FS24">
                                        <Link href="/Teaching/FS24" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">ACOC II</Link>
                                    </DropdownItem>
                                    <DropdownItem key="HS23">
                                        <Link href="/Teaching/HS23" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">ACOC I</Link>
                                    </DropdownItem>
                                    <DropdownItem key="FS23">
                                        <Link href="/Teaching/FS23" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">ACAC II</Link>
                                    </DropdownItem>
                                    <DropdownItem className=" border-b-2 " key="HS22" >
                                        <Link href="/Teaching/HS22" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Informatics I </Link>
                                    </DropdownItem>
                                    <DropdownItem key="library" >
                                        <Link href="/Library" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Library </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className='pt-2'>
                            <Link href="/Presentation" onClick={closeMenu} className="block py-1 px-3 text-primary    hover:text-gray-500 rounded  lg:hover:bg-transparent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Presentations</Link>
                        </li>
                        
                        <li className="">
                            <Dropdown className="bg-white rounded-lg border border:gray-50 p-0 shadow-md">
                                <DropdownTrigger>
                                    <Button
                                        variant=""
                                        className="hover:text-gray-500 rounded-lg p-2 pb-0 pt-2"
                                        radius ="lg"
                                    >
                                        Explore
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu className={lora.className} aria-label="Static Actions">
                                   
                                    <DropdownItem key="now">
                                        <Link href="/Now" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Now</Link>
                                    </DropdownItem>
                                    <DropdownItem className=" " key="about">
                                        <Link href="/About" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">About</Link>
                                    </DropdownItem>
                                    <DropdownItem key="gallary">
                                        <Link href="/Gallery" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Gallery</Link>
                                    </DropdownItem>
                                    <DropdownItem key="contact">
                                        <Link href="/Contact" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Contact</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
