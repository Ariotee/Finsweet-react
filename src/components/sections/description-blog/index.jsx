import { Container } from '~/shared/shells'
import { StartupIcon } from '~/shared/icons'
import { TextFieldInfo, TextFieldTitle } from '~/shared/fields/TextFields'

import SwiperAvatar from '~/assets/img/avatarslide.png'
import IntroImg from '~/assets/img/intro-blog.png'

const DescriptionBlog = () => {
  return (
    <section className='mt-32 mb-12'>
      <Container>
        <div className='flex flex-col items-center gap-16'>
          <div className='max-w-[550px]'>
            <div className='flex items-center gap-4'>
              <img src={SwiperAvatar} />
              <div>
                <p className='font-sen font-bold text-2xl leading-133 text-purple'>
                  Andrew Jonson
                </p>
                <TextFieldInfo text_color='text-gray'>
                  Posted on 27th January 2022
                </TextFieldInfo>
              </div>
            </div>

            <TextFieldTitle
              text_color={'text-black'}
              text_size={'text-4xl'}
              margin_top={'mt-6'}
              margin_bottom={'mb-[34px]'}
            >
              Step-by-step guide to choosing great font pairs
            </TextFieldTitle>

            <div className='flex gap-2 items-center'>
              <StartupIcon bg_color={'#fff'} />
              <span className='font-bold text-2xl leading-133 text-black'>
                Startup
              </span>
            </div>
          </div>

          <div>
            <img src={IntroImg} />
          </div>

          <div className='flex flex-col items-center gap-12 max-w-[800px]'>
            <div className=''>
              <TextFieldTitle text_size={'text-3xl'} text_color={'text-black'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </TextFieldTitle>

              <TextFieldInfo text_color={'text-gray'} margin_top={'mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus. Sociis natoque
                penatibus et magnis dis parturient montes. Ridiculus mus mauris
                vitae ultricies leo. Neque egestas congue quisque egestas diam.
                Risus in hendrerit gravida rutrum quisque non.
              </TextFieldInfo>
            </div>

            <div className=''>
              <TextFieldTitle text_size={'text-3xl'} text_color={'text-black'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </TextFieldTitle>

              <TextFieldInfo text_color={'text-gray'} margin_top={'mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus. Sociis natoque
                penatibus et magnis dis parturient montes. Ridiculus mus mauris
                vitae ultricies leo. Neque egestas congue quisque egestas diam.
                Risus in hendrerit gravida rutrum quisque non.
              </TextFieldInfo>

              <TextFieldInfo text_color={'text-gray'} margin_top={'mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus. Sociis natoque
                penatibus et magnis dis parturient montes. Ridiculus mus mauris
                vitae ultricies leo. Neque egestas congue quisque egestas diam.
                Risus in hendrerit gravida rutrum quisque non.
              </TextFieldInfo>

              <ul className='mt-6'>
                <li className='relative font-bold text-2xl leading-133 text-[#161722] opacity-[0.78] before:absolute before:content-[""] before:w-[0.40rem] before:h-[0.40rem] before:left-[-20px] ml-6 before:top-[14px] before:rounded-full before:bg-[#161722]'>
                  Lorem ipsum dolor sit amet
                </li>
                <li className='relative font-bold text-2xl leading-133 text-[#161722] opacity-[0.78] before:absolute before:content-[""] before:w-[0.40rem] before:h-[0.40rem] before:left-[-20px] ml-6 before:top-[14px] before:rounded-full before:bg-[#161722]'>
                  Non blandit massa enim nec scelerisque
                </li>
                <li className='relative font-bold text-2xl leading-133 text-[#161722] opacity-[0.78] before:absolute before:content-[""] before:w-[0.40rem] before:h-[0.40rem] before:left-[-20px] ml-6 before:top-[14px] before:rounded-full before:bg-[#161722]'>
                  Neque egestas congue quisque egestas
                </li>
              </ul>

              <TextFieldInfo text_color={'text-gray'} margin_top={'mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus. Sociis natoque
                penatibus et magnis dis parturient montes. Ridiculus mus mauris
                vitae ultricies leo. Neque egestas congue quisque egestas diam.
                Risus in hendrerit gravida rutrum quisque non.
              </TextFieldInfo>
            </div>

            <div className=''>
              <TextFieldTitle text_size={'text-3xl'} text_color={'text-black'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </TextFieldTitle>

              <TextFieldInfo text_color={'text-gray'} margin_top={'mt-4'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus. Sociis natoque
                penatibus et magnis dis parturient montes. Ridiculus mus mauris
                vitae ultricies leo. Neque egestas congue quisque egestas diam.
                Risus in hendrerit gravida rutrum quisque non.
              </TextFieldInfo>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DescriptionBlog
