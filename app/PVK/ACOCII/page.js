'use client'
import Link from "next/link";

import { useState } from 'react';
import {Image} from "@nextui-org/react";
// import { Button } from "@nextui-org/react";
const ACOCII = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming 'secret' is the correct password
        if (password === 'icandoit') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password!');
            setPassword(''); // Optionally reset the password input
        }
    };

    return ( 
        <div className="">   
            <h1 className="page_title" > 
                PVK: ACOC II
            </h1>
            
            <div className=" text_card_grid">
                <div className =" md:w-1/2 text_card ">
                <h2>
                    PVK Session
                    </h2>
                    <p className="text-gray-500 ">
                        Session will take place in HIL D 10.2. We will meet for three days either in the morning (at 08:00 sharp) or afternoon (13:00 sharp) and each session will last 4 hours including breaks. 

                    </p>
                    
                </div>
                <div className =" md:w-1/2 text_card">
                    <h2>
                    Scripts and Documents
                    </h2>
                    <p className="text-gray-500 ">
                        Below you can find the scripts for each session aswell as other usefull documents for ACOC II. Plese keep in mind that these documents are not to be shared. We will use the script created by Thea Ortner with help from Phillip Blank.


                    </p>
                </div>
            </div>
           
           
           
            {!isAuthenticated && (
                 <form onSubmit={handleSubmit} className="flex flex-col mt-8 items-center">
                 <input
                     type="password"
                     value={password}
                     onChange={handlePasswordChange}
                     placeholder="Enter password to view table"
                     className="input input-bordered w-full max-w-xs rounded-lg bg-gray-100"
                 />
                 {/* Correct Button usage for form submission */}
                 <button 
                     type="" // Ensure the button submits the form
                     className="bg-gray-200 p-2 px-4 mt-4  rounded-lg"
                     onClick={handleSubmit}
                 >
                     Submit
                 </button>
             </form>
            )}

            {isAuthenticated && (
            <div> 

                <div className="lg:grid-cols-2 grid gap-8">
                    <div className="">
                        <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                            <table className="w-full  text-left rtl:text-right text-secondary ">
                                <thead className="text-xs text-primary uppercase bg-gray-200  ">
                                    <tr>
                                    <th scope="col" className="px-6 py-3 ">
                                            Morning
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-gray-500 ">
                                        Date
                                        </th>
                                        
                                        <th scope="col" className="px-6 py-3 text-gray-500">
                                        Script filled out
                                        </th>
                                       
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                    <td scope="col" className="px-6 py-3 ">
                                    <Link href="/download/ACOCII/ACOC_II_PVK_Skript_unausgefullt.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Script  </Link>
                                        </td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                        24.06.2024
                                        </td>
                                        
                                        <td className="px-6 py-4  ">
                                        <Link href="/download/ACOCII/Skript Ausgefullt_vormittag.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Filled</Link>
                                        </td>
                                       
                                       
                                    </tr> 
                                    
                                        
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="">
                    
                    <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                            <table className="w-full  text-left rtl:text-right text-secondary ">
                                <thead className="text-xs text-primary uppercase bg-gray-200  ">
                                    <tr>
                                    <th scope="col" className="px-6 py-3 ">
                                            Afternoon
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-gray-500 ">
                                        Date
                                        </th>
                                        
                                        <th scope="col" className="px-6 py-3 text-gray-500">
                                        Script filled out
                                        </th>
                                      
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                     <td scope="col" className="px-6 py-3 ">
                                     <Link href="/download/ACOCII/ACOC_II_PVK_Skript_unausgefullt.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Skript </Link>
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                    24.06.2024
                                    </td>
                                    
                                    <td className="px-6 py-4  ">
                                    <Link href="/download/ACOCII/Skript Ausgefullt_Nachmittag.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Filled</Link>
                                    </td>
                                  
                                    
                                    </tr> 
                                   
                                        
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                            <table className="w-full  text-left rtl:text-right text-secondary ">
                                <thead className="text-xs text-primary uppercase bg-gray-200  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                        Extra Documents 
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            
                                        </th>
                                        <th scope="col" className="px-6 py-3">

                                        </th>
                                        <th>

                                        </th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                        <Link href="/download/ACOCII/Extra/OC_Reaktionsgleichungen_Ubungen.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Reaktionsgleichung Übung</Link>
                                        </td>
                                        <td className="px-6 py-4  ">
                                        <Link href="/download/ACOCII/Extra/OC_Reaktionsgleichungen_Losungen.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Reaktiongleichung Lösung </Link>
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/ACOCII/Extra/OC_Reaktionssammlung_Ubung .pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Reaktionssammlung </Link>
                                        </td>
                                       <td>
                                       <Link href="/download/ACOCII/Extra/OC_Reaktionssammlung_Losungen.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Reaktionssammlung Lösung</Link>
                                        </td>
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                        <Link href="/download/ACOCII/Extra/Abkurzungen.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Abkürzungen</Link>
                                        </td>
                                        <td className="px-6 py-4  ">
                                        <Link href="/download/ACOCII/Extra/Funktionelle_Gruppen.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Funktionelle Gruppen</Link>
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/ACOCII/Extra/ACOCII_Zusammenfassung.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Zusammenfassung</Link>
                                        </td>
                                        <td>
                                        <Link href="/download/ACOCII/ACOC_II_PVK_Skript_unausgefullt.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PVK Skript</Link>
                                            </td>
                                    </tr> 
                                        
                                
                                </tbody>
                            </table>
                        </div>
            </div>
            )}
        </div>
     );
}
 
export default ACOCII;