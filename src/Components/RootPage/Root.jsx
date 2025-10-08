import React from 'react'
import Container from '../Container/Container'
import Navbar from '../Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

export default Root
