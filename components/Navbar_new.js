// 'use client'

// import { Imprima } from "next/font/google";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarContent, NavbarIte} from "@nextui-org/react";
// import Nav_comps from "./Nav_comps";

// import {
//     Dropdown,
//     DropdownTrigger,
//     DropdownMenu,
//     DropdownSection,
//     DropdownItem,
//     Button
//   } from "@nextui-org/react";


 
// const Navbar = () => {


    
//     return (  

       

//     <nav className="backdrop-blur-lg fixed flex w-full z-20 top-0 start-0  items-center justify-center  font-body ">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-center  pb-0 p-4">
//             <Link href="/" className="flex items-center mt-1 hover:text-gray-500 space-x-3 rtl:space-x-reverse  p-b0 p-4">
        
//                  <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Dominik Götz</span>
//             </Link>
//             <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

//             <Dropdown className="bg-white rounded-lg border border:gray-50 shadow-md">
//                 <DropdownTrigger>
//                     <Button 
//                         variant="bordered" 
//                         className="hover:text-gray-500 rounded-lg md:hidden"
//                         >
                        
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//                             <path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
//                             </svg>

//                     </Button>
//                 </DropdownTrigger>
//                 <DropdownMenu className="font-body" aria-label="Static Actions">
//                     <DropdownItem className =" border-b-2 "key="new">
//                     <Nav_comps></Nav_comps>
//                     </DropdownItem>
//                 </DropdownMenu>
//                 </Dropdown>
//             </div>
//             <div className="   hidden w-full text-xl p-4 pb-0 md:flex md:w-auto md:order-1" id="navbar-sticky">
//                <Nav_comps/>
//             </div>
//         </div>  
//     </nav>

        
//     );
// }
 
// export default Navbar;

'use client'

import { Imprima } from "next/font/google";
import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarContent, NavbarIte} from "@nextui-org/react";


import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";


 
const Navbar = () => {

        

    
    return (  

       

    <nav className="backdrop-blur-lg fixed flex w-full z-20 top-0 start-0  items-center justify-center  font-body ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center  pb-0 p-4">
            <Link href="/" className="flex items-center mt-1 hover:text-gray-500 space-x-3 rtl:space-x-reverse  p-b0 p-4">
        
                 <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Dominik Götz</span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                 <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                         </svg>
                    
                </button>
            </div>
            <div className="   hidden w-full text-xl p-4 pb-0 md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex pb-4 md:pb-0 flex-col items-center md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Dropdown className="bg-white rounded-lg border border:gray-50 shadow-md">
                        <DropdownTrigger>
                            <Button 
                                variant="bordered" 
                                className="hover:text-gray-500"
                                >
                                Teaching
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu className="font-body" aria-label="Static Actions">
                            <DropdownItem className =" border-b-2 "key="new">
                            <Link href="/Teaching/FS24" className="block hover:bg-gray-300 p-1 rounded-lg  ">ACOC II</Link>

                            </DropdownItem>
                            <DropdownItem key="copy">
                            <Link href="/Teaching/HS23" className="block hover:bg-gray-300 p-1 rounded-lg  ">ACOC I</Link>
                            </DropdownItem>
                            <DropdownItem key="edit">
                            <Link href="/Teaching/FS23" className="block hover:bg-gray-300 p-1 rounded-lg  ">ACAC II</Link>
                            </DropdownItem>
                            <DropdownItem   className =" border-b-2 "key="delete" >
                            <Link href="/Teaching/HS22" className="block hover:bg-gray-300 p-1 rounded-lg  ">Informatics I </Link>
                            </DropdownItem>
                            <DropdownItem key="delete" >
                            <Link href="/Library" className="block hover:bg-gray-300 p-1 rounded-lg  ">Libray </Link>
                            </DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link href="/Presentation" className="block py-2 px-3 text-primary   hover:text-gray-500 rounded  md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Presentations</Link>
                    </li>
                    
                    <li>
                        
                        <Link href="/Biolab" className="block py-2 px-3 text-primary   hover:text-gray-500 rounded  md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Bio Lab</Link>
                    </li>
                    <li>
                    <Dropdown className="bg-white rounded-lg border border:gray-50 shadow-md">
                        <DropdownTrigger>
                            <Button 
                                variant="bordered" 
                                className="hover:text-gray-500"
                                >
                                Impressum
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu className="font-body" aria-label="Static Actions">
                            <DropdownItem className =" "key="">
                            <Link href="/About" className="block hover:bg-gray-300 p-1 rounded-lg  ">About</Link>

                            </DropdownItem>
                            <DropdownItem key="copy">
                            <Link href="/Contact" className="block hover:bg-gray-300 p-1 rounded-lg  ">Contact</Link>
                            </DropdownItem>
                            <DropdownItem key="edit">
                            <Link href="/Gallery" className="block hover:bg-gray-300 p-1 rounded-lg  ">Gallery</Link>
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