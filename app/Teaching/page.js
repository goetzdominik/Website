import AI_Footer from "@/components/AI_Footer";
import Card from "@/components/Card";
const Teaching = () => {
    return ( 
        <div>
            <h3 className="page_title"> All Exercise Session</h3>
            <div className="mt-8 grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 lg:pl-28 lg:pr-28 pl-6 pr-6 sm:p-0 gap-8  text-primary dark:text-gray-100" >
             <Card
                    href="/Teaching/FS25"
                    imgSrc="/img/Main/FS25.jpg"
                    imgAlt="NextUI hero Image with delay"
                    title="ACOC II (up next)"
                    description="Slides and Mentis.**"
                    semester="FS25"
                    // aiTag="AI generated"
                    // badgeBottomLeft="up next"
                />
                <Card
                    href="/Teaching/HS24"
                    imgSrc="/img/Main/OCI.jpg"
                    imgAlt="NextUI hero Image with delay"
                    title="OC I"
                    description="Slides and Mentis.**"
                    semester="HS24"
                    // aiTag="AI generated"
                    // remark="currently"
                />
                <Card
                    href="/Teaching/FS24"
                    imgSrc="/img/Main/ACOCII.jpg"
                    imgAlt="NextUI hero Image with delay"
                    title="ACOC II"
                    description="Slides and Mentis.**"
                    semester="FS24"
                    // aiTag="AI generated"
                />
            </div>
            <div className="mt-8 grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 lg:pl-28 lg:pr-28 pl-6 pr-6 sm:p-0 gap-8  text-primary dark:text-gray-100" >
                <Card
                    href="/Teaching/HS23"
                    imgSrc="/img/Main/ACOCI.jpg"
                    imgAlt="ACOCI"
                    title="ACOC I"
                    description="Slides and Solutions.**"
                    semester="HS23"
                    // aiTag="AI generated"
                /> 
                <Card
                    href="/Teaching/FS23"
                    imgSrc="/img/Main/ACACII.jpg"
                    imgAlt="ACAC II"
                    title="ACAC II"
                    description="Slides and Solutions.**"
                    semester="FS23"
                    // aiTag="AI generated"
                /> 
                <Card
                    href="/Teaching/HS22"
                    imgSrc="/img/Main/info.jpg"
                    imgAlt="Informatik I"
                    title="Informatik I"
                    description="Slides and Solutions.**"
                    semester="HS22"
                    // aiTag="AI generated"
                /> 
            </div>
            <AI_Footer/>
        </div>
        
     );
}
 
export default Teaching;    