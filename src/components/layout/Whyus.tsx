import Image from 'next/image'
import whyus1 from "../../../public/whyus1.png"
import whyus2 from "../../../public/whyus2.png"
import whyus7 from "../../../public/whyus7.png"
import whyus4 from "../../../public/whyus4.png"
import whyus5 from "../../../public/whyus5.png"
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { GiWineGlass } from "react-icons/gi";
import whyus6 from "../../../public/whyus6.png"
import React from 'react'

const Whyus = () => {
  return (
    
     

    
    <div className="flex justify-center gap-2 flex-wrap mt-24"> 
      
      <div className="mx-3 hidden lg:grid">
        <div className="flex items-end gap-3 mb-3">
          <div>
            <Image src={whyus1} alt="some food" className="w-[300px] h-[300px] rounded-[6px]"/>
          </div>
          <div>
            <Image src={whyus2} alt="some food" className="w-[240px] h-[210px] rounded-[6px]"/>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <Image src={whyus7} alt="some food" className="w-[210px] h-[360px] rounded-[6px]"/>
          </div>
          <div>
            <Image  src={whyus5} alt="some food" className="w-[180px] h-[180px] rounded-[6px]"/>
          </div>
          <div className="grid -gap-3">
            <div>
              <Image src={whyus4} alt="some food" className="w-[130px] h-[130px] rounded"/>
            </div>
            <div>
              <Image src={whyus6} alt="some food" className="w-[130px] h-[130px] rounded"/>
            </div>
          </div>
        </div>
      </div>
    
      <div className="lg:w-[526px] w-[300px]">
        <div className="">
          <h2 className="font-[helvetica] lg:text-3xl text-xl text-[#FF9F0D]">why Choose us</h2>
        </div>
        <div className="mt-4">
          <h1 className="font-[helvetica] font-bold lg:text-5xl text-3xl text-[#FF9F0D]">Ex
            <span className=" text-[#FFffff]">tra ordinary taste And Experienced</span> </h1>
        </div>
        <div className="mx-3 lg:hidden">
        <div className="flex items-end gap-3 mb-3">
          <div>
            <Image src={whyus1} alt="some food" className="w-[362px] h-[356px] rounded-[6px]"/>
          </div>
          <div>
            <Image src={whyus2} alt="some food" className="w-[281px] h-[231px] rounded-[6px]"/>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <Image src={whyus7} alt="some food" className="w-[244px] h-[306px] rounded-[6px]"/>
          </div>
          <div>
            <Image  src={whyus5} alt="some food" className="w-[221px] h-[226px] rounded-[6px]"/>
          </div>
          <div className="grid gap-3">
            <div>
              <Image src={whyus4} alt="some food" className="w-[161px] h-[168px] rounded"/>
            </div>
            <div>
              <Image src={whyus6} alt="some food" className="w-[161px] h-[166px] rounded"/>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-9">
          <p className="font-[inter] lg:text-base text-xs text-[#ffffff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices 
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        </div>
        <div className="flex justify-around mt-6">
          <div className="">
            <PiHamburgerLight className='w-[58px] h-[58px] rounded-[6px] bg-[#FF9F0D] lg:p-3 p-2'/>
            <h3 className=" text-[#ffffff] font-[inter] lg:text-xl text-sm p-2">Fast Food</h3>
          </div>
          <div className="">
          <PiCookieLight className=' w-[58px] h-[58px] rounded-[6px] bg-[#FF9F0D] lg:p-3 p-2'/>
            <h3 className=" text-[#ffffff] font-[inter] lg:text-xl text-sm p-2">Lunch</h3>
          </div>
          <div className="">
          <GiWineGlass className='w-[58px]  h-[58px] rounded-[6px] bg-[#FF9F0D] lg:p-3 p-2'/>
            <h3 className=" text-[#ffffff] font-[inter] lg:text-xl text-sm p-2">Dinner</h3>
          </div>
        </div>
        <div className="">
          <div className="flex justify-around lg:w-[374px] w-[200px] border-l-8 border-[#ff9f0d] bg-[#ffffff] rounded-md p-4 mx-auto">
            <div className="">
              <h3 className="font-[helvetica] lg:text-5xl text-2xl font-bold text-[#FF9F0D]">30+</h3>
            </div>
            <div className="">
              <p className="font-[inter] lg:text-xl text-sm text-[#1E1E1E]">Years of</p>
              <h5 className=" lg:text-2xl text-base font-bold text-[#1E1E1E]">Experienced</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
)}

export default Whyus