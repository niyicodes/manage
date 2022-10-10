import React from "react";
import { Link } from "react-router-dom";
import Button from "../CustomButton/Button";
import "../../index.css";
const Header = () => {
 return (
  <nav className="flex justify-between items-center my-2 py-2 px-1 mx-8">
   <img src="/assets/logo.svg" alt="logo" className="items-center"/>
   <ul className=" hidden lg:flex justify-evenly items-center text-black">
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Pricing</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Product</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">About Us</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Careers</Link>
    </li>
    <li className="flex px-3 hover:text-gray-400">
     <Link to="/">Community</Link>
    </li>
   </ul>
   <Button btnName="Get Started" className="hidden lg:block rounded-full bg-red-500 px-4 text-white py-1 hover:bg-red-400"/>
  </nav>
 );
};

export default Header;
