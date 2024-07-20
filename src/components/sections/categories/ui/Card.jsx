export const Category = ({ imageUrl, name, info }) => {
  return (
    <li className='p-8 cursor-pointer border border-solid border-border-dark transition-all ease-in-out duration-[500ms] hover:bg-accent'>
      <div className='flex items-center justify-start'>
        <img src={imageUrl} />
      </div>
      <h3 className='font-sen font-bold text-[28px] leading-[143%] tracking-[-0.04em] text-black mt-4 mb-1'>
        {name}
      </h3>
      <p className='font-inter font-normal text-base leading-[175%] text-gray'>
        {info}
      </p>
    </li>
  )
}
