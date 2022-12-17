import Image from "next/image";
import React, { useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";

const Banner = () => {
  const [ico, setIco] = useState(false);
  const handleClick = () => {
    setIco((current) => !current);
  };
  return (
    <>
      <section className="pb-16">
        <div className="flex flex-col md:flex-row mt-8 md:mt-8 xl:mt-12 gap-4 items-center ">
          <div className="flex-1">
            <h1 className="text-3xl 2xl:text-7xl md:text-4xl xl:text-5xl font-semibold text-white text-center md:text-left leading-8">
              Discover, collect, and charity in extraordinary NFT marketplace
            </h1>
            <p className="text-center md:text-left text-sm mt-2 font-light text-[#e2e2e2] opacity-75">
              In aenean posuere lorem risus nec. Tempor tincidunt aenean purus
              purus vestibulum nibh mi venenatis
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-5 mt-2 xl:mt-7">
              <button className="bg font-semibold px-6 py-2 rounded-lg text-white text-xs md:text-md">
                Explore
              </button>
              <button className="border-[1px] font-semibold  border-[#d7d7d7] px-6 py-2 rounded-lg text-white text-xs md:text-md">
                Create
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="flex-1 flex justify-center opacity-[.99999] ">
            <div
              className="relative gradient-border justify-center p-2 md:p-5"
              id="box">
              <Image
                src="/Images/Banner__pic.png"
                alt="Banner images"
                width={300}
                height={300}
              />
              <div className="flex justify-between items-center mt-3 mb-1 text-[#e4e4e4] text-sm">
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src="/Images/owner_pic.png"
                      height={30}
                      width={45}
                      alt="profile"
                    />
                  </div>
                  <div>
                    <div>
                      <h1 className="text-xs">Laura</h1>
                    </div>
                    <div>
                      <p className="text-xs mt-[2px]">0.21 Weth</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <p className="text-xs">We are here</p>
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <div className=" cursor-pointer " onClick={handleClick}>
                      <div className="mt-[2px]">
                        <ion-icon
                          name={ico ? "heart" : "heart-outline"}
                          size="small"></ion-icon>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs">{ico ? 23 : 22}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute rounded-full h-[70px] -top-12  -left-5 w-[70px] elapse bg-[#FB37FF]"></div>
              <div className="absolute rounded-full h-[70px] -bottom-10  -right-5 w-[70px] elapse  bg-[#18B2DE]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
