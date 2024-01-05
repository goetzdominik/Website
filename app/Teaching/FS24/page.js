import Link from "next/link";
const FS24 = () => {
    return ( 
        <div className="pt-12">   
            <h1 className="page_title" > 
                ACOC II
            </h1>
            <div className=" text_card_grid">
                <div className =" sm:w-3/5 text_card ">
                    <h2>
                    529-0012-03L Allgemeine Chemie II (OC)
                    </h2>
                    <p className="text-gray-500">
                    Slides and solutions for the exercise class, accompanying the ACOC II lecture by Prof. Chen. This lecutre is for students of the D-Chab at ETH Zürich, second semester.
                    </p>
                </div>
                <div className =" sm:w-2/5 text_card">
                    <h2>
                    Slides
                    </h2>
                    <p className="text-gray-500 ">
                    Below you will find my notes for the tutorial session with tips for the series. These are in no way a substitute for the scripts or the lecture and should only be used as additional aids.

                    </p>
                </div>
            </div>
            <div className=" text_card_grid">
                <div className =" sm:w-1/5 text_card ">
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
                        <Link href="/download/HS23/ACOC_I_Anki.apkg" className = " pt-2 p-4  text-primary hover:text-gray-500 dark:hover:text-blue-500  rounded-lg " role="button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                            </svg>
                        </Link >
                    </div>
                </div>
                <div className =" sm:w-4/5 text_card">
                    <h2>
                    Exercise Session
                    </h2>
                    <p className="text-gray-500 ">
                    My practice session takes place every Monday at 10:45 in HIL B21 and will be thought in german. To get to the room, enter the HIL (entrance at the information desk), go straight and take the small staircase up. Walk along the corridor to the staircase and go down one floor. Once there, take the right door and turn left; you'll find a small staircase going down. At the end of the stairs, turn right twice, and the room is at the end of the corridor. The aim of my practice is to teach you the theory for ACOC I and familiarize you with the exam format. Series will be submitted via your Polybox.

                    </p>
                </div>
            </div>
            <div> 
                {/* start of table */}
                <div className="relative overflow-x-auto shadow-md rounded-lg mt-8 ">
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
                                    Slides
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Solutions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Introduction
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                xx.02.24
                                </td>
                                <td className="px-6 py-4 ">
                                    {/* <Link href="/download/FS23/Zusammenfassung_ACACII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Zusammenfassung</Link> */}
                                </td>
                                <td className="px-6 py-4 ">
                                    {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
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