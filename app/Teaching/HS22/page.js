import Link from "next/link";

const HS22 = () => {
    return ( 
        <div className="p-t16 md:pt-12">   
        <h1 className="page_title" > 
            Informatik I 
        </h1>
        <div className=" text_card_grid">
            <div className =" md:w-2/5 text_card ">
                <h2>
                529-0001-00L - Informatics I
                </h2>
                <p className="text-gray-500">
                Informatics I Lecture for Biochemistry, Chemistry, Chemical Engineering, and Interdisciplinary Natural Sciences - Biochemical-Physical Specialization.
                </p>
            </div>
            <div className =" md:w-3/5 text_card">
                <div>
                    <h2>
                    Padlett
                    </h2>
                </div>
                <div>
                    <p className="text-gray-500 ">
                    Padlet with important information for organizing the tutorial session. Additionally, there is a link to a private repository containing many useful documents for the first year at the Department D-CHAB.

                    </p>
                </div>
                <div>
                    <Link href="https://padlet.com/dogoetz/informatik-1-padlet-o6g8187ziqq88diz" className = " pt-2 p-4  text-primary hover:text-gray-500 dark:hover:text-blue-500  rounded-lg " role="button" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                      </svg>
                    </Link >
                </div>
            </div>
        </div>
        <div className=" text_card_grid">
            <div className =" md:w-1/5 text_card grid-cols-[auto_100px] ">
                <div>
                    <div>
                        <h2>
                            Ankis
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500">
                        Here you can find the most important flashcards.
                        </p>
                    </div>
                </div>
                <div>
                    <Link href="/download/HS22/Anki.zip" className = "ml-8 pt-2 p-4  text-primary hover:text-gray-500 dark:hover:text-blue-500  rounded-lg " role="button" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                        </svg>
                    </Link >
                </div>
            </div>
            

            <div className =" md:w-4/5 text_card">
                <h2>
                Slides
                </h2>
                <p className="text-gray-500 ">
                Below you will find my notes for the tutorial session with tips for the series. These are in no way a substitute for the scripts or the lecture and should only be used as additional aids.

                </p>
            </div>
        </div>
        <div> 
                {/* start of table */}
                <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                    <table className="w-full  text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-primary uppercase bg-gray-200  ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Thema
                                </th>
                                <th scope="col" className="px-6 py-3 hidden md:block">
                                    Datum
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Folien 
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Zusätzliches  
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Einführung
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                29.09.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_1.md" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week1</Link>
                                </td>
                                <td className="px-6 py-4 ">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 1
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                06.10.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_2.md" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week2</Link>
                                </td>
                                <td className="px-6 py-4  ">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 2
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                13.10.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_3.md" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week3</Link>
                                </td>
                                <td className="px-6 py-4  ">
                                <Link href="/download/HS22/Info_I_3_img.png" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Sandbox</Link>
                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 2
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                20.10.2022
                                </td>
                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_4.md" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week4</Link>
                                </td>
                                <td className="px-6 py-4  ">

                                </td>
                            </tr> 

                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 3
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                27.10.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_5.md" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week5</Link>
                                </td>
                                <td className="px-6 py-4  ">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 3
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                03.11.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_6.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week6</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 

                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 3
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                10.11.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week7</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Arrays und Strings
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                17.11.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week8</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 4
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                24.11.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week9</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Feedback
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                01.12.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_9.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week10</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 

                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 5 und Reihen in C++
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                08.12.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_10.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week11</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Abgabe Ex5 und Ex7
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                15.12.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_11.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week12</Link>
                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Exercise 7
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                22.12.2022
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/HS22/Info_I_12.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week13</Link>
                                </td>
                                <td className="px-6 py-4">
                                <Link href="/download/HS22/Info_Klausur.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Klausur</Link>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>

            </div>
    </div>
        

     );
}
 
export default HS22;