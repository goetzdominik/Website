import Link from "next/link";

const Library = () => {
    return ( 
        <div className="">   
            <h1 className="page_title" > 
                Library
            </h1>
            <div className=" text_card_grid">
                <div className =" md:w-3/5 text_card ">
                    <h2>
                    Disclaimer
                    </h2>
                    <p className="text-gray-500">
                        Here you will find useful documents for every subject I have taken so far. Part of them can also be found in the <Link className = "text-blue-600 hover:underline" href="https://vcs.ethz.ch/prufungssammlung/zusammenfassungen/" target="_blank">VCS</Link> collection or on 
                        the <Link className = "text-blue-600 hover:underline" href="https://burnoutvorprogrammiert.notion.site/burnoutvorprogrammiert/Basispr-fung-Repository-6a74b77af2d94c36af9211df7842263f" target="_blank">Basisprüfungs Repository</Link>  of fellow students. The other part consists of my private notes or summaries. Additionally, I have tried to limit myself to one document per subject. There is no guarantee of accuracy or completeness of the documents uploaded here. To access them, you need a valid ETH login.
                        Missing documents will be added soon.
                    </p>
                </div>
                <div className =" md:w-2/5 text_card">
                    <h2>
                    Slides
                    </h2>
                    <p className="text-gray-500 ">
                    Below, you'll find my notes for the practice session and tips on the series. These are by no means a substitute for the scripts or the lecture and should only be used as additional aids. To access them, you'll need a valid ETH login.

                    </p>
                </div>
            </div>

        

            <div className = " lg:grid-cols-3 grid gap-8 "> 
                <div className > 
                    {/* first table  */}
                    <h1 className = " page_subtitle">
                        Year 1
                    </h1>

                    <div> 
                        {/* start of table */}
                        <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                            <table className="w-full  text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-primary uppercase bg-gray-200  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Lecture
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Document
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        ACAC I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/ACACI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank"> Summary: Jonas Junker</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        ACAC II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/ACACII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PVK Script: Marius Lutz</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        ACOC I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/ACOCI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Tim Jürs</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        ACOC II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/ACOCII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Eduard Meier</Link>
                                        </td> 
                                    </tr> 

                            
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        ACPC I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/ACPCI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Formula Sheet: Andreas Gimpel</Link>
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        PC I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            {/* <Link href="/download/Bib/J1/PCI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                            TBA
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Biology I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/BIOI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Dominik Hunziker</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Biology II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/BIOII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Dominik Hunziker</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Analysis A&B
                                        </th>
                                        <td className="px-6 py-4 ">

                                            <li>
                                                <Link href="/download/Bib/J1/Analysis Zusammenfassung (1).pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PDF: Alina Popov</Link>
                                            </li>
                                            <li>
                                              <Link href="/download/Bib/J1/STATI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Goodnotes: Alina Popov</Link>
                                            </li>
                                            
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Statistics I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/STATI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Cheat Sheet: Thea Ortner</Link>
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Informatics I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/INFOI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Paul Nesemeier</Link>
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        BCB I: AC
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J1/BCBIrep.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Nickle Report: Dominik Götz</Link>
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Biology Practical
                                        </th>
                                        <td className="px-6 py-4 ">
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                            TBA
                                        </td> 
                                    </tr> 
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div>
                    {/* second table  */}
                    <h1 className = " page_subtitle">
                        Year 2
                    </h1>

                    <div> 
                        {/* start of table */}
                        <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                            <table className="w-full  text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-primary uppercase bg-gray-200  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Lecture
                                        </th>
                                        <th scope="col" className="px-6 py-3 ">
                                            Document
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        AC I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/ACI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Script: Mezzeti</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        PC II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/PC_2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Formula Sheet: Dominik Götz</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Statsitcs II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/STATII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank"> Cheat Sheet: Kim Ji In</Link>
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        OC I
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/OCI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Ankis: Kirill Volynskiy</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        OC II
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA
                                            {/* <Link href="/download/Bib/J2/OCII.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Physics I&II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/Physik_1_2.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Andreas Gimpel & Notes: Dominik Götz</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Pharma & Tox I&II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <li>
                                            <Link href="/download/Bib/J2/P&TI.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Zusammenfassung PT I&II: Georg Bailer</Link>
                                            </li>
                                            <li>
                                            <Link href="/download/Bib/J2/PPharma Thea-apkg" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Ankis PT I&II: Thea Ortner</Link>
                                            </li>
                                            <li>
                                            <Link href="/download/Bib/J2/Pharmatox I+II Medikamente.apkg" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Ankis PT I&II: Dominik Götz</Link>
                                            </li>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Analytical Chemistry
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <li><Link href="/download/Bib/J2/Elementanalytik_XRF.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Elementanalytik & XRF </Link></li>
                                            <li><Link href="/download/Bib/J2/Trennmethoden.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Trennmethoden</Link></li>
                                            <li><Link href="/download/Bib/J2/Spektren.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Summary: Spectra</Link></li>
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Biochemistry
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/Lernziele & Glocki.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">Lernziele & Glocki</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Systembiology
                                        </th>
                                        <td className="px-6 py-4 ">
                                            <Link href="/download/Bib/J2/SYSBIO_ZSMF.pd" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link>
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        BCB III: OC
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        BCB IV: Biophysics
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Research Ethics
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
        
                    </div>
                </div>
                <div className > 
                    {/* first table  */}
                    <h1 className = " page_subtitle">
                        Year 3
                    </h1>

                    <div> 
                        {/* start of table */}
                        <div className="relative overflow-x-auto shadow-md rounded-lg mt-8  ">
                            <table className="w-full  text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-primary uppercase bg-gray-200  ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Lecture
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Document
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        MSB I 
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        MSB II
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Bioinformatics 
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Systemsbiology
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        NACs
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Proteins and Lipids 
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        OC for BCB
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        OC III
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        OC IV
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA
                                           {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Climate Matters
                                        </th>
                                        <td className="px-6 py-4 ">
                                        TBA
                                           
                                                 {/* < Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Space Research
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        RNA-Biology
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Research Cycle in genomics
                                        </th>
                                        <td className="px-6 py-4 ">
                                            TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Chemistry of Soft Materials 
                                        </th>
                                        <td className="px-6 py-4 ">
                                        TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 
                                    <tr className="odd:bg-white  even:bg-gray-0 border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        MSB
                                        </th>
                                        <td className="px-6 py-4 ">
                                           TBA
                                            {/* <Link href="/download/FS23/Periodensystem.pdf" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  target="_blank">PSE</Link> */}
                                        </td> 
                                    </tr> 

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>
     );
}
 
export default Library;