import { Route, Routes } from 'react-router-dom'

import MainLayout from './pages/layouts/MainLayout'
import HomePage from './pages/home-page'
import BlogPage from './pages/blog-page'
import ContactUsPage from './pages/contact-us-page'
import AboutUsPage from './pages/about-us-page'
import AllPosts from './pages/all-posts-page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='aboutus' element={<AboutUsPage />} />
          <Route path='contactus' element={<ContactUsPage />} />
          <Route path='posts' element={<AllPosts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
