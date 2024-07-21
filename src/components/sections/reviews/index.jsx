import { Container } from '~/shared/shells'

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
            <p className='font-semibold font-inter text-base leading-[125%] tracking-[0.19em] uppercase'>
              Testimonials
            </p>
            <h2 className='font-bold font-sen text-4xl leading-[133%] tracking-[-0.06em] mt-3 mb-4'>
              What people say about our blog
            </h2>
            <p className='font-normal text-base leading-[175%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
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
