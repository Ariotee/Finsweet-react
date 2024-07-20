import React from 'react'

import Introduction from '~/components/sections/introduction'
import Posts from '../../components/sections/posts'
import AboutUs from '~/components/sections/about-us'

const HomePage = () => {
  return (
    <>
      <Introduction />
      <Posts />
      <AboutUs />
    </>
  )
}

export default HomePage
