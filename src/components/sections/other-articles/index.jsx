import { TextFieldInfo, TextFieldTitle } from '~/shared/fields/TextFields'
import { Container } from '~/shared/shells'

import Ill1 from '~/assets/img/posts/post-ill-1.png'
import Ill2 from '~/assets/img/posts/post-ill-2.png'
import Ill3 from '~/assets/img/posts/post-ill-3.png'

const OtherArticles = () => {
  return (
    <section className='my-32'>
      <Container>
        <TextFieldTitle
          margin_bottom={'mb-16'}
          text_color={'text-black'}
          text_size={'text-3xl'}
        >
          What to read next
        </TextFieldTitle>

        <div className='grid grid-cols-3 gap-8'>
          <div className='flex flex-col gap-8'>
            <div>
              <img src={Ill1} />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex'>
                <p className='font-inter font-medium text-[14px] leading-142 text-light-dark'>
                  By
                  <span className='text-purple ml-2'>John Deo</span>
                </p>
                <p className='font-inter font-medium text-[14px] leading-142 text-light-dark relative ml-6 before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:-left-3 before:bg-light-dark before:top-1'>
                  Aug 23, 2021
                </p>
              </div>

              <TextFieldTitle text_size={'text-2xl'} text_color={'text-black'}>
                A UX Case Study Creating a Studious Environment for Students:{' '}
              </TextFieldTitle>

              <TextFieldInfo text_color={'text-gray'}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </TextFieldInfo>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <div>
              <img src={Ill2} />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex'>
                <p className='font-inter font-medium text-[14px] leading-142 text-light-dark'>
                  By
                  <span className='text-purple ml-2'>John Deo</span>
                </p>
                <p className='font-inter font-medium text-[14px] leading-142 text-light-dark relative ml-6 before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:-left-3 before:bg-light-dark before:top-1'>
                  Aug 23, 2021
                </p>
              </div>

              <TextFieldTitle text_size={'text-2xl'} text_color={'text-black'}>
                A UX Case Study Creating a Studious Environment for Students:{' '}
              </TextFieldTitle>

              <TextFieldInfo text_color={'text-gray'}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </TextFieldInfo>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <div>
              <img src={Ill3} />
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex'>
                <p className='font-inter font-medium text-[14px] leading-142 text-light-dark'>
                  By
                  <span className='text-purple ml-2'>John Deo</span>
                </p>
                <p className='font-inter font-medium text-[14px] leading-142 text-light-dark relative ml-6 before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:-left-3 before:bg-light-dark before:top-1'>
                  Aug 23, 2021
                </p>
              </div>

              <TextFieldTitle text_size={'text-2xl'} text_color={'text-black'}>
                A UX Case Study Creating a Studious Environment for Students:{' '}
              </TextFieldTitle>

              <TextFieldInfo text_color={'text-gray'}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </TextFieldInfo>
            </div>
          </div>
        </div>

        <div className='block h-[1px] bg-gray w-full opacity-[0.32] mt-16'></div>
      </Container>
    </section>
  )
}

export default OtherArticles
