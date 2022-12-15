import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <nav className="flex flex-col pt-1 md:flex-row md:items-center md:justify-between lg:pt-3">
          <div className="logo cursor-pointer ">
            <h1 className="fancy-text md:text-[32px] text-[20px] leading-6 font-bold">
              GALUSR
            </h1>
          </div>
          <div
            onClick={onclick}
            className="absolute right-1 top-1 cursor-pointer text-2xl md:hidden ">
            <ion-icon name={open ? "menu" : "menu"}></ion-icon>
          </div>

          <div
            className={
              "flex text-sm md:ml-5 md:items-center md:justify-center "
            }>
            <ul
              className={`absolute z-50 flex h-[100vh] flex-col px-2 pt-1 opacity-[.999] md:static md:h-auto  md:flex-row md:items-center md:justify-between md:space-x-3 md:px-0 md:pt-0  ${
                open ? "left-0 top-0 right-20 " : "top-[-900px] left-0"
              } left-0  w-full bg md:bg-none transition-all duration-700 ease-in md:w-auto md:bg-inherit`}>
              <div className="flex items-center ">
                <div className="logo cursor-pointer md:hidden"></div>
                <div
                  onClick={onclick}
                  className="z-index-[0] absolute right-1 top-0 cursor-pointer text-3xl md:hidden ">
                  <ion-icon name={open ? "close" : ""}></ion-icon>
                </div>
              </div>

              <li className="mt-5 md:mt-0 text-[#bcbcbc] cursor-pointer text-center md:text-left hover-underline-animation text-[12px] font-medium tracking-[1.5px]">
                Home
              </li>
              <li className="text-[#bcbcbc] cursor-pointer text-center md:text-left hover-underline-animation text-[12px] font-medium tracking-[1.5px]">
                MY PROFILE
              </li>
              <li className="text-[#bcbcbc] cursor-pointer text-center md:text-left hover-underline-animation text-[12px] font-medium tracking-[1.5px]">
                ACTIVITY
              </li>
              <li className="text-[#bcbcbc] cursor-pointer text-center md:text-left hover-underline-animation text-[12px] font-medium tracking-[1.5px]">
                HOW IT WORKS
              </li>
              {/* Buttons in navbar mobile */}
              <div className="flex flex-col gap-2  md:hidden">
                <button className="py-2 px-6 border-[1px] text-[#bcbcbc] font-normal text-[12px]  border-[#D7D7D7] rounded-[10px] w-44 bg mx-auto">
                  Create
                </button>
                <button className="py-2 px-6 border-[1px] text-[#bcbcbc] font-normal text-[12px]  border-[#D7D7D7] rounded-[10px] w-44 bg mx-auto">
                  Login
                </button>
              </div>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-5 hidden md:block">
            <button className="py-2 px-6 border-[1px] text-[#bcbcbc] font-normal text-[12px]  border-[#D7D7D7] rounded-[10px]">
              Create
            </button>
            <button className="py-2 px-6  text-[#bcbcbc] text-[12px] font-normal ">
              SIGN UP
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
