import { Container } from '~/shared/shells'
import { ButtonMore } from '~/shared/buttons'
import { TextFieldInfo, TextFieldTitle } from '~/shared/fields/TextFields'

import { CardPost } from './card/CardPost'

import PostImg from '~/assets/img/post-img.png'

const Posts = () => {
  return (
    <section className='py-8 mt-14'>
      <Container>
        <div className='flex-sb'>
          <TextFieldTitle text_size='text-4xl'>Featured Post</TextFieldTitle>

          <div className='flex-sb min-w-[500px]'>
            <TextFieldTitle text_size='text-4xl'>All Posts</TextFieldTitle>
            <a
              href='#'
              className='font-normal text-[16px] leading-175 text-purple '
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

              <div className='flex mt-[32px] font-inter font-medium text-[14px] leading-142 text-light-dark'>
                <p className='creator_name'>
                  By
                  <span className='text-accent-second ml-2'>John Doe</span>
                </p>
                <p className='relative ml-[25px] before:absolute before:content-[""] before:h-[12px] before:w-[1.5px] before:top-1 before:left-[-13px] before:bg-accent-second'>
                  May 23, 2022
                </p>
              </div>

              <TextFieldTitle
                text_size='text-[28px]'
                margin_bottom='mb-4'
                margin_top='mt-3'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </TextFieldTitle>

              <TextFieldInfo text_color='text-gray'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </TextFieldInfo>

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
