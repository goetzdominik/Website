'use client'
import Link from "next/link";
import { useState } from 'react';
// import { Button } from "@nextui-org/react";
const HS23 = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming 'secret' is the correct password
        if (password === 'secret') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password!');
            setPassword(''); // Optionally reset the password input
        }
    };

    return ( 
        <div className="">   
            <h1 className="page_title" > 
                PVK: ACOC I 
            </h1>
            <div className=" text_card_grid">
                <div className =" md:w-3/5 text_card ">
                    <h2>
                    529-0011-03L Allgemeine Chemie I (OC)
                    </h2>
                    <p className="text-gray-500">
                    Slides and solutions for the exercise class, accompanying the ACOC II lecture by Prof. Chen. This lecutre is for students of the D-Chab at ETH Zurich, second semester.
                    </p>
                </div>
                <div className =" md:w-2/5 text_card">
                    <h2>
                    Slides
                    </h2>
                    <p className="text-gray-500 ">
                    Below you will find my notes for the tutorial session with tips for the series. These are in no way a substitute for the scripts or the lecture and should only be used as additional aids.

                    </p>
                </div>
            </div>
            <div className=" text_card_grid">
                <div className =" md:w-1/3 text_card_icon ">
                    <div>
                        <h2>
                            Ankis
                        </h2>
                        </div>
                        <div>
                        <p className="text-gray-500">
                            Here you can find Anki flashcards.
                            Created by Thea Ortner and Collin Hansen, revised by Lilly Malornry, with key concepts from ACOC I.
                     
                        </p>
                        </div>
                    <div>
                    <Link href="/download/HS23/ACOC_I_Anki.apkg" className = "icon_text_card" role="button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clip-rule="evenodd" />
                            </svg>
                        </Link >
                    </div>
                </div>
                <div className =" md:w-2/3 text_card">
                    <h2>
                    PVK session
                    </h2>
                    <p className="text-gray-500 ">
                        Will be anounced.

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
            {/* start of table */}


                <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                    <table className="w-full  text-left rtl:text-right text-secondary ">
                        <thead className="text-xs text-primary uppercase bg-gray-200  ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Topic
                                </th>
                                <th scope="col" className="px-6 py-3 hidden lg:block">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Slides
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Solutions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Organisation und Nomenklatur I
                                </th>
                                <td className="px-6 py-4 hidden lg:block ">
                                    25.09.23
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS23/ACOC_I_U1.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 1</Link>
                                </td>
                                <td className="px-6 py-4 text-transparent">

                                </td>   
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Nomenklatur II und Stereochemie I
                                </th>
                                <td className="px-6 py-4 hidden lg:block">
                                02.10.23
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/HS23/ACOC_I_U2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 2</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_1.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 1</Link>
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
 
export default HS23;