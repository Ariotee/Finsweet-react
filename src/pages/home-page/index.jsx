import React from 'react'

import Introduction from '~/components/sections/introduction'
import Posts from '~/components/sections/posts'
import AboutUs from '~/components/sections/about-us'
import Categories from '~/components/sections/categories'
import OurStory from '~/components/sections/our-story'
import Authors from '~/components/sections/authors'
import Partners from '~/components/sections/partners'

const HomePage = () => {
  return (
    <>
      <Introduction />
      <Posts />
      <AboutUs />
      <Categories />
      <OurStory />
      <Authors />
      <Partners />
    </>
  )
}

export default HomePage
