import React from 'react'

import { Logotype } from '../../../shared/icons'
import { Container } from '../../../shared/shells'

const Header = () => {
  return (
    <header className='py-3 bg-black'>
      <Container>
        <div className='flex-sb'>
          <div className='flex-c'>
            <Logotype />
          </div>

          <div className='flex-c'>
            <nav className='mr-8'>
              <ul className='gap-6 flex-c'>
                <a href='#' className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    Home
                  </li>
                </a>
                <a href='#' className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    Blog
                  </li>
                </a>
                <a href='#' className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    About Us
                  </li>
                </a>
                <a href='#' className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    Contact us
                  </li>
                </a>
              </ul>
            </nav>

            <div className='flex-c'>
              <button className='bg-white leading-7 font-medium text-lg px-[35px] py-2.5 font-sen'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
