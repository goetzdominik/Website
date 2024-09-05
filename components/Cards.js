
import Link from "next/link";
import {Image} from "@nextui-org/react";
const Cards = () => {
    return ( 
        <div>
            <h3 className=" page_title  ">Teaching</h3>
            <div className="card_layout_4" >
                        
            <Link className = "card   "  href = "/Teaching/HS24">
                        <Image isZoomed src="/img/Main/OCI.jpg" fallbackSrc = "/img/Placeholder/filler_2.png"
                        alt="NextUI hero Image with delay"  placeholder='blur' fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> OC I </span>
                            <span className = "block text-secondary dark:text-gray-400"> Slides and Mentis. </span>
                        </div>
                        <div className = "badge_left">
                            <span>HS24</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                        <div className = "badge_bottom_left">
                            <span>currently</span>
                            
                        </div>
                    </Link>

                    {/* <Link className = "card   "  href = "/PVK/ACOCII">
                        <Image isZoomed src="/img/Main/PVK_ACOCII.JPG" fallbackSrc = "/img/Placeholder/filler_2.png"
                        alt="NextUI hero Image with delay"  placeholder='blur' fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> PVK: ACOC II </span>
                            <span className = "block text-secondary dark:text-gray-400"> Script and Recodings of the PVK </span>
                        </div>
                        <div className = "badge_left">
                            <span>FS24</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link> */}
                    {/* Card for ACOCII exercise session    */}
            <Link className = "card   "  href = "/Teaching/FS24">
                        <Image isZoomed src="/img/Main/ACOCII.jpg" fallbackSrc = "/img/Placeholder/filler_2.png"
                        alt="NextUI hero Image with delay"  placeholder='blur' fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> ACOC II </span>
                            <span className = "block text-secondary dark:text-gray-400"> Slides and Mentis.</span>
                        </div>
                        <div className = "badge_left">
                            <span>FS24</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
                     <Link className = "card   "  href = "/Teaching/HS23">
                        <Image  isZoomed src="/img/Main/ACOCI.jpg"  alt="ACOCI" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> ACOC I </span>
                            <span className = "block text-secondary dark:text-gray-400"> Slides and Solutions.</span>
                        </div>
                        <div className = "badge_left">
                            <span>HS23</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
          
            <Link  className = "card  "   href = "/Teaching">
                    <Image isZoomed src="/img/Main/past_teachings.jpeg" alt="ACACII" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> Past Teachings </span>
                            <span className = "block text-secondary dark:text-gray-400 "> All previous exercise session.  </span>
                        </div>
                       
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
           
                    {/* <Link className = "card  "   href = "/Teaching/HS22">
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
                        
                    </Link> */}
                   
                   
                </div>
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
 
export default Cards;