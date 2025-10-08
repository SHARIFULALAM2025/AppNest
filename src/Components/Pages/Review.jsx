import React from 'react'
import Container from '../Container/Container'
import '../../App.css'
const Review = () => {
  return (
    <div className="review">
      <Container>
        <div className="md:space-y-8 space-y-4">
          <h1 className="text-center md:text-[3rem] text-[1.5rem] font-bold text-[rgba(255,255,255,1)]">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 ">
            <div className=" text-center space-y-3">
              <h1 className="text-[1rem] text-[rgba(255,255,255,1)] font-normal">
                Total Downloads
              </h1>
              <p className="md:text-[4rem] text-[2rem] text-[rgba(255,255,255,1)] font-extrabold">
                29.6M
              </p>
              <h1 className="text-[1rem] text-[rgba(255,255,255,1)] font-normal">
                21% more than last month
              </h1>
            </div>
            <div className=" text-center">
              <h1 className="text-[1rem] text-[rgba(255,255,255,1)] font-normal">
                Total Reviews
              </h1>
              <p className="md:text-[4rem] text-[2rem] text-[rgba(255,255,255,1)] font-extrabold">
                906K
              </p>
              <h1 className="text-[1rem] text-[rgba(255,255,255,1)] font-normal">
                46% more than last month
              </h1>
            </div>
            <div className=" text-center">
              <h1 className="text-[1rem] text-[rgba(255,255,255,1)] font-normal">
                Active Apps
              </h1>
              <p className="md:text-[4rem] text-[2rem] text-[rgba(255,255,255,1)] font-extrabold ">
                132+
              </p>
              <h1 className="text-[1rem] text-[rgba(255,255,255,1)] font-normal">
                31 more will Launch
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Review
