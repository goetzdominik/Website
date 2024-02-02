import Link from "next/link";
const HS23 = () => {
    return ( 
        <div className="">   
            <h1 className="page_title" > 
                ACOC I 
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
                    <Link href="/download/HS23/ACOC_I_Anki .apkg" className = "icon_text_card" role="button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clip-rule="evenodd" />
                            </svg>
                        </Link >
                    </div>
                </div>
                <div className =" md:w-2/3 text_card">
                    <h2>
                    Exercise Session
                    </h2>
                    <p className="text-gray-500 ">
                    The session takes place every Monday at 10:45 in HIL B21 and will be tought in german. To get to the room, enter the HIL (entrance at the information desk), go straight and take the small stairs (next to the elevator) up. Walk along the corridor to the staircase and go down one floor. Once there, take the right door and turn left; you'll find a small staircase going down. At the end of the stairs, turn right twice, and the room is at the end of the corridor. The aim of my practice is to teach you the theory for ACOC I and familiarize you with the exam format. Series will be submitted via your Polybox.

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
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Nomenklatur III und Lewis-Strukturen I
                </th>
                <td className="px-6 py-4 hidden lg:block">
                09.10.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U3.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 3</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 2</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Nomenklatur IV und Chiralität I
                </th>
                <td className="px-6 py-4 hidden lg:block">
                16.10.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U4.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 4</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_3.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 3</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Chiralität II und Fischer I
                </th>
                <td className="px-6 py-4 hidden lg:block">
                23.10.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U5.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 5</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_4.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 4</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Symmetrieelemente
                </th>
                <td className="px-6 py-4 hidden lg:block">
                30.10.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U6.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 6</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_5.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 5</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Molekülorbitale
                </th>
                <td className="px-6 py-4 hidden lg:block">
                06.11.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 7</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_6.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 6</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Aromaten
                </th>
                <td className="px-6 py-4 hidden lg:block">
                13.11.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 8</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 7</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Thermochemie
                </th>
                <td className="px-6 py-4 hidden lg:block">
                20.11.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U9.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 9</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 8</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Konformationsanalyse I
                </th>
                <td className="px-6 py-4 hidden lg:block">
                27.11.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U10.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 10</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 9</Link>
                </td>
            </tr> 
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Konformationsanalyse II
                </th>
                <td className="px-6 py-4 hidden lg:block">
                04.12.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U11.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 11</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_10.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 10</Link>
                </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Thermodynamik und Kinetik
                </th>
                <td className="px-6 py-4 hidden lg:block">
                11.12.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U12.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 12</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_11.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 11</Link>
                </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Prüfungsvorbereitung
                </th>
                <td className="px-6 py-4 hidden lg:block">
                18.12.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_U13.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Week 13</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/ACOC_I_HS23_Loesung_12.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Solution 12</Link>
                </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                Kahoot
                </th>
                <td className="px-6 py-4  hidden lg:block">
                18.12.23
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/kahoot_aufg.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Question</Link>
                </td>
                <td className="px-6 py-4">
                    <Link href="/download/HS23/kahoot_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Answer</Link>
                </td>
            </tr>
            
           
        </tbody>
    </table>
</div>

            </div>
        </div>
     );
}
 
export default HS23;