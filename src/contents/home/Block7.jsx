import React from "react";

function Block7() {
  return (
    <>
    <div className="w-full mb-10">
      <div className="border border-slate-400 rounded-md max-md:mx-5 mx-20 flex max-md:block     mt-32">
        <div className="bg-pink-200 w-1/2 h-96 py-5 max-md:w-full flex justify-center items-center">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-1600.png"
            alt=""
            className="h-72 w-64 py-4"
          />
        </div>
          <div className=" px-8 w-1/2 max-md:w-full">
          <p className='  font-bold text-base mt-5'>GET FEATURED</p>
      <h1 className='font-semibold   max-lg:w-full my-5   text-4xl  '>Let us show you off</h1>
      <p className=' text-base font-medium'>Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.</p>
      <p className=' text-base  mt-6 font-medium'>Oh, it's also 100% free.</p>
      <button  className='border font-medium my-4 max-lg:my-2 border-slate-300 font-md py-2 px-3  rounded-lg '>Learn More</button>
          </div>
       
      </div>
    </div>
     <div className="w-full mb-20 ">
     <div className="border border-slate-400 rounded-md  mx-20 max-md:mx-5 flex  max-md:block max-md:mt-5    mt-32">
       <div className="bg-violet-200 w-1/2 max-md:w-full h-96 py-5 flex justify-center items-center">
         <img
           src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287f5ab7e63e6_AGT%2520-%2520Calculator%25201-p-1600.png"
           alt=""
           className="h-72 w-64 py-4"
         />
       </div>
         <div className=" px-8 w-1/2 max-md:w-full">
         <p className='  font-bold text-base mt-5'>SALARY CALCULATOR</p>
     <h1 className='font-semibold   max-lg:w-full my-5   text-4xl  '>Know your worth</h1>
     <p className=' text-base font-medium'>We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.</p>
     <button  className='border font-medium my-4 max-lg:my-2 border-slate-300 font-md py-2 px-3  rounded-lg '>Calculate your salary</button>
         </div>
      
     </div>
   </div>
   </>
  );
}

export default Block7;
