import Image from 'next/image'
import React from 'react'
import chefs1 from "../../../public/chef1.png"
import chefs2 from "../../../public/chef2.png"
import chefs3 from "../../../public/chef3.png"
import chefs4 from "../../../public/chef4.png"
const Chefs = () => {
  return (
    <div>
       <div className='lg:mt-[100px] lg:px-[100px] px-6'>
    <h1 className='text-[#ff9f0d] text-center lg:text-3xl text-xl font-medium'>Our chefs</h1>
    <h1 className='font-helvetica  font-bold text-center lg:text-5xl text-3xl text-white'><span className='text-[#ff9f0d]'>Ch</span>oose Food Iteam</h1>
    <div className='flex flex-wrap justify-center gap-3 px-10 pt-[30px]'>
    <Image src={chefs1} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]' />
    <Image src={chefs2} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    <Image src={chefs3} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    <Image src={chefs4} alt="category" className='lg:w-[305px] lg:h-[248px] rounded-[6px]'/>
    </div>
    </div>
    </div>
  )
}

export default Chefs