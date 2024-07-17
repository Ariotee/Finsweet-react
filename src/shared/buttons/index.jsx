import React from 'react'

export const ButtonMore = ({ children }) => {
  return (
    <button className='py-4 px-10 bg-black font-bold font-sen text-[18px] leading-[133%] text-white transition ease-in-out duration-300 hover:bg-accent-dark'>
      {children}
    </button>
  )
}
