import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'
import { RiFacebookCircleLine } from 'react-icons/ri'
import Container from '../Container/Container'
import { Link, NavLink } from 'react-router'

import '../../App.css'
import { navList } from '../Header/NavData'
const Footer = () => {
  return (
    <footer className="relative   mt-[12.5rem]">
      <div className="bg-[#001931]  md:p-20">
        <Container>
          <div className="text-white grid grid-cols-2 gap-4 md:grid-cols-4 pt-[3.5rem] p-2 md:mt-8">
            <Link to="/">
              {' '}
              <div className="flex gap-2 items-center">
                <figure>
                  <img
                    src="/logo.png"
                    alt="logo image"
                    className="md:w-[2.5rem] w-[2rem] h-[2rem] md:h-[2.5rem]"
                  />
                </figure>
                <h1 className=" font-bold text-[1rem] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  HERO.IO
                </h1>{' '}
              </div>
            </Link>
            <div className="">
              <h1 className="mb-2 font-bold text-xl">pages</h1>
              <ul className={`flex-col gap-5 space-y-3 ml-3`}>
                {navList.map((item, index) => (
                  <li
                    key={index}
                    className="font-semibold text-[1rem]  "
                  >
                    <NavLink to={item.path}>
                      {item.icon}
                      {item.Name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h1 className="font-bold text-xl">Reach Us</h1>
              <div className="flex flex-col pt-3 space-y-2">
                {' '}
                <a href="/Contact" className="">
                  Contact
                </a>
                <a href="/About" className="">
                  About
                </a>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-xl">Social Link</h1>
              <div className="space-y-6 pt-3">
                <div className="flex items-center gap-1">
                  <FaXTwitter></FaXTwitter>
                  <h1 className="">Twitter</h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoLogoLinkedin></IoLogoLinkedin>
                  <h1 className="">Linkdin</h1>
                </div>
                <div className="flex items-center gap-1">
                  <RiFacebookCircleLine></RiFacebookCircleLine>
                  <h1 className="">Facebook</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-t-2 border-t-[rgba(229,231,235,1)] opacity-[0.2]"></div>
        </Container>
      </div>
      <div className=" bg-[#001931] text-2xl  text-center p-3 text-white">
        <small>Copyright © 2025 - All right reserved</small>
      </div>
      <div className="bg-[#001931] w-[80%]  -top-[5rem] md:-top-40 left-1/2 -translate-x-1/2 p-3 md:p-20  text-center absolute ">
        <h1 className="text-white text-base md:text-3xl font-bold">
          Our Latest App
        </h1>
        <div className="grid justify-center space-x-6 md:pt-3 text-white">
          <div className="md:flex grid grid-cols-2 gap-2  md:gap-6">
            <figure className="flex items-center gap-4">
              <img src="/react.png" alt="" className="w-5 h-5" />
              <h1 className="text-xs">React</h1>
            </figure>
            <figure className="flex items-center gap-4">
              <img src="/tailwind.png" alt="" className="w-6 h-6" />
              <h1 className="text-xs">Tailwind</h1>
            </figure>
            <div className="flex items-center gap-4">
              <img src="/next.jpeg" alt="" className="w-5 h-5" />
              <h1 className="text-xs">Next Js</h1>
            </div>
            <figure className="flex items-center gap-4">
              <img src="/mongo.png" alt="" className="w-5 h-5" />
              <h1 className="text-xs">MongoDB</h1>
            </figure>
            <figure className="flex items-center gap-4">
              <img src="/boot.jpeg" alt="" className="w-5 h-5" />
              <h1 className="text-xs">Bootstrap</h1>
            </figure>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
