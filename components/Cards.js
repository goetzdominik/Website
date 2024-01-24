
import Link from "next/link";
import {Image} from "@nextui-org/react";
const Cards = () => {
    return ( 
        <div>
            <h3 className=" page_subtitle  ">Currently</h3>
            <div className="mt-8 grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-4 gap-8  text-primary dark:text-gray-100" >

                    <Link className = "card   "  href = "/Teaching/FS24">
                        <Image isZoomed src="/img/Main/ACOCII.jpg" fallbackSrc = "/img/Placeholder/filler_2.png"
                        alt="NextUI hero Image with delay"  placeholder='blur' fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> ACOC II </span>
                            <span className = "block text-gray-500 dark:text-gray-400"> All slides and solutions for my currrent exercise class.</span>
                        </div>
                        <div className = "badge_left">
                            <span>FS24</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
                    <Link className = "card  "   href = "/Presentation">
                    <Image isZoomed src="/img/Main/RBTL_big.jpg" fallbackSrc = "/img/Placeholder/filler_2.png" alt="Presentation"fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Presentations </span>
                            <span className = "block text-gray-500 dark:text-gray-400 "> All presentation accompanying posters.  </span>
                        </div>
                    </Link>
                    <Link className = "card  "  href ="/Contact">
                    <Image isZoomed src="/img/Main/contact.jpg" fallbackSrc = "/img/Placeholder/filler_2.png"alt="Contact"fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Contact Me</span>
                            <span className = "block text-gray-500 dark:text-gray-400 ">  Get in Touch with me!</span>
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
                    <Link className = "card  "  href ="/About">
                    <Image isZoomed src="/img/Main/dominik.jpg" fallbackSrc = "/img/Placeholder/filler_2.png" alt="About" fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> About Me</span>
                            <span className = "block text-gray-500 dark:text-gray-400 ">  More information about this website and the content.</span>
                        </div>
                    </Link>
                </div>
        </div>

     );
}
 
export default Cards;