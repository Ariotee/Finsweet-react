import { Container } from '~/shared/shells'
import {
  TextFieldInfo,
  TextFieldSubTitle,
  TextFieldTitle,
} from '~/shared/fields/TextFields'
import { MainBlock } from './ui/Blocks'

const AboutUs = () => {
  return (
    <section className='relative mt-20 py-24 bg-[#f4f0f8] before:absolute before:right-0 before:top-[-23px] before:content-[url(../../src/assets/svg/pattern.svg)]'>
      <Container>
        <div className='flex-sb-nc'>
          <MainBlock>
            <TextFieldSubTitle>About Us</TextFieldSubTitle>
            <TextFieldTitle
              text_color='text-black'
              margin_top='mt-6'
              margin_bottom='mb-4'
              text_size='text-4xl'
            >
              We are a community of content writers who share their learnings
            </TextFieldTitle>
            <TextFieldInfo text_color='text-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextFieldInfo>
            <a
              href='#'
              className='block mt-4 font-sen font-bold text-[18px] leading-175 text-purple'
            >
              Read More {'>'}
            </a>
          </MainBlock>

          <MainBlock>
            <TextFieldSubTitle>Our mision</TextFieldSubTitle>
            <TextFieldTitle
              text_color='text-black'
              text_size='text-[28px]'
              margin_top='mt-6'
              margin_bottom='mb-4'
            >
              Creating valuable content for creatives all around the world
            </TextFieldTitle>
            <TextFieldInfo text_color='text-gray'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TextFieldInfo>
          </MainBlock>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs
