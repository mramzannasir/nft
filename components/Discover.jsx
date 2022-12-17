import React, { useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import Image from "next/image";
const Discover = () => {
  const [Open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((current) => !current);
    console.log("lub u");
  };
  return (
    <>
      <section className="text-white  mt-28 md:mt-36 xl:mt-44">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium">
              Discover
            </h1>
          </div>
          <div className="relative">
            <button
              onClick={handleClick}
              className="bg text-base font-light py-1 flex gap-2 items-center outline-none border-none px-6 rounded-lg">
              <BiFilterAlt />
              Filter
            </button>
            {/* Filter items */}
            <div
              className={`
                ${
                  Open ? "-left-[19rem] top-1" : " left-[400px] top-1"
                } absolute ease-in-out duration-500 hidden md:block
              `}>
              <div className="flex items-center gap-4">
                <div className="flex gap-1 items-center cursor-pointer">
                  <div>
                    <RiMenuAddFill />
                  </div>
                  <div>
                    <p className="text-sm font-normal">Category</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                  <div>
                    <p className="text-sm font-normal">Cheapest</p>
                  </div>
                  <div>
                    <FiChevronDown />
                  </div>
                </div>
                <div className="flex gap-1 items-center cursor-pointer">
                  <div>
                    <p className="text-sm font-normal">Newest</p>
                  </div>
                  <div>
                    <FiChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-5 mt-4 md:mt-8 xl:mt-10 2xl:mt-16 md:gap-4 xl:gap-9 2xl:gap-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          <div className="">
            <Image
              src="/Images/discover-1.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm font-medium">Lorem ipsum</p>
              </div>
              <div>
                <p className="text-sm font-normal">1.20 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-light opacity-75">End in 01.34.46</p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-2.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Dolor sit amet</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.21 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-light opacity-75">End in 01.34.45</p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-3.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Dignissim curabitu..</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.01 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-light opacity-75">End in 56.44.45</p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-4.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Amet pellentesq...</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.55 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-normal opacity-75">
                  End in 01.34.45
                </p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-5.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Lorem ipsum</p>
              </div>
              <div>
                <p className="text-sm font-normal">1.20 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-normal opacity-75">
                  End in 01.34.46
                </p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-6.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Doller sit amet</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.21 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-normal opacity-75">
                  End in 01.34.45
                </p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-7.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Dignissim caurabitu...</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.01 Weth</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white mt-2  opacity-40"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-light opacity-75">End in 55.44.45</p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/Images/discover-8.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center  mt-4">
              <div>
                <p className="text-sm font-medium">Amet pellentesq...</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.55 Weth</p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-white mt-2  opacity-30"></div>
            <div className="flex justify-between items-center mt-1">
              <div>
                <p className="text-sm font-light opacity-75">End in 01.34.45</p>
              </div>
              <div>
                <button className="border rounded-lg px-[12px] py-[1px] text-xs font-normal">
                  Bid
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-8 md:my-14 xl:my-20">
          <button className="border-[1px] rounded-lg py-[2px] px-7 font-light">
            Load more
          </button>
        </div>
      </section>
    </>
  );
};
export default Discover;
