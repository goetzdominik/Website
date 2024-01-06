import Link from "next/link";
import {Image} from "@nextui-org/react";
const Presentation = () => {
    return ( 
        <div className = "pt-12">
            <h1 className="page_title" > 
                Presentations 
            </h1>
            
            <h1 className="page_subtitle" > 
            Important Mutations for Phenotype Difference in Staphylococcus Aureus 6850 
            </h1>
            <div className=" flex flex-col p-4 bg-white  md:p-4 pt-8 gap-8  text-primary  lg:flex-row">
                <div className =" lg:w-1/2  poster_card  ">
                <Link className = "card   "  href = "/download/Presentation/Poster_1_Dominik_Gotz.pdf"  role="button" target="_blank"> 
                        <Image src="/img/Poster_1.png" alt="ACOCII" fill = {true}/>
                        
                        
                        
                    </Link>
                </div>
                <div className =" lg:w-1/2 text_card ">
                    
                    <h2 className ="p-4 text-lg">
                    Abstract 
                    </h2>
                    <p className="text-gray-500 ">
                    Staphylococcus aureus and Pseudomonas aeruginosa often occur together in polymicrobial diseases [1] such as in cystic fibrosis [2] and their interactions cause an increase in β-lactam antibiotic resistance [3] which can severely complicate the treatment. To better understand the adaptations of the submissive S. aureus we investigated correlations between data for the 6850 strain, obtained by Niggli et al. (2023) [4]. We used RStudio [5] in combination with ChatGPT [6], which was exclusively used for code generation and debugging. We then performed Linear regression on the phenotype data of 44 S. aureus 6850 clones and no correlation with an R-squared over 0.1 was found. To further investigate the interaction, a principal component analysis (PCA) was performed, which yielded a good separation depending on the presence or absence of P. aeruginosa supernatant and between low and high growers. Hierarchical clustering was performed on this data to identify patterns. Additionally a PCA was done for the genotype data, and we found the best separation between evolution conditions to be along PC2 and PC6. Translating the established phenotype clusters we obtained similar clusters in the genotype data. We further inspected the loadings of the genotype PCs and selected significant mutations in proteins that cause this separation and related their functions to the loadings of the phenotype PCA. Some of the selected mutations possibly contribute to the increased antibiotic resistance. Through better understanding the interaction between S. aureus and P. aeruginosa treatments for these polymicrobial diseases could be improved and help over 150.000 people [7] that are affected world wide.
                    <Link href="/download/Presentation/Abstract Dominik Goetz.pdf" className = " pt-2 p-8 text-primary hover:text-gray-500 dark:hover:text-blue-500  rounded-lg " role="button" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 m-2 h-6">
                                <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
                            </svg>
                        </Link >
                    </p>
                </div>
                
            </div>

        </div>
     );
}
 
export default Presentation;