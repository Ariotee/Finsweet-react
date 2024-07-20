import React from 'react'

import { Container } from '~/shared/shells'
import {
  TextFieldInfo,
  TextFieldSubTitle,
  TextFieldTitle,
} from './ui/TextFields'
import { MainBlock } from './ui/Blocks'

const AboutUs = () => {
  return (
    <div className='relative mt-20 py-24 bg-[#f4f0f8] before:absolute before:right-0 before:top-[-23px] before:content-[url(../../src/assets/svg/pattern.svg)]'>
      <Container>
        <div className='flex-sb-nc'>
          <MainBlock>
            <TextFieldSubTitle>About Us</TextFieldSubTitle>
            <TextFieldTitle>
              We are a community of content writers who share their learnings
            </TextFieldTitle>
            <TextFieldInfo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextFieldInfo>
            <a
              href='#'
              className='block mt-4 font-sen font-bold text-[18px] leading-[178%] text-purple'
            >
              Read More {'>'}
            </a>
          </MainBlock>

          <MainBlock>
            <TextFieldSubTitle>Our mision</TextFieldSubTitle>
            <TextFieldTitle>
              Creating valuable content for creatives all around the world
            </TextFieldTitle>
            <TextFieldInfo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TextFieldInfo>
          </MainBlock>
        </div>
      </Container>
    </div>
  )
}

export default AboutUs
