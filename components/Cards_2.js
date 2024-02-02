
import {Image} from "@nextui-org/react";
import Link from "next/link";
const Cards_2 = () => {
    return (  

        <div>
            <h3 className=" page_subtitle">Past</h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8  text-primary dark:text-gray-100" >

                    <Link className = "card   "  href = "/Teaching/HS23">
                        <Image  isZoomed src="/img/Main/ACOCI.jpg"  alt="ACOCI" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> ACOC I </span>
                            <span className = "block text-secondary dark:text-gray-400"> All slides and solutions.</span>
                        </div>
                        <div className = "badge_left">
                            <span>HS23</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
                    <Link  className = "card  "   href = "/Teaching/FS23">
                    <Image isZoomed src="/img/Main/ACACII.jpg" alt="ACACII" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> ACAC II </span>
                            <span className = "block text-secondary dark:text-gray-400 "> Slides and useful Documents.   </span>
                        </div>
                        <div className = "badge_left">
                            <span>FS23</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
                    <Link className = "card  "   href = "/Teaching/HS22">
                    <Image isZoomed src="/img/Main/info.jpg" alt="InforamticsI" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Informatics I  </span>
                            <span className = "block text-secondary dark:text-gray-400 "> Slides and Ankis for the lecture.</span>
                        </div>
                        <div className = "badge_left">
                            <span>HS22</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                        
                    </Link>
                    <Link className = "card  "   href = "/Library">
                    <Image isZoomed src="/img/Main/bib.jpg" alt="Library" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Library </span>
                            <span className = "block text-secondary dark:text-gray-400 "> Useful document for each lecture I have taken.</span>
                        </div>
                    </Link>
                   
                </div>
        </div>
    );
}
 
export default Cards_2;