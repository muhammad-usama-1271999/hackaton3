import React from "react";
import Image from "next/image";
import footer1 from "../../../public/footer1.png";
import footer2 from "../../../public/footer2.png";
import footer3 from "../../../public/footer3.png";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black ">
        <div className="flex flex-col md:flex-row justify-between items-center px-5">
          <div className="text-white  text-center">
              <h2 className="text-xl md:text-3xl font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support</h2>
              <p className="text-xs md:text-base font-normal mt-[17px]">Don{"'"}t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>

          <div className="flex md:mt-0 mt-[20px]">
            <input type="text" placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">Subscribe Now</button>
          </div>
        </div>
          <hr className="my-4 border-[#FF9F0D] mx-5" />
      <div className="mx-auto w-full max-w-screen-xl ">
        <div className="md:flex flex-wrap justify-center  md:gap-[50px] gap-1 px-6 md:px-[135px] py-6 lg:py-8">
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase  text-[#ff9f0d]">
              About Us
            </h2>
            <ul className="text-gray-500  font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline md:w-40 lg:w-60">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Houres
                  </h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00 - 6.00)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday - Closed
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase text-[#ff9f0d]">
            Useful Links
            </h2>
            <ul className="text-gray-500 dark:text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Team 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Menu
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Contact
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase text-[#ff9f0d]">
            Help?
            </h2>
            <ul className="text-gray-500 dark:text-gray-300 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Term & conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Reporting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Documentation 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Support Policy
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Privacy
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase text-white">
              Recent Post
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={footer1} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={footer2} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={footer3} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-6 bg-gray-500 w-full  md:flex md:items-center gap-3 md:justify-around">
          <span className="text-sm text-white dark:text-gray-300 sm:text-center">
          Copyright © 2022 by <i className="lg:text-[22px] text-xs text-[#FF9F0D]">USAMA</i>. All Rights Reserved.
          </span>

          <div className="flex justify-center gap-[14px] ">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="#"><FaFacebookF /></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="#"><FaTwitter /></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="#">< FaInstagram/></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="#"><FaYoutube /></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="#"><FaPinterest /></a></div>
          </div>
         
        </div>
    </footer>
  );
};

export default Footer;