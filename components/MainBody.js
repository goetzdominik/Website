import Image from "next/image";

const MainBody = () => {
    return ( 

           <div> 
            <div className="page_title" >
                <h1>Welcome</h1>
            </div>
            
            <div className = "  text_card_grid ">
              
                <div className = " sm:w-3/5 text_card  " >
                    <p className = "">   This website has accompanying content for the exercise class I am currently teaching, ACOC II. It also contains all the content 
                        from past exercise classes. Under Library you can find useful documents to every lecture I have taken.
                    </p>
                </div>
                <div className = " sm:w-2/5 text_card " >
                    <p className = "">   

                        It also acts as my personal homepage, where I store posters from my presentations so they are available online. You can also find out more about what I am currently doing.
                    </p>
                </div>
            </div>
            </div>
     );
}
 
export default MainBody;