import Image from "next/image";
import Link from "next/link";
const Contact  = () => {
    return (  
        <div className = "pt-12">
            <h1 className="page_title" > 
                Contact 
            </h1>
            <div className=" text_card_grid pt-8">
                <div className =" sm:w-2/6 text_card  ">
                    <h1>
                    
                        <Link className = "text-blue-600 hover:underline" href="https://www.linkedin.com/in/dominikgötz/" target="_blank">Linked-In</Link>

                    </h1>
                    <p> 
                        If you are interested what I did in the past and want keep upo with what I am doing, follow me on linked-In!
                    </p>
                </div>
                <div className =" sm:w-2/6 text_card">
                <h1>
                        <Link className = "text-blue-600 hover:underline"href={`mailto:${'dgoetz@ethz.ch'}`}target="_blank">Mail</Link>
                        </h1>
                    <p className=" ">
                        
                        If you want to get in touch with me, this is the fastest way! Also if you encounter a bug, pleaes reoprt this to me via mail.
                    </p>
                </div>
                <div className = "sm:w-2/6 text_card ">
                    <h1>
                    <Link className = "text-blue-600 hover:underline" href="https://github.com/goetzdominik" target="_blank">Git-Hub</Link>
                    </h1>
                    <p>
                        On Git-Hub you can fnd all the codes that I referenced in presentations and soon also the code for this hompage.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact ;