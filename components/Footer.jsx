import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <>
      <section className="text-white">
        <footer className="flex flex-col justify-between md:flex-row gap-6  md:gap-5 xl:gap-52 2xl:gap-60 ">
          <div>
            <h1 className="text-2xl font-normal text-center md:text-left">
              Etiam et id tincidunt <br /> faucibus mollis a sociis pretium{" "}
              <br /> fermentum quis magna <br /> faucibus lacus.
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 lg:gap-[8rem]  xl:gap-[15rem] 2xl:gap-52">
            <div>
              <ul className="flex flex-col gap-3 text-center md:text-left">
                <li className="text-xl font-normal opacity-90">Marketplace</li>
                <li className="text-sm font-light opacity-70">Home</li>
                <li className="text-sm font-light opacity-70">Activity</li>
                <li className="text-sm font-light opacity-70">Discover</li>
                <li className="text-sm font-light opacity-70">Learn more</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3 text-center md:text-left">
                <li className="text-xl font-normal opacity-90">Company</li>
                <li className="text-sm font-light opacity-70">About us</li>
                <li className="text-sm font-light opacity-70">Services</li>
                <li className="text-sm font-light opacity-70">Portfolio</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3 text-center md:text-left">
                <li className="text-xl font-normal opacity-90">Contact</li>
                <li className="text-sm font-light opacity-70">Facebook</li>
                <li className="text-sm font-light opacity-70">Instagram</li>
                <li className="text-sm font-light opacity-70">Twitter</li>
                <li className="text-sm font-light opacity-70">Email</li>
              </ul>
            </div>
          </div>
        </footer>

        <div className="w-full h-[1px] bg-white opacity-90 my-3 "></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>
              <AiOutlineInstagram className="text-sm md:text-base 2xl:text-lg cursor-pointer font-medium opacity-60" />
            </div>
            <div>
              <AiOutlineFacebook className="text-sm md:text-base 2xl:text-lg cursor-pointer font-medium opacity-60" />
            </div>
            <div>
              <RxTwitterLogo className="text-sm md:text-base 2xl:text-lg cursor-pointer font-medium opacity-60" />
            </div>
          </div>
          <div>
            <p className="text-xs md:text-sm font-extralight opacity-60">
              Copyright 2021 Gaslur
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
