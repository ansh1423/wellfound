import React from 'react'

function Block3() {

  return (
    <>
   <div className='flex mb-10 max-lg:flex-col'>
    <div className='w-1/2  px-20 max-sm:px-5 max-lg:w-full '>
      <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%2520283-min-p-800.png" alt=""  className=''/>
    </div>
    <div className="mx-5 ">
      <div className='max-lg:w-full '>
      <p className='  font-bold text-base mt-5'>GOT TALENT?</p>
      <h1 className='font-bold  w-72 max-lg:w-full my-2   text-4xl  '>Why job seekers love us</h1>
      </div>
      <div className='flex w-96 max-lg:w-full   '>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" alt="" />
        <p className='mx-2 pt-3 text-base font-medium'>Unique jobs at startups and tech companies you can't find anywhere else</p>
      </div>
      <div className='flex w-96  max-lg:w-full mr-4  '>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg" alt="" className='max-lg:pt-2' />
        <p className=' pt-3 text-base font-medium'>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>
      </div>
      <div className='flex w-96 max-lg:w-full  mr-4  '>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" alt="" className='max-lg:pt-2' />
        <p className='mx-2 pt-3  text-base font-medium'>Everything you need to know to job search - including seeing salary and stock options upfront when looking</p>
      </div>
      <div className='flex w-96 max-lg:w-full mr-4  '>
        <img src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg" alt="" className='pt-2' />
        <p className='mx-2  pt-3 text-base font-medium'>Connect directly with founders at top startups - no third party recruiters allowed</p>
      </div>
            <div className='flex  max-lg:flex-col mb-10'>
              <div>
              <button className='border font-medium my-4 max-lg:my-2 border-slate-300 font-md py-2 px-3  rounded-lg '>Learn More</button>
              </div>
              <div>
              <button className='border font-medium my-4 max-lg:my-2 text-white mx-3 max-lg:mx-0 bg-black border-slate-300 font-md py-2 px-2  rounded-lg '>Sign up now</button>
              </div>
            </div>
            </div>
            </div>
            </>
  )
}

export default Block3