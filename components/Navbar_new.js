import { Imprima } from "next/font/google";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarContent, NavbarIte } from "@nextui-org/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
} from "@nextui-org/react";

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
        <nav className="backdrop-blur-lg  fixed flex w-full z-30 top-0 start-0 items-center justify-center font-body  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center pt-4 p-1 lg:p-4">
                <Link href="/" onClick={closeMenu} className="flex items-center mt-1 hover:text-gray-500 space-x-3 rtl:space-x-reverse   p-4">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Dominik Götz</span>
                </Link>
                <div className="flex lg:order-2 i space-x-3 lg:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        onClick={handleMenuToggle}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 mt-1 text-primary hover:text-gray-500 h-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </div>
                <div
                        className={`${
                            isMenuOpen ? 'flex flex-col items-center' : 'hidden'
                        } w-full text-2xl p-4 pb-2 lg:flex lg:w-auto lg:order-1`}
                        id="navbar-sticky"
                    >
                    <ul className="flex flex-col lg:flex-row items-center lg:p-0 font-medium lg:space-x-8 rtl:space-x-reverse dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                            <Link href="/" onClick={closeMenu} className="block py-1 px-3 text-primary   hover:text-gray-500 rounded  lg:hover:bg-transparent lg:p-0 ">
                                
                                Home</Link>
                        </li>
                        <li className=""> 
                            <Dropdown className="bg-white rounded-lg border border:gray-50 p-0 shadow-md">
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="hover:text-gray-500"
                                    >
                                        Teaching
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu className="font-body" aria-label="Static Actions">
                                    <DropdownItem className=" border-b-2 " key="new">
                                        <Link href="/Teaching/FS24" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">ACOC II</Link>
                                    </DropdownItem>
                                    <DropdownItem key="copy">
                                        <Link href="/Teaching/HS23" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">ACOC I</Link>
                                    </DropdownItem>
                                    <DropdownItem key="edit">
                                        <Link href="/Teaching/FS23" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">ACAC II</Link>
                                    </DropdownItem>
                                    <DropdownItem className=" border-b-2 " key="delete" >
                                        <Link href="/Teaching/HS22" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Informatics I </Link>
                                    </DropdownItem>
                                    <DropdownItem key="delete" >
                                        <Link href="/Library" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Library </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li>
                            <Link href="/Presentation" onClick={closeMenu} className="block py-1 px-3 text-primary   hover:text-gray-500 rounded  lg:hover:bg-transparent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Presentations</Link>
                        </li>
                        
                        <li className="">
                            <Dropdown className="bg-white rounded-lg border border:gray-50 p-0 shadow-md">
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="hover:text-gray-500"
                                    >
                                        Explore
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu className="font-body" aria-label="Static Actions">
                                    <DropdownItem className=" " key="">
                                        <Link href="/About" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">About</Link>
                                    </DropdownItem>
                                    <DropdownItem key="edit">
                                        <Link href="/Biolab" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Bio Lab</Link>
                                    </DropdownItem>
                                    <DropdownItem key="edit">
                                        <Link href="/Gallery" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Gallery</Link>
                                    </DropdownItem>
                                    <DropdownItem key="copy">
                                        <Link href="/Contact" onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg  ">Contact</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
