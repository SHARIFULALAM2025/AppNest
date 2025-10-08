import React from 'react';
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'
import { RiFacebookCircleLine } from 'react-icons/ri'
import Container from '../Container/Container';
import { Link } from 'react-router';

const Footer = () => {
    return (
      <footer className="bg-[rgba(0,25,49,1)]">
        <Container>
          <div className="flex justify-between ">
            <Link to='/'>
              {' '}
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
            <div className="text-white space-y-3">
              <h1 className="font-medium text-[rgba(255,255,255,1)] text-[1.25rem]">
                Social Links
              </h1>
              <div className=" flex space-x-3">
                <FaXTwitter></FaXTwitter>
                <IoLogoLinkedin></IoLogoLinkedin>
                <RiFacebookCircleLine></RiFacebookCircleLine>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-t-[rgba(229,231,235,1)] opacity-20"></div>
          <div className="text-center ">
            <small className="text-[rgba(250,250,250,1)] font-normal text-[1rem]">
              Copyright © 2025 - All right reserved
            </small>
          </div>
        </Container>
      </footer>
    )
};

export default Footer;