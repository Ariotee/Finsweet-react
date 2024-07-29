import {
  TextFieldSubTitle,
  TextFieldTitle,
  TextFieldInfo,
} from '~/shared/fields/TextFields'
import { Container } from '~/shared/shells'

import FeaturedIll from '~/assets/img/featured-ill.png'

const FeaturedPost = () => {
  return (
    <div className='bg-lavander p-20'>
      <Container>
        <div className='grid grid-cols-2 gap-36'>
          <div className=' flex flex-col max-w-[625px]'>
            <TextFieldSubTitle
              font_weight={'font-medium'}
              text_color={'text-black'}
            >
              Featured Post
            </TextFieldSubTitle>
            <TextFieldTitle
              margin_top={'mt-5'}
              margin_bottom={'mb-4'}
              text_color={'text-black'}
              text_size={'text-4xl'}
            >
              Step-by-step guide to choosing great font pairs
            </TextFieldTitle>
            <div className='flex'>
              <p className='font-inter font-medium text-[14px] leading-142 text-light-dark'>
                By
                <span className='text-purple ml-2'>John Deo</span>
              </p>
              <p className='font-inter font-medium text-[14px] leading-142 text-light-dark relative ml-6 before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:-left-3 before:bg-light-dark before:top-1'>
                Aug 23, 2021
              </p>
            </div>
            <TextFieldInfo
              text_color={'text-gray'}
              margin_bottom={'mb-8'}
              margin_top={'mt-4'}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </TextFieldInfo>
            <div className='btn-more'>
              <button className='py-4 px-12 font-sen bg-accent font-bold text-[18px] leading-133 text-black transition-colors duration-300 ease-in-out hover:bg-accent-dark'>
                Read More {'>'}
              </button>
            </div>
          </div>
          <div>
            <img src={FeaturedIll} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FeaturedPost
