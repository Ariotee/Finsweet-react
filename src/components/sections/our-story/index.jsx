import React from 'react'

import { Container } from '~/shared/shells'
import {
  TextFieldInfo,
  TextFieldSubTitle,
  TextFieldTitle,
} from '../about-us/ui/TextFields'

const OurStory = () => {
  return (
    <section className='h-[705px]'>
      <Container>
        <div className='flex relative items-end justify-end h-[705px] bg-story-bg bg-no-repeat '>
          <div className='bg-white w-[706px] p-[70px]'>
            <TextFieldSubTitle>Why we started</TextFieldSubTitle>
            <TextFieldTitle>
              It started out as a simple idea and evolved into our passion
            </TextFieldTitle>
            <TextFieldInfo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </TextFieldInfo>
            <div className='mt-8'>
              <button className='py-4 px-12 font-sen bg-accent font-bold text-[18px] leading-[133%] text-black transition-colors duration-300 ease-in-out hover:bg-accent-dark'>
                Discover our story {'>'}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurStory
