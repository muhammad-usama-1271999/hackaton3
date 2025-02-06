import Image from 'next/image';
import React from 'react';
import img from "../../../public/idk.png";

const ActiveProcess = () => {
  return (
    <div className="relative mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="relative">
        <Image src={img} alt="background image" className="w-full object-cover h-40 lg:h-96"/>
      </div>
      <div className="absolute top-0 left-0 flex flex-col justify-end items-end text-end w-full py-[20px] md:py-[30px] px-[20px] md:px-[60px] lg:px-[130px] text-white">
        <h1 className="text-[#ff9f0d] text-base lg:text-3xl  leading-[30px]  font-medium">
          Restaurant Active Process
        </h1>
        <h1 className="font-helvetica font-bold text-xl md:text-3xl lg:text-5xl  ">
          <span className="text-[#ff9f0d]">We</span> Document Every Food
          Bean Process until it is saved
        </h1>
        <p className="font-normal text-xs md:text-sm mt-4 lg:block hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* Buttons */}
        <div className="flex  md:flex-row justify-center mt-1 md:mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-[#ff9f0d] lg:block hidden text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] shadow-md hover:bg-[#ff9f0d] hover:text-black">
            Read More
          </button>
          <button className="bg-transparent border  lg:block hidden border-[#ff9f0d] text-[#ff9f0d] font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] shadow-md hover:bg-[#ff9f0d] hover:text-black">
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveProcess;