import Link from "next/link";
const FS24 = () => {
    return ( 
        <div className="">   
            <h1 className="page_title" > 
                ACOC II
            </h1>
            
            <div className=" text_card_grid">
                {/* <div   className="md:w-1/5 text_card" >

                </div> */}
                <div   className="md:w-3/5 text_card" >
                <h2>
                Announcement
                    </h2>
                <p className="text-gray-500">
                    Due to the info event for Bachlor Students this weeks exercise session has been moved to Tuesday (23.04) 09:45-10:30. We will meet in HCI H2.1, I will be there 15min before and after for any questions.
                    </p>
                </div>
                {/* <div   className="md:w-1/5 text_card" >

                </div> */}

                <div className =" md:w-3/5 text_card ">
                    <h2>
                    529-0012-03L Allgemeine Chemie II (OC)
                    </h2>
                    <p className="text-gray-500">
                    Slides and solutions for the exercise session, accompanying the ACOC II lecture by Prof. Chen. This lecutre is for students of the D-Chab at ETH Zürich, second semester. Students are introduced to reactions and their mechanism, aswell as their selectivity.
                    </p>
                </div>
                <div className =" md:w-2/5 text_card_icon ">
                    <div>
                        <h2>
                            Ankis
                        </h2>
                    </div>
                        <div>
                        <p className="text-gray-500">
                        Here you can find Anki flashcards.
                            Created by Thea Ortner, revised by Lilly Malornry, with key concepts from ACOC II.
                        </p>
                    </div>
                    <div>
                        <Link href="/download/FS24/ACOCII.apkg" className = " icon_text_card " role="button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                            </svg>
                        </Link >
                    </div>
                </div>
            </div>
            <div className=" text_card_grid">
                
                <div className =" md:w-2/5 text_card">
                    <h2>
                    Slides
                    </h2>
                    <p className="text-gray-500 ">
                    Below you will find my notes for the exercise session with tips for the series. These are in no way a substitute for the scripts or the lecture and should only be used as additional aids.

                    </p>
                </div>
                <div className =" md:w-3/5 text_card">
                    <h2>
                    Exercise Session: Focus Group
                    </h2>
                    <p className="text-gray-500 ">
                    My practice session takes place every Wednesday at 15:45 in HCI J8 and will be thought in German.
                    It is also a focus group, where students enroll if they think they need special support in organic chemistry. We will focus on understanding the mechanisms rather then gaming the exam. Series will be submitted via your Polybox.
                    
                    </p>
                </div>
            </div>
            <div> 
                {/* start of table */}
                <div className="relative overflow-x-auto shadow-md rounded-lg mt-8 ">
                    <table className="w-full  text-left rtl:text-right text-secondary ">
                        <thead className="text-xs text-primary uppercase bg-gray-200  ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Topic
                                </th>
                                <th scope="col" className="px-6 py-3 hidden md:block">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Slides
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Menti
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Solutions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Introduction
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                28.02.2024
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOC_II_U1.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 1</Link>
                                </td>
                                <td>

                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/Handouts.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Handouts</Link>
                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Radical Stability 
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                06.03.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/Presentation2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 2  </Link>
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                
                                    <Link href="/download/FS24/Übung 2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">  Menti 2</Link>
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOC II LÖSUNG 2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 2</Link>
                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Acidity 
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                13.03.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOCII_U3.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 3 </Link>
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="https://www.mentimeter.com/app/presentation/al43ydvekwpy6k5j943f48kptb97djnu/first/edit" target="_blank">Menti 3</Link>
                                   
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L3.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 3</Link>
                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Hammett 
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                19.03.2024
                                </td>
                                <td className="px-6 py-4 ">
                                {/* <Link href="/download/FS24/ACOCII_U3.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 3 </Link> */}
                                no slides 
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="https://www.mentimeter.com/app/presentation/aln8dmybzxmc978uy3xsdvxziw96ed52/first/edit" target="_blank">Menti 4</Link>
                                   
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L4.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 4</Link>
                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Recap 
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                27.03.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOC_II_U5.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 5 </Link>
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOCII_U5_menti.pdf" target="_blank">Menti 5</Link>

                                </td>
                                <td className="px-6 py-4 ">
                                    {/* <Link href="/download/FS24/ACOCII_FS24_L4.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 4</Link> */}
                                    <p>no solution </p>
                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                S<sub>E</sub>Ar
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                09.04.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOC_II_U6.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 6 </Link>
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOCII_U6_menti.pdf" target="_blank">Menti 5</Link>

                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L5.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 5</Link>

                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Detailed S<sub>E</sub>Ar
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                17.04.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOC_II_U7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 7 </Link>
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOC_II_U7_menti.pdf" target="_blank">Menti 7</Link>

                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L6.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 6</Link>

                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Functional Group Conversion
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                23.04.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOC_II_U8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 8 </Link>
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOC_II_U8_menti.pdf" target="_blank">Menti 8</Link>

                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 7</Link>

                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                No Session
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                30.04.2024
                                </td>
                                <td className="px-6 py-4 ">
                                {/* <Link href="/download/FS24/ACOC_II_U8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 8 </Link> */}
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                {/* <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOC_II_U8_menti.pdf" target="_blank">Menti 8</Link> */}

                                </td>
                                <td className="px-6 py-4 ">
                                    {/* <Link href="/download/FS24/ACOCII_FS24_L7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 7</Link> */}

                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Sn1 and Sn2
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                07.05.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOC_II_U10.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 10 </Link>
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOC_II_U10_menti.pdf" target="_blank">Menti 10</Link>

                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 8</Link>

                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                Fürst-Plattner
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                14.05.2024
                                </td>
                                <td className="px-6 py-4 ">
                                <Link href="/download/FS24/ACOC_II_U11.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 11 </Link>
                                
                                </td>
                                    
                                <td className="px-6 py-4 ">
                                    
                                {/* <Link className = "text-blue-600 hover:underline" href="/download/FS24/ACOC_II_U10_menti.pdf" target="_blank">Menti 10</Link> */}

                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS24/ACOCII_FS24_L9.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Solution 9</Link>

                                </td> 
                            </tr> 
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
     );
}
 
export default FS24;