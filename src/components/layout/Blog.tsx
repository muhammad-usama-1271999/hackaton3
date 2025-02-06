import Image from 'next/image'
import React from 'react'
import { MdThumbUpOffAlt } from "react-icons/md";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { LuShare2 } from "react-icons/lu";
import latest1 from "../../../public/latestnew1.png"
import latest2 from "../../../public/latestnew2.png"
import latest3 from "../../../public/latestnew3.png"
import Link from 'next/link';
const Blog = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-center text-[#ff9f0d] font-greatVibes text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-medium">
        Blog Post
      </h1>
      <h1 className="text-center font-helvetica font-bold text-[32px] md:text-[40px] leading-[38px] md:leading-[45px] text-white">
        <span className="text-[#ff9f0d]">La</span>test News & Blog
      </h1>
      <section className="text-gray-600 flex flex-wrap justify-center ">
        <div className="">
          <div className="flex flex-wrap justify-center gap-3 px-3 my-10">
            <div className=" w-[300px] sm:w-[300px] h-auto sm:h-[379px]">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src={latest1}
                  className="lg:h-48 md:h-36 object-cover object-center"
                  alt="blog"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-[#ff9f0d] title-font font-medium text-[14px] md:text-[16px] mb-1">
                    10 February 2022
                  </h2>
                  <p className="font-helvetica font-bold text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-white">
                    Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                  </p>
                </div>
                <div className="px-4 md:px-[30px] flex justify-between">
                  <div className="text-[12px] md:text-[13px] font-medium leading-[20px] md:leading-[24px] text-white">
                   <Link href={`/blog/1`}> Learn More</Link>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] text-white text-[16px] md:text-[18px]">
                    <MdThumbUpOffAlt className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                    <LiaCommentDotsSolid className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                    <LuShare2 className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[300px] sm:w-[300px] h-auto sm:h-[379px]">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src={latest2}
                  className="lg:h-48 md:h-36 object-cover object-center"
                  alt="blog"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-[#ff9f0d] title-font font-medium text-[14px] md:text-[16px] mb-1">
                    10 February 2022
                  </h2>
                  <p className="font-helvetica font-bold text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-white">
                    Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                  </p>
                </div>
                <div className="px-4 md:px-[30px] flex justify-between">
                  <div className="text-[12px] md:text-[13px] font-medium leading-[20px] md:leading-[24px] text-white">
                  <Link href={`/blog/2`}> Learn More</Link>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] text-white text-[16px] md:text-[18px]">
                    <MdThumbUpOffAlt className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                    <LiaCommentDotsSolid className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                    <LuShare2 className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[300px] sm:w-[300px] h-auto sm:h-[379px]">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <Image
                  src={latest3}
                  className="lg:h-48 md:h-36 object-cover object-center"
                  alt="blog"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-[#ff9f0d] title-font font-medium text-[14px] md:text-[16px] mb-1">
                    10 February 2022
                  </h2>
                  <p className="font-helvetica font-bold text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-white">
                    Curabitur rutrum velit ac congue malesuada
                  </p>
                </div>
                <div className="px-4 md:px-[30px] flex justify-between">
                  <div className="text-[12px] md:text-[13px] font-medium leading-[20px] md:leading-[24px] text-white">
                  <Link href={`/blog/3`}> Learn More</Link>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] text-white text-[16px] md:text-[18px]">
                    <MdThumbUpOffAlt className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                    <LiaCommentDotsSolid className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                    <LuShare2 className="text-white hover:text-[#ff9f0d] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blog;