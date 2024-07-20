import React from 'react'

import Introduction from '~/components/sections/introduction'
import Posts from '~/components/sections/posts'
import AboutUs from '~/components/sections/about-us'
import Categories from '~/components/sections/categories'

const HomePage = () => {
  return (
    <>
      <Introduction />
      <Posts />
      <AboutUs />
      <Categories />
    </>
  )
}

export default HomePage
