
import {Image} from "@nextui-org/react";
import Link from "next/link";
const Cards_2 = () => {
    return (  

        <div>
            <h3 className=" page_title  ">Past Teachings</h3>
            <div className="mt-8 grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 lg:pl-28 lg:pr-28 pl-6 pr-6 sm:p-0 gap-8  text-primary dark:text-gray-100" >
                        
            <Link className = "card   "  href = "/Teaching/HS24">
                        <Image isZoomed src="/img/Main/OCI.JPG" fallbackSrc = "/img/Placeholder/filler_2.png"
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

                  
                    {/* Card for ACOCII exercise session    */}
                    <Link className = "card   "  href = "/PVK/ACOCII">
                        <Image isZoomed src="/img/Main/PVK_ACOCII.jpg" fallbackSrc = "/img/Placeholder/filler_2.png"
                        alt="NextUI hero Image with delay"  placeholder='blur' fill={true}/>
                        
                        <div className = "m-4">
                            <span className =" font-bold"> PVK:ACOC II </span>
                            <span className = "block text-secondary dark:text-gray-400"> Slides and Mentis.</span>
                        </div>
                        <div className = "badge_left">
                            <span>FS24</span>
                            
                        </div>
                        <div className = "badge_right">
                            <span>AI generated</span>
                            
                        </div>
                    </Link>
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
          
            <Link  className = "card  "   href = "/Teaching/FS23">
                    <Image isZoomed src="/img/Main/ACACII.jpg" alt="ACACII" fallbackSrc = "/img/Placeholder/filler_2.png"  fill={true}/>
                        <div className = "m-4">
                            <span className =" font-bold"> ACAC II </span>
                            <span className = "block text-secondary dark:text-gray-400 "> Slides and Documents.   </span>
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
                   
                   
                </div>
               
            

                    
                   
                </div>

    );
}
 
export default Cards_2;