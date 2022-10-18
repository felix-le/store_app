import React from 'react'
import FooterSocials from './FooterSocials'
import NavTop from './NavTop'

const Layout = ({ children }) => {
  return (
    <>
      <NavTop />
      <main>{children}</main>
      <FooterSocials devider={true} />
    </>
  )
}

export default Layout
