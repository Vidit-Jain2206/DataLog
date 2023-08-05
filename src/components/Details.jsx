import React from "react";

const Details = ({ pic, name, about, isUser }) => {
  return isUser ? (
    <>
      <div className="max-w-[1440px] h-auto md:h-screen bg-black">
        <div className="w-[90%] min-h-screen md:h-screen mx-auto flex flex-wrap justify-center items-center space-x-4">
          {/* profile pic */}
          <div className="mt-10 md:mt-0 w-[90%] md:w-[40%] md:h-[40%] lg:w-[30%] lg:h-[40%] xl:w-[40%] xl:h-[69%] rounded-full">
            <img src={pic} alt="" className="h-full w-full rounded-full" />
          </div>
          {/* details */}
          <div className="flex w-full md:w-[50%] my-10 md:mt-0 h-[50%] md:items-center  ">
            <div className="flex flex-col space-y-8 ">
              <h1 className="text-white text-center text-3xl">{name}</h1>
              <p className="text-white md:px-10 lg:px-20">{about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="max-w-[1440px] h-auto bg-black pt-10">
        <div className="w-[90%] h-auto mx-auto flex flex-col">
          {/* title */}
          <h1 className="font-[math] text-white pt-5 text-xl font-bold">
            {name}
          </h1>
          {/* coverPic */}
          <div className="mt-8 mb-4">
            <img
              src={pic}
              alt=""
              className="w-[90%] md:w-[65%] h-[50%] rounded-2xl "
            />
          </div>
          {/* description */}
          <p className="my-4 mb-6 w-[90%] md:w-[80%] text-white text-base font-medium font-[math] ">
            {about}
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
