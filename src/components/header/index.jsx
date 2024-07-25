import { Logotype } from '~/shared/icons'
import { Container } from '~/shared/shells'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-3 bg-black'>
      <Container>
        <div className='flex-sb'>
          <div className='flex-c'>
            <Link to={'/'}>
              <Logotype />
            </Link>
          </div>

          <div className='flex-c'>
            <nav className='mr-8'>
              <ul className='gap-6 flex-c'>
                <Link to={'/'} className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    Home
                  </li>
                </Link>
                <Link to={'blog'} className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    Blog
                  </li>
                </Link>
                <Link to={'aboutus'} className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    About Us
                  </li>
                </Link>
                <Link to={'contactus'} className='text-white'>
                  <li className='leading-7 font-normal text-base font-inter'>
                    Contact us
                  </li>
                </Link>
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
