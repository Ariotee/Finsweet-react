import React from 'react'

export const TextFieldSubTitle = ({ children }) => {
  return (
    <p className='font-inter font-semibold text-base leading-[125%] tracking-[0.19em] uppercase text-black'>
      {children}
    </p>
  )
}

export const TextFieldTitle = ({ children, text_center = '' }) => {
  return (
    <h2
      className={`${text_center} font-sen mt-6 mb-4 font-bold text-4xl leading-[133%] tracking-[-0.06em] text-black`}
    >
      {children}
    </h2>
  )
}

export const TextFieldInfo = ({ children, text_center = '' }) => {
  return (
    <p
      className={`${text_center} font-inter font-normal text-base leading-[175%] text-gray`}
    >
      {children}
    </p>
  )
}
