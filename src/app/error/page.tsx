import React from 'react'
import Header from '@/components/layout/Header';
const page = () => {
  return (
    <div>
      <Header />
      <div className='mt-[100px] mb-[100px] flex flex-col justify-center items-center space-y-4'>
  <h1 className='text-[#ff9f0d] text-center font-bold text-4xl'>404</h1>
  <h1 className='text-center font-bold text-[25px]'>Oops! Looks like something went wrong</h1>
  <p className='text-center w-[400px] font-medium'>Page cannot be found! We’ll have it figured out in no time. Meanwhile, check out these fresh ideas:</p>
  <button className='bg-[#ff9f0d] w-[100px] h-[40px]'>Go to home</button>
</div>

    </div>
  )
}

export default page