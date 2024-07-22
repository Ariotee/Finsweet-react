import { Container } from '~/shared/shells'
import { TextFieldInfo, TextFieldTitle } from '~/shared/fields/TextFields'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Slide } from './ui/Slide'

const Reviews = () => {
  return (
    <section className='pt-20 pb-32'>
      <Container>
        <div className='bg-light-yellow flex justify-between py-20 px-28'>
          <div className='text-black max-w-[350px] relative after:absolute after:content-[""] after:w-[0.5px] after:h-[310px] after:bg-gray after:right-0 after:top-[-20px]'>
            <p className='font-semibold font-inter text-base leading-125 tracking-[0.19em] uppercase'>
              Testimonials
            </p>
            <TextFieldTitle
              text_color='text-black'
              text_size='text-4xl'
              margin_bottom='mb-4'
              margin_top='mt-3'
            >
              What people say about our blog
            </TextFieldTitle>
            <TextFieldInfo text_color='text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </TextFieldInfo>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.btn-next',
              prevEl: '.btn-prev',
            }}
            slidesPerView={1}
            className='max-w-[530px] mx-0'
          >
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default Reviews
