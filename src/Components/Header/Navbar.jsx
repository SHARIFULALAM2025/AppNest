import React, { useState } from 'react'
import { navList } from './NavData'
import { Link, NavLink } from 'react-router'
import '../../App.css'
import { FaAlignJustify } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import Container from '../Container/Container'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handel = () => {
    setToggle(!toggle)
  }

  const handelNavigate = () => {
    window.location.href = 'https://github.com/SHARIFULALAM2025'
  }
  return (
    <div className="md:bg-[rgba(255,255,255,1)]">
      <Container>
        <nav className="flex justify-between items-center p-3 ">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <figure>
                <img
                  src="../logo.png"
                  alt="logo image"
                  className="md:w-[2.5rem] w-[2rem] h-[2rem] md:h-[2.5rem]"
                />
              </figure>
              <h1
                className=" font-bold text-[1rem] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent
          "
              >
                HERO.IO
              </h1>{' '}
            </div>
          </Link>
          <div className="md:flex hidden">
            <ul className={`flex gap-5`}>
              {navList.map((item, index) => (
                <li
                  key={index}
                  className="font-semibold text-[1rem] text-[rgba(0,0,0,0.9)]"
                >
                  <NavLink to={item.path}>{item.Name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* for mobile device */}
          {toggle && (
            <div className="absolute md:hidden mt-44 bg-white p-3 rounded-lg ">
              <ul className={`flex-col gap-5 space-y-3 ml-3`}>
                {navList.map((item, index) => (
                  <li
                    key={index}
                    className="font-semibold text-[1rem]  text-[rgba(0,0,0,0.9)]"
                  >
                    <NavLink to={item.path}>{item.Name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/*  */}
          <div className="flex gap-2">
            <button
              onClick={handelNavigate}
              className="flex items-center gap-2.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] md:px-4 px-3 md:py-3 py-2  rounded-[4px]"
            >
              <img src="../fi_2111432.png" alt="" />
              <span className="text-[rgba(255,255,255,1)] text-[1rem] font-semibold">
                Contribute
              </span>
            </button>
            {/* toggle button for mobile device */}
            <div className="md:hidden">
              <button onClick={handel}>
                {toggle ? (
                  <RxCross2 className="w-8 h-8"></RxCross2>
                ) : (
                  <FaAlignJustify className="w-8 h-8"></FaAlignJustify>
                )}
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
