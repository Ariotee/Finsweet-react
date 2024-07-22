import { TextFieldInfo } from '~/shared/fields/TextFields'

import SwiperAvatar from '~/assets/img/avatarslide.png'

export const Slide = ({ children }) => {
  return (
    <div className='flex flex-col gap-[120px] max-w-[530px]'>
      <p className='font-sen font-bold text-2xl leading-133 text-black'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className='flex items-center gap-4'>
        <img src={SwiperAvatar} />
        <div className=''>
          <p className=' font-sen font-bold text-2xl leading-133 text-black'>
            Jonathan Vallem
          </p>
          <TextFieldInfo text_color='text-gray'> New york, USA</TextFieldInfo>
        </div>
        {children}
      </div>
    </div>
  )
}
