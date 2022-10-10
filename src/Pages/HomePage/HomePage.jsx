import React from "react";
import Button from "../../Components/CustomButton/Button";

const HomePage = () => {
 return (
  <div>
   <section className="hero-1 mt-9 mb-6 md:flex gap-4 justify-center items-center">
    <div className="textarea  lg:w-2/4 sm:text-left sm:flex-col text-center">
     <h3 className="sm:text-xl md:text-2xl lg:text-6xl sm:text-center md:text-left w-full lg:w-5/6 text-blue-900 font-bold pb-6">
      Bring everyone together to build better products.
     </h3>
     <p className="text-gray-300 w-full text-lg lg:text-lg font-semibold pb-4 lg:w-3/4">
      Manage makes it simple for software teams to plan day-to-day tasks while
      keeping the larger team goals in view
     </p>
     <Button
      btnName="Get Started"
      className="rounded-full bg-red-500 px-4 text-white py-2 hover:bg-red-400 mx-auto"
     />
    </div>
    <div className=" md:block imagearea relative">
     <img src="/assets/illustration-intro.svg" alt="illus" className="" />
    </div>
   </section>
   {/* whats different? */}
   <section className="hero-2">
    <div className="about">
     <h3>What's different about Manage?</h3>
     <p>
      Manage provides all the functionality your team needs, without the
      complexity. Our software is tailor-made for modern digital product teams.
     </p>
    </div>
    <div className="aboutlist">
     
    </div>
   </section>
  </div>
 );
};

export default HomePage;
