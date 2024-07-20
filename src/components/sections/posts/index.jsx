import React from 'react'

import { Container } from '~/shared/shells'
import { ButtonMore } from '~/shared/buttons'
import { CardPost } from './card/CardPost'

import PostImg from '~/assets/img/post-img.png'

const Posts = () => {
  return (
    <section className='py-8 mt-14'>
      <Container>
        <div className='flex-sb'>
          <h2 className='font-sen font-bold text-[36px] leading-[133%] tracking-[-0.06em] text-black'>
            Featured Post
          </h2>

          <div className='flex-sb min-w-[500px] text-center'>
            <h2 className='font-bold text-[36px] leading-[133%] tracking-[-0.06em] font-sen text-black'>
              All Posts
            </h2>
            <a
              href='#'
              className='font-normal text-[16px] leading-[175%] text-purple '
            >
              View All
            </a>
          </div>
        </div>

        <div className='flex-sb'>
          <div className='posts__featured'>
            <div className='max-w-[733px] mt-8 p-8 border border-solid border-border-dark'>
              <div className='featured__body-img'>
                <img src={PostImg} alt='Post image' />
              </div>

              <div className='flex mt-[32px] font-inter font-medium text-[14px] leading-[143%] text-light-dark'>
                <p className='creator_name'>
                  By
                  <span className='text-accent-second ml-2'>John Doe</span>
                </p>
                <p className='relative ml-[25px] before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:top-1 before:left-[-13px] before:bg-accent-second'>
                  May 23, 2022
                </p>
              </div>

              <h3 className='my-4 font-sen font-bold text-[28px] leading-[143%] tracking-[-0.04em]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p className='font-inter font-normal text-[16px] leading-[175%] text-gray'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>

              <div className='mt-8'>
                <ButtonMore>Read More {'>'}</ButtonMore>
              </div>
            </div>
          </div>

          <div className='posts__all'>
            <ul className='mt-[82px]'>
              <CardPost />
              <CardPost />
              <CardPost />
              <CardPost />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Posts
