const About = () => {
  return (  

    <div className = "">   
     <h1 className="page_title" > 
                About
                {/* test\ */}
            </h1>
            <div className=" text_card_grid">
                <div className =" md:w-3/5 text_card ">
                    <h2>
                    This Home page 
                    </h2>
                    <p className="text-gray-500">
                    Welcome to my homepage! Initially created as a resource for my students, this site has 
                    evolved into both a teaching tool and a personal space where I share my work and ideas.
                    Originally, this site was designed to share slides with my students, moving away from 
                    traditional services like Polybox. Inspired by my computer science flatmates, I embarked 
                    on this project.
                    Over time it has undergone various redesigns serving not only as an educational platform but also as my personal online space.
                    Here, you can access my teaching materials, view my posters, and learn more about my projects. Looking ahead, I plan to showcase our exciting work in the Student Bio Lab.
                    If you're interested in my work or have any queries, feel free to get in touch! 
                    </p>
                </div>
                <div className =" md:w-2/5 text_card">
                    <h2>
                    Me 
                    </h2>
                    <p className="text-gray-500 ">
                    Hello! My name is Dominik, a Biochemistry - Chemical Biology student in my 6th semester at ETH Zurich.As a teaching assistant, I am deeply passionate about organic chemistry, chemical biology, and bioinformatics. I recently started branching out into the materials department, because of their work with soft 
                    materials. 
                    
                    

                    </p>
                    {/* <p  className="text-gray-500 pt-6">
                     In summer I enjoy riding my motorbike, a red F 900 XR. To be continued......
                    </p> */}
                </div>
            </div>
</div>
  );
}
 
export default About;
