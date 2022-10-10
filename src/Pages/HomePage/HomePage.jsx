import React from "react";
import AbtList from "../../Components/AbtList/AbtList";
import Card from "../../Components/Card/Card";
import Button from "../../Components/CustomButton/Button";
import data from "../../ListData";

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
   <section className="hero-2 md:flex gap-4 mt-14 justify-center lg:my-5">
    <div className="about">
     <h3 className="text-3xl text-sky-900 font-bold pb-4">
      What's different about Manage?
     </h3>
     <p className="text-lg text-gray-500 text-justify">
      Manage provides all the functionality your team needs, without the
      complexity. Our software is tailor-made for modern digital product teams.
     </p>
    </div>
    <div className="aboutlist flex-col mt-6 md:mt-0">
     {data.map(({ num, title, paragraph }) => {
      return (
       <AbtList key={num} num={num} title={title} paragraph={paragraph} />
      );
     })}
    </div>
   </section>
   {/* what they have said */}
   <section className="said">
    <h3 className="text-center my-12 text-3xl lg:text-5xl text-blue-900 font-bold">
     What they've said
    </h3>
    <div className="testimonials grid-cols-1 grid lg:grid-cols-3 mt-7 mb-4 gap-6">
     <Card
      img="/assets/avatar-richard.png"
      name="Richard Watts"
      paragraph="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
     />
     <Card
      img="/assets/avatar-anisha.png"
      name="Anisha Li"
      paragraph="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
     />
     <Card
      img="/assets/avatar-shanai.png"
      name="Ali Bravo"
      paragraph="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
     />
    </div>
   </section>
  </div>
 );
};

export default HomePage;
