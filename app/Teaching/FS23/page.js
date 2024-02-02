import Link from "next/link";
const FS23 = () => {
    return (  
        <div className="">   
            <h1 className="page_title" > 
                ACAC II
            </h1>
            <div className=" text_card_grid">
                <div className =" md:w-1/3 text_card ">
                    <h2>
                    529-0012-02L Algemeine Chemie II 
                    </h2>
                    <p className="text-gray-500">
                    General Chemistry 2, Inorganic Chemistry "Lecture for Biochemistry, Chemistry, Chemical Engineering, and Interdisciplinary Natural Sciences - Biochemical-Physical Specialization.
                    </p>
                </div>
                <div className =" md:w-1/3 text_card">
                    <h2>
                    Slides
                    </h2>
                    <p className="text-gray-500 ">
                    Below you will find my notes for the tutorial session with tips for the series. These are in no way a substitute for the scripts or the lecture and should only be used as additional aids.

                    </p>
                </div>
                <div className =" md:w-1/3 text_card_icon ">
                    <div>
                        <h2>
                            Ankis
                        </h2>
                        </div>
                        <div>
                        <p className="text-gray-500">
                        Ankis (flashcards) made by me and Sophie Hell containing the most important cristal strucutres and formulas.
                        </p>
                        </div>
                    <div>
                    <Link href="/download/FS23/ACACII.apkg" className = " icon_text_card"role="button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                            </svg>
                        </Link >
                    </div>
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
                                    Folien vorher
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Folien  nachher
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Hilfsmittel
                                </th>
                                <td className="px-6 py-4 hidden md:block ">
                                04.03.2023
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS23/Zusammenfassung_ACACII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Zusammenfassung</Link>
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link>
                                </td> 
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Reaktionen
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                04.02.23
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/Reaktionen_q_a.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Reaktionen</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/Stoffliste.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Stoffliste</Link>
                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Einführung
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                05.03.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_1.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_1_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                VSEPR
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                13.03.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_2_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                MO und Kugelpackung
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                20.03.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_3.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_3_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Haber-Born
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                27.03.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_4.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_4_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Hess'scher Zyklus
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                03.04.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_5.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_5_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Prüfungsaufgabe
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                17.04.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_6.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_6_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Prüfungsaufgabe und  Recall Symmetrie
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                24.04.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_7.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_7_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr>  
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Prüfungsaufgabe, Recall MO
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                8.05.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_8.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_8_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr> 
                            <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Klausur 2020 Sommer
                                </th>
                                <td className="px-6 py-4 hidden md:block">
                                15.05.2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_9.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Vorher</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/download/FS23/ACAC_II_9_los.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Nachher</Link>
                                </td>
                            </tr> 
                        
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
 
export default FS23;