import { Lora } from 'next/font/google';
import React, { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { Burger } from './burger';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@nextui-org/react";

const lora = Lora({
    weight: '400',
    subsets: ['latin']
});

const Navbar = () => {
    // const router = useRouter();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSessionOpen, setSessionOpen] = useState(false);


    const handleMenuToggle = () => setMenuOpen(!isMenuOpen);
    const closeMenu = () => setMenuOpen(false);

    const menuHeader = [
        {  label: "Exercise Session", className: " " },
        {  label: "PVK", className: " " },
        {  label: "Additional", className: "" },
  ];

    const menuItems = [
        { href: "/Teaching/HS25", label: "HS25: OC I" },
        { href: "/Teaching/FS25", label: "FS25: ACOC II" },
        { href: "/Teaching/HS24", label: "HS24: OC I" },
        { href: "/Teaching/FS24", label: "FS24: ACOC II" },
        { href: "/Teaching/HS23", label: "HS23: ACOC I" },
        { href: "/Teaching/FS23", label: "FS23: ACAC II" },
        { href: "/Teaching/HS22", label: "HS22: Informatik I" },
        { href: "/PVK/ACOCII", label: "FS24: ACOC II (PVK)" },
        { href: "/Library", label: "Library"  }
    ];

    const exploreItems = [
        { href: "/About", label: "About" },
        { href: "/Gallery", label: "Gallery" },
        { href: "/Contact", label: "Contact" }
    ];

    const renderDropdownItems = (items) => (
        items.map(item => (
            <DropdownItem key={item.href} className="text-primary ml-4" description={item.description} shortcut = {item.shortcut}>
           
                <Link href={item.href} onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg ">
                    {item.label}
                </Link>
            </DropdownItem>
        ))
    );

    const renderDropdown = (items) => (
        items.map(item => (
            <DropdownItem key={item.href} className="text-primary" description={item.description} shortcut = {item.shortcut}>
           
                <Link href={item.href} onClick={closeMenu} className="block hover:bg-gray-300 p-2 rounded-lg ">
                    {item.label}
                </Link>
            </DropdownItem>
        ))
    );

    const renderDropdownHeader = (items) => (
        items.map(item => (
            <DropdownItem  key = {item.label} className= "font-bold  border-b-2 border-gray-300" >
                    {item.label}
            </DropdownItem>
        ))
    );

    return (
        <nav className="backdrop-blur-lg text-primary fixed flex w-full z-30 top-0 start-0 items-center justify-center">
            <div className={lora.className}>
                
                <div className="flex flex-wrap items-center justify-center pt-4 p-1 lg:p-4">
                    <Link href="/" onClick={closeMenu} className="flex items-center mt-1 hover:text-gray-500 space-x-3 rtl:space-x-reverse p-4">
                        <span className="self-center text-4xl  font-semibold whitespace-nowrap dark:text-white">D. Götz</span>
                    </Link>
                    <div className="flex lg:order-2 mt-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                        <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo"
                            onClick={handleMenuToggle}
                            className='lg:hidden'
                            aria-controls="navbar-sticky"
                            radius="medium"
                            aria-expanded={isMenuOpen}>
                            <Burger />
                        </Button>
                    </div>
                    <div className={`${isMenuOpen ? 'flex flex-col items-center h-screen' : 'hidden'} w-full text-2xl p-4 pb-2 lg:flex lg:w-auto lg:order-1 lg:h-auto`}>
                        <ul className="flex flex-col lg:flex-row items-center lg:p-0 lg:space-x-8 rtl:space-x-reverse dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                           
                            <li>
                                <Dropdown className="bg-white rounded-lg mr-4 border border:gray-50 p-0 shadow-md">
                                    <DropdownTrigger>
                                        <Button variant="bordered" className="hover:text-gray-500  p-2 rounded-lg pb-0" radius="lg">
                                            Teaching
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className="pr-4 pl-2" aria-label="Static Actions" disabledKeys={menuHeader.map(item => item.label)}>
                                        {renderDropdownHeader(menuHeader.slice(0,1))}
                                        {renderDropdownItems(menuItems.slice(0, -2))}
                                        {renderDropdownHeader(menuHeader.slice(1,2))}
                                        {renderDropdownItems(menuItems.slice(-2, -1))}
                                        {renderDropdownHeader(menuHeader.slice(2,3))}
                                        {renderDropdownItems(menuItems.slice(-1))}
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li className='pt-2'>
                                <Link href="/Presentation" onClick={closeMenu} className="block   py-1 px-3 text-primary hover:text-gray-500 rounded lg:hover:bg-transparent lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Presentations
                                </Link>
                            </li>
                            <li>
                                <Dropdown className="bg-white rounded-lg border border:gray-50 p-0 shadow-md">
                                    <DropdownTrigger>
                                        <Button className="hover:text-gray-500  rounded-lg p-2 pb-0 pt-2" radius="lg">
                                            Explore
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu className="" aria-label="Static Actions">
                                        {renderDropdown(exploreItems)}
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
