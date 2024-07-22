import { Link } from 'react-router-dom'

import { Container } from '~/shared/shells'
import { TextFieldInfo } from '~/shared/fields/TextFields'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Logotype,
} from '~/shared/icons'

const Footer = () => {
  return (
    <footer className='bg-black py-[60px] px-20'>
      <Container>
        <div className='flex justify-between'>
          <div className='logotype'>
            <Logotype />
          </div>
          <ul className='flex gap-6 font-inter font-normal text-base leading-175 text-white'>
            <li className='menu_item'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='menu_item'>
              <Link to={'blog'}>Blog</Link>
            </li>
            <li className='menu_item'>
              <Link to={'aboutus'}>About us</Link>
            </li>
            <li className='menu_item'>
              <Link to={'contactus'}>Contact us</Link>
            </li>
            <li className='menu_item'>
              <Link to={'privacypolis'}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className='py-20 px-16 flex items-center justify-between bg-[#2E3040] my-14'>
          <h3 className='max-w-[562px] font-sen font-bold text-4xl leading-133 tracking-[-0.06em] text-white'>
            Subscribe to our news letter to get latest updates and news
          </h3>
          <form action='#'>
            <input
              type='email'
              className='border border-solid border-border-dark py-[14px] px-[25px] w-[323px] placeholder:text-gray text-white'
              placeholder='Enter Your Email'
            />
            <button className='py-[15px] px-12 ml-6 bg-accent font-sen font-bold text-[18px] leading-133 text-black'>
              Subscribe
            </button>
          </form>
        </div>

        <div className='flex justify-between items-start'>
          <div className='font-inter font-normal text-base leading-175 text-white opacity-[0.7]'>
            <TextFieldInfo text_color='text-white'>
              Finstreet 118 2561 Fintown
            </TextFieldInfo>
            <TextFieldInfo text_color='text-white'>
              Hello@finsweet.com 020 7993 2905
            </TextFieldInfo>
          </div>
          <ul className='flex gap-7'>
            <li className='social_item'>
              <a href='#'>
                <Facebook />
              </a>
            </li>
            <li className='social_item'>
              <a href='#'>
                <Twitter />
              </a>
            </li>
            <li className='social_item'>
              <a href='#'>
                <Instagram />
              </a>
            </li>
            <li className='social_item'>
              <a href='#'>
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
