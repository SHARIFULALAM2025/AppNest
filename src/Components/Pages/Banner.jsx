import React from 'react';
import Container from '../Container/Container';

const Banner = () => {
    return (
      <div>
        <Container>
          <div className="space-y-12">
            <div className="flex items-center justify-center ">
              <div className="text-center">
                <h1 className="md:text-[4.5rem] text-[#001931] font-bold">
                  We Build{' '}
                  <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Productive
                  </span>{' '}
                  Apps
                </h1>

                <p className="font-normal text-xs banner overflow-hidden">
                  At HERO.IO , we craft innovative apps designed to make
                  everyday life simpler, smarter, and more exciting.Our goal is
                  to turn your ideas into digital experiences that truly make an
                  impact.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex  items-center gap-3">
                <a
                  href="https://play.google.com/store/games?hl=en"
                  className="flex items-center md:px-16 md:py-8 rounded-[4px]  border-[rgba(210,210,210,1)] border-2 gap-3 text-[rgba(0,25,49,1)] font-semibold text-[1rem]"
                >
                  <figure>
                    <img src="../playStore.png" alt="" />
                  </figure>
                  Google Play
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  className="flex items-center md:px-16 md:py-8 rounded-[4px] border-[rgba(210,210,210,1)] border-2 gap-3 text-[rgba(0,25,49,1)] font-semibold text-[1rem]"
                >
                  {' '}
                  <figure>
                    <img src="../appIcon.png" alt="" className="" />
                  </figure>
                  App Store
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src="../hero.png" alt="" className="" />
            </div>
          </div>
        </Container>
      </div>
    )
};

export default Banner;