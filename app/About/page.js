const About = () => {
  return (  

    <div className = "pt-12">   
     <h1 className="page_title" > 
                About
            </h1>
            <div className=" text_card_grid">
                <div className =" sm:w-3/5 text_card ">
                    <h2>
                    This Home page 
                    </h2>
                    <p className="text-gray-500">
                    This homepage started as a little hobby of mine. I wanted to provide the students in my class with a way to get my slides, without using classic services like polybox.
                    So being inspired by my computer science faltmates I started this project. Over time this website has seen many designs and has also become my personal homepage. 
                    The teaching identity of this page is still conserved and is still my priority but you can now also find out more about what I am doing and if you are interested you can get in thouch with me. I store my posters here 
                    so that they are availiable online. Addionally in the future I will post what I, as a part of a wonderful team, am doing in the Student Bio Lab. 
                    </p>
                </div>
                <div className =" sm:w-2/5 text_card">
                    <h2>
                    Me 
                    </h2>
                    <p className="text-gray-500 ">
                    My name is Dominik, and I am currently in my 6th semester of Biochemistry - Chemical Biology at ETH Zurich. I am a passionate teaching assistant with an
                    avid interest in organic chemistry, chemical biology and bioinformatics. I recently started branching out into the materials department, because of their work with soft 
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
