import React from 'react'

export const CardPost = () => {
  return (
    <li className='p-pcard cursor-pointer transition-[background-color] duration-500 ease-in-out hover:bg-[#fbf6ea]'>
      <div className='flex'>
        <p className='font-inter font-medium text-[14px] leading-[143%] text-light-dark'>
          By
          <span className='text-purple ml-2'>John Deo</span>
        </p>
        <p className='font-inter font-medium text-[14px] leading-[143%] text-light-dark relative ml-6 before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:-left-3 before:bg-light-dark before:top-1'>
          Aug 23, 2021
        </p>
      </div>

      <h4 className='max-w-[340px] font-sen font-bold text-2xl leading-[133%] text-black mt-1'>
        8 Figma design systems that you can download for free today.
      </h4>
    </li>
  )
}
