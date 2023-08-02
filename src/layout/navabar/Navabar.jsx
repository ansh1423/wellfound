import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';


function Navabar() {
 
  return (
    <>
      <nav class="  mx-4 py-4  ">
        <div class="  py-4 flex justify-between
          ">
          <div class="text-black font-mono max-lg:text-3xl font-semibold text-4xl   ">
            wellfound:
          </div>
          <div className="lg:hidden flex justify-end w-full py-2  "><MenuIcon/></div>
          <div className="font-sans font-normal text-black max-lg:hidden ">
            <a
              href="#"
              class="text-black  hover:text-red-500  hover:underline px-2 mr-2"
            >
              Discover
            </a>
            <a
              href="#"
              class="text-black  hover:text-red-500  hover:underline px-2 mr-2"
            >
            Overview
            </a>
            <a
              href="#"
              class="text-black  hover:text-red-500  hover:underline px-2  mr-2"
            >
              Product
            </a>
            <a
              href="#"
              class="text-black  hover:text-red-500  hover:underline px-2  mr-2"
            >
              Pricing
            </a>
            <a
              href="#"
              class="text-black  hover:text-red-500  hover:underline px-2  mr-2"
            >
              For job seekers
            </a>
            <a
              href="#"
              class="text-black border font-semibold px-4 mx-4 py-2 border-slate-400   hover:text-red-500 hover:border-red-500  rounded-xl "
            >
              Log in
            </a>
            <a
              href="#"
              class="text-white bg-black font-semibold text-sm hover:bg-red-500 px-4 mx-1 py-2 rounded-xl"
            >
              Sign Up
            </a>
          </div>
          
          </div>
      </nav>
      

  
    
    </>
  );
}

export default Navabar;
