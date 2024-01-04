import Link from "next/link";
import { NavbarBrand, NavbarMenu, NavbarMenuToggle, NavbarContent, NavbarIte} from "@nextui-org/react";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";
const Nav_comps = () => {
    return ( 

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
     );
}
 
export default Nav_comps;