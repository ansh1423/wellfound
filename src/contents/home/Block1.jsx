function Block1() {
  return (
    <>
      <div className="gap-1 mt-10 mb-10 mx-4 max-lg:mx-0 flex font-sans max-lg:flex-col-reverse">
        <div className="w-1/2  max-lg:w-full h-auto mx-10 max-sm:mx-4    ">
          <h1 className="text-6xl font-sans mt-5 max-lg:text-4xl max-lg:font-bold max-lg:py-1 font-bold  px-8  max-sm:mx-0 max-sm:px-0 ">
            AngelList Talent is now
          </h1>
          <h1 className="text-6xl  max-lg:text-4xl max-lg:font-bold max-lg:py-1 font-bold px-8 max-sm:mx-0 max-sm:px-0 py-1">
            Wellfound
          </h1>
          <p className=" max-sm:px-1 py-6 px-8 text-xl max-sm:mx-0 font-normal">
            Where startups and job seekers connect.
          </p>
          <div className="py-5 max-sm:px-1 flex max-md:flex-col max-md:gap-7 px-8  max-sm:mx-0 ">
            <div>
              <a
                href="#"
                class="text-white bg-black font-semibold max-sm:px-3 max-sm:mx-1  hover:bg-red-500 px-3  text-base py-2 rounded-xl"
              >
                Find your next hire
              </a>
            </div>
            <div>
              <a
                href="#"
                class="text-black border-2 font-semibold text-base  max-sm:px-1 max-sm:mx-1  ml-4 py-2 px-3 hover:text-red-500 hover:border-red-500 rounded-xl mr-2"
              >
                Find your next job
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-lg:w-full ">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0YXJ0dXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Block1;
