import React from "react";
import { Link } from "react-router-dom";
import Button from "../CustomButton/Button";

const Footer = () => {
 return (
  <footer className="bg-gray-600 px-8 py-16 flex flex-col md:grid md:grid-cols-4">
   <div className="col1 flex flex-row md:flex-col gap-10 justify-between">
    <Link to="/">
     <img src="/assets/logo.svg" alt="logo" className="items-center" />
    </Link>
    <div className="socials flex">
     <Link to="/">
      <img
       src="/assets/icon-facebook.svg"
       alt="facebook"
       className="h-6 pr-1 hover:fill-red-400"
      />
     </Link>
     <Link to="/">
      <img
       src="/assets/icon-youtube.svg"
       alt="youtube"
       className="h-6 pr-1 hover:fill-red-400"
      />
     </Link>
     <Link to="/">
      <img
       src="/assets/icon-twitter.svg"
       alt="twitter"
       className="h-6 pr-1 hover:fill-red-400"
      />
     </Link>
     <Link to="/">
      <img
       src="/assets/icon-pinterest.svg"
       alt="pinterest"
       className="h-6 pr-1 hover:fill-red-400"
      />
     </Link>
     <Link to="/">
      <img
       src="/assets/icon-instagram.svg"
       alt="instagram"
       className="h-6 pr-1 hover:fill-red-400"
      />
     </Link>
    </div>
   </div>
   <nav className="col2 my-6 lg:my-0">
    <ul className="flex flex-row md:flex-col justify-evenly items-center text-white">
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">Home</Link>
     </li>
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">Pricing</Link>
     </li>
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">Products</Link>
     </li>
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">About Us</Link>
     </li>
    </ul>
   </nav>
   <nav className="col3 my-6 lg:my-0">
    <ul className="flex flex-row md:flex-col justify-evenly items-center text-white">
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">Careers</Link>
     </li>
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">Community</Link>
     </li>
     <li className="flex px-3 hover:text-red-300">
      <Link to="/">Privacy Policy</Link>
     </li>
    </ul>
   </nav>
   <div className="col4">
    <input
     type="email"
     name=""
     id=""
     onChange={(e) => e.target.value}
     className="rounded-full bg-white text-red-300 border-2 outline-0 border-red-500 px-3 py-2 w-3/4 -ml-4 mr-1"
    />
    <Button
     btnName="Go"
     className="rounded-full bg-red-500 px-4 text-white py-2 hover:bg-red-400 my-2"
    />
   </div>
  </footer>
 );
};

export default Footer;
