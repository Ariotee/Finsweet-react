import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from '~/components/header/ui'
import Footer from '~/components/footer'

const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
