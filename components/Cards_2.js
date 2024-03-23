
import {Image} from "@nextui-org/react";
import Link from "next/link";
const Cards_2 = () => {
    return (  

        <div>
            <h3 className=" page_title mt-6  ">Personal</h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8  text-primary dark:text-gray-100" >

            <Link className = "card  "   href = "/Library">
                    <Image isZoomed src="/img/Main/bib.jpg" alt="Library" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Library </span>
                            <span className = "block text-secondary dark:text-gray-400 "> Useful documents for all lectures I have taken.</span>
                        </div>
                    </Link>
            <Link className = "card  "   href = "/Presentation">
                    <Image isZoomed src="/img/Main/RBTL_big.jpg" fallbackSrc = "/img/Placeholder/filler_2.png" alt="Presentation"fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Presentations </span>
                            <span className = "block text-secondary dark:text-gray-400 "> All presentation accompanying posters.  </span>
                        </div>
                    </Link>
                   
                    <Link className = "card  "  href ="/About">
                    <Image isZoomed src="/img/Main/dominik.jpg" fallbackSrc = "/img/Placeholder/filler_2.png" alt="About" fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> About</span>
                            <span className = "block text-secondary dark:text-gray-400 ">  More information about this website, the content and me.</span>
                        </div>
                    </Link>
                    <Link className = "card  "  href ="/Contact">
                    <Image isZoomed src="/img/Main/contact.jpg" fallbackSrc = "/img/Placeholder/filler_2.png"alt="Contact"fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Contact Me</span>
                            <span className = "block text-secondary dark:text-gray-400 ">  Get in Touch with me!</span>
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
                    
                   
                </div>
        </div>
    );
}
 
export default Cards_2;