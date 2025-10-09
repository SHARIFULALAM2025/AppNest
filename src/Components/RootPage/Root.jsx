import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Footer/Footer'
const Root = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const time = setTimeout(() => {
      setLoading(false)
    }, 800)
    return () => clearTimeout(time)
  }, [location.pathname])
  return (
    <div className="">
      <Navbar></Navbar>
      {loading && (
        <div className="flex justify-center relative items-center">
          {' '}
          <span className="loading  absolute top-0 left-[50%] text-red-900 loading-lg loading-bars"></span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
