import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Hot = () => {
  return (
    <>
      <section className="text-white">
        <div className="flex justify-between my-3">
          <div>
            <h1 className="text-2xl font-medium">Hot auctions</h1>
          </div>
          <div className="flex  items-center gap-2 transition-all duration-500 hover:gap-3 cursor-pointer">
            <div className="text-xs md:text-sm font-medium opacity-80">
              View all
            </div>
            <div>
              <BsArrowRight className="text-xl" />
            </div>
          </div>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 gap-5 md:gap-4 xl:gap-9 2xl:gap-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="">
            <Image
              src="/Images/action-1.png"
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
              src="/Images/action-2.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center mt-4">
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
              src="/Images/action-3.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm font-medium">Dignissim carabitu.. </p>
              </div>
              <div>
                <p className="text-sm font-normal">0.01 Weth</p>
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
              src="/Images/action-4.png"
              alt="nft-1"
              width={250}
              height={200}
            />
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm font-medium">Amet pellentesq..</p>
              </div>
              <div>
                <p className="text-sm font-normal">0.55 Weth</p>
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
        </div>
      </section>
    </>
  );
};
export default Hot;
