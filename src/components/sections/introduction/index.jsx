import { Container } from '~/shared/shells'
import { ButtonMore } from '~/shared/buttons'
import { TextFieldInfo, TextFieldSubTitle } from '~/shared/fields/TextFields'

const Introduction = () => {
  return (
    <section className='pt-32 pb-[200px] bg-intro-bg bg-no-repeat bg-cover object-cover'>
      <Container>
        <div className='flex-start max-w-[800px]'>
          <TextFieldSubTitle text_color='text-white'>
            Posted on
            <span className='font-black text-base leading-125 tracking-[0.19em] uppercase text-white font-inter ml-2'>
              startup
            </span>
          </TextFieldSubTitle>

          <h1 className='font-bold my-6 text-[56px] leading-[114%] tracking-[-0.04em] font-sen text-white'>
            Step-by-step guide to choosing great font pairs
          </h1>
          <div className='flex-c gap-6'>
            <p className='font-normal text-base leading-175 text-white font-inter'>
              By <span className='text-accent'>James West</span>
            </p>
            <p className='font-normal text-base leading-175 font-inter relative before:absolute before:content-["|"] before:top-0 before:left-[-14px] text-white'>
              May 23, 2022
            </p>
          </div>

          <TextFieldInfo
            text_color='text-white'
            margin_bottom='mb-5'
            margin_top='mt-4'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </TextFieldInfo>

          <div className='flex-c'>
            <ButtonMore>Read More {'>'}</ButtonMore>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Introduction
