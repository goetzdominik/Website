import Image from "next/image";
import Link from "next/link";
const Contact  = () => {
    return (  
        <div className = "">
            <h1 className="page_title" > 
                Contact 
            </h1>
            <div className=" text_card_grid pt-8 ml-24 mr-24">
                <div className =" md:w-3/6 text_card  ">
                    <h1>
                    
                        <Link className = "text-blue-600 hover:underline" href="https://www.linkedin.com/in/dominikgötz/" target="_blank">Linked-In</Link>

                    </h1>
                    <p> 
                        If you are interested what I did in the past and want to keep up with what I am doing, follow me on linked-In!
                    </p>
                </div>
              
                <div className = "md:w-3/6 text_card ">
                    <h1>
                    <Link className = "text-blue-600 hover:underline" href="https://github.com/goetzdominik" target="_blank">GitHub</Link>
                    </h1>
                    <p>
                        On GitHub you can find all the codes that I referenced in presentations and soon also the code for this homepage.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact ;