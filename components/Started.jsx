import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { SlRocket } from "react-icons/sl";
const Started = () => {
  return (
    <>
      <section className="text-white mt-12   xl:mt-28 2xl:mt-36 h-[35rem] md:h-[10rem] xl:h-[10rem]">
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-center">
            Getting Started
          </h1>
          <p className="text-sm mt-1 font-light text-center opacity-70">
            Eu, molestie commodo, enim pellentesque turpis integer sagittis
          </p>
        </div>
        {/* Row */}
        <div className="absolute w-[90%] mt-8">
          <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-4">
            <div className="flex flex-col justify-center items-center md:flex-none md:items-start md:justify-start">
              <div className="boxes flex justify-center items-center h-[5rem] md:h-[5.5rem] rounded-3xl w-[40%] md:w-full">
                <AiOutlineSafety className="text-4xl " />
              </div>
              <p className=" text-xs md:text-sm font-light xl:text-sm xl:font-normal opacity-80 mt-2 text-center">
                Connect your wallet
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-none md:items-start md:justify-start">
              <div className="boxes flex justify-center items-center h-[5rem] md:h-[5.5rem] rounded-3xl w-[40%] md:w-full">
                <BsArchive className="text-4xl " />
              </div>
              <p className=" text-xs md:text-sm font-light xl:text-sm xl:font-normal opacity-80 mt-2 text-center">
                Posuere arna,sit amet <br /> molestie
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-none md:items-start md:justify-start">
              <div className="boxes flex justify-center items-center h-[5rem] md:h-[5.5rem] rounded-3xl w-[40%] md:w-full">
                <CiImageOn className="text-4xl " />
              </div>
              <p className=" text-xs md:text-sm font-light xl:text-sm xl:font-normal opacity-80 mt-2 text-center">
                Samper pretium <br /> libro as integer ut
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-none md:items-start md:justify-start">
              <div className="boxes flex justify-center items-center h-[5rem] md:h-[5.5rem] rounded-3xl w-[40%] md:w-full">
                <SlRocket className="text-4xl " />
              </div>
              <p className=" text-xs md:text-sm font-light xl:text-sm xl:font-normal opacity-80 mt-2 text-center">
                Lecatus volupat <br /> magna vitae in arcu
              </p>
            </div>
          </div>
          <div className=" blur-bg relative -top-[22rem] md:-top-14 h-[10rem] md:h-auto">
            as
          </div>
        </div>
      </section>
    </>
  );
};

export default Started;
