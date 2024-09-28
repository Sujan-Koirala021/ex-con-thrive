import React from "react";
import AppLogo from "../assets/img/logo.png";
export default function NavBar() {
  return (
    <div>
      <div className="p-6  flex justify-between items-center">
        {/* Logo and product name on the left */}
        <div className="logo-img pr-5 flex items-center">
          <img src={AppLogo} alt="Logo img" className="h-16 w-16 mt-4" />

          <div className="pl-4 font-bold text-xl">Ex-Cons Thrive</div>
        </div>

        {/* Middle navigation links */}
        <div className="categories flex space-x-8">
          <div className="text-black">Home</div>
          <div className="text-black">Career</div>
          <div className="text-black">Housing</div>
          <div className="text-black">Legal</div>
        </div>

        {/* Signup button on the right */}
        <div>
          <button className="bg-green-500 text-black px-6 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
