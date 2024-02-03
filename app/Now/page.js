const Now = () => {
    return (
      <div className="text-center">   
        <h1 className="page_title pb-2">Now</h1>
        <p>Updated February 3rd 2024, from ETH library.</p>
  
        {/* Event Section */}
        <div className="flex flex-col items-center pt-4">
          <h1 className="text-3xl font-bold pt-2">Exam phase and webiste finalisation</h1>
          <p className="py-2">03.02.2024</p>
          <div className="max-w-[600px]  px-4">
            <p>Only studying for one exam this seasion, OC III: Introduction to Asymmetric Synthesis. The lecture gives an  understanding to the principles of diastereoselective synthesis. Since this is my only exam I was able to 
                finalize this homepage. I transitioned from static HTML on the servers of ETH to my own nextJS application using vercel. The final milestone of this homepage was the acquisition of the domain <i>dgoetz.net</i> </p>
          </div>
        </div>
  
        {/* Repeat for other events as needed */}
       
      </div>
    );
  }
  
  export default Now;