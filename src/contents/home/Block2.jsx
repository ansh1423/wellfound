import React from "react";
import GoogleIcon from '@mui/icons-material/Google';
function Block2() {
  return (
    <>
      <div className="mt-10 mx-4">
        <div className="border border-slate-400 mb-4 flex m-auto mx-16 w-auto   h-24  max-md:px-4 max-md:flex-col max-md:h-auto rounded-lg  ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="border px-3 border-slate-400 w-3/5 mx-10 my-5 max-md:py-2 max-md:w-full max-md:mx-0 max-xl:w-1/2 max-lg:w-2/6 py-3  rounded-xl"
          />
          <button
            type="submit"
            className="bg-black max-md:my-0 max-md:py-3  px-6 my-6 hover:bg-red-600 text-sm text-white rounded-lg "
          >
            Sign Up
          </button>
          <h1 className="flex items-center max-md:mx-2 max-md:my-2 mx-2 max-md:justify-center">
            or
          </h1>
          <button
            type="submit"
            className="border max-md:mb-8 py-3 mx-2 gap-2 px-4  border-slate-300 max-md:my-0 max-md:py-3 hover:bg-red-300 hover:text-red-500 text-sm font-medium my-6 rounded-lg"
          >
           <GoogleIcon/>  Sign Up with Google
          </button>
        </div>
      </div>
      <div className="flex justify-between mx-5 max-lg:block  mb-10 pr-10">
        <h1 className=" w-1/2 font-sans text-lg max-lg:text-base text-center mx-10 max-lg:w-full max-lg:mx-0 ">
          Looking to fund raise or invest in the next generation of great
          startups? AngelList Venture can now be found at AngelList.com.
        </h1>
        <h2 className="mx-5 text-lg max-lg:w-full max-lg:text-sm text-center font-sans">
          Already do have account? Log in
        </h2>
      </div>
    </>
  );
}

export default Block2;
