import React from 'react';
import Container from '../Container/Container';

const Banner = () => {
    return (
      <div>
        <Container>
          <div className="space-y-12">
            <div className="flex items-center justify-center ">
              <div className="text-center">
                <h1 className="md:text-[4.5rem]  font-bold">
                  We Build{' '}
                  <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Productive
                  </span>{' '}
                  Apps
                </h1>

                <p className="font-normal text-xs banner overflow-hidden">
                  At HERO.IO , we craft innovative apps designed to make
                  everyday life simpler, smarter, and more exciting.Our
                  goal is to turn your ideas into digital experiences that truly
                  make an impact.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex  items-center gap-3">
                <button className="flex items-center md:px-16 md:py-8 rounded border-[rgba(210,210,210,1)] border-2 gap-3">
                  <figure>
                    <img src="../playStore.png" alt="" />
                  </figure>
                  Google Play
                </button>
                <button className="flex items-center md:px-16 md:py-8 rounded border-[rgba(210,210,210,1)] border gap-3">
                  {' '}
                  <figure>
                    <img src="../appIcon.png" alt="" className="" />
                  </figure>
                  App Store
                </button>
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