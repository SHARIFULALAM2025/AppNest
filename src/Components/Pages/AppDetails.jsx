import React from 'react'
import { useParams } from 'react-router'
import useAppData from '../Hooks/useAppData'
import Container from '../Container/Container'

const AppDetails = () => {
  const { id } = useParams()

  const { allApp, loading } = useAppData()
  const findData = allApp.find((item) => item.id === parseInt(id))
  if (loading) {
    return <p>loading...</p>
  }
  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews,
    companyName,
    description,
  } = findData

  return (
    <div className="bg-[#D9D9D9]">
      <Container>
        <div className="flex justify-between gap-6">
          <div className="">
            <figure>
              <img src={image} alt="" className="" />
            </figure>
          </div>
          <div className="">
            <h1 className="text-[2rem] font-semibold text-[rgba(0,25,49,1)] ">
              {title}
            </h1>
            <h1 className="text-[1.25rem] font-semibold text-[rgba(58,115,130,1)]">
              Developed By:
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </h1>
            <div className="border border-t-2 border-t-[rgba(0,25,49,1)] opacity-[.2]"></div>
            <div className="grid grid-cols-3">
              <div className="">
                <figure>
                  <img src="/icon-downloads.png" alt="" className="" />
                </figure>
                <h1 className="text-[1rem] text-[rgba(0,25,49,1)] font-normal">
                  Downloads
                </h1>
                <h3 className="md:text-[4rem] text-[2rem] text-[rgba(0,25,49,1)] font-extrabold">
                  {downloads}M
                </h3>
              </div>
              <div className="">
                <figure>
                  <img src="/star.png" alt="" className="" />
                </figure>
                <h1 className="text-[1rem] text-[rgba(0,25,49,1)] font-normal">
                  Average Ratings
                </h1>
                <h3 className="md:text-[4rem] text-[2rem] text-[rgba(0,25,49,1)] font-extrabold">
                  {ratingAvg}
                </h3>
              </div>
              <div className="">
                <figure>
                  <img src="/icon-review.png" alt="" className="" />
                </figure>
                <h1 className="text-[1rem] text-[rgba(0,25,49,1)] font-normal">
                  Total Reviews
                </h1>
                <h3 className="md:text-[4rem] text-[2rem] text-[rgba(0,25,49,1)] font-extrabold">
                  {reviews}M
                </h3>
              </div>
            </div>
            <button className="bg-[rgba(0,211,144,1)] text-[rgba(0,25,49,1)] text-[1.25rem] rounded-[4px] px-16 py-8 ">
              Install Now (291 MB)
            </button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="">
          <h1 className="text-[1.5rem] text-[rgba(0,25,49,1)] font-semibold">
            Description
          </h1>
          <p className="text-[rgba(98,115,130,1)] text-[1.25rem] font-normal">
            {description}
          </p>
        </div>
      </Container>
    </div>
  )
}

export default AppDetails
