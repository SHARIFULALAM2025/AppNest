import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useAppData from '../Hooks/useAppData'
import Container from '../Container/Container'

import { toast, ToastContainer } from 'react-toastify'
import {
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts'
const AppDetails = () => {
  const [isDisable, setIsDisable] = useState(false)
  const { id } = useParams()
  const { allApp, loading } = useAppData()
  const findData = allApp.find((item) => item.id === parseInt(id))
  const newData = findData?.ratings || []
   useEffect(() => {
     const existingData =
       JSON.parse(localStorage.getItem('wishInstallation')) || []
     const exist = existingData.some((item) => item.id === parseInt(id))
     if (exist) {
       setIsDisable(true)
     }
   }, [id])
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
    size,
  } = findData || {}
  // local storage

  const handel = () => {
    setIsDisable(true)
    toast.success('App installed')
    const existingData = JSON.parse(localStorage.getItem('wishInstallation'))
    let updateData = []
    if (existingData) {

      updateData = [...existingData, findData]
    } else {
      updateData.push(findData)
    }
    localStorage.setItem('wishInstallation', JSON.stringify(updateData))

  }

  return (
    <div className="bg-[#D9D9D9] ">
      <Container>
        <div className="md:flex justify-between space-y-3 md:gap-6 p-2">
          <div className="">
            <figure>
              <img src={image} alt="" className="w-full bg-cover" />
            </figure>
          </div>
          <div className="">
            <h1 className="md:text-[2rem] text-xl font-semibold text-[rgba(0,25,49,1)] ">
              {title}
            </h1>
            <h1 className="text-[1.25rem] font-semibold text-[rgba(58,115,130,1)]">
              Developed By:
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </h1>
            <div className="border border-t-2 border-t-[rgba(0,25,49,1)] opacity-[.2]"></div>
            <div className="grid md:grid-cols-3 space-y-3 mt-2 grid-cols-3">
              <div className="">
                <figure>
                  <img src="/icon-downloads.png" alt="" className="w-5 h-5" />
                </figure>
                <h1 className="md:text-[1rem] text-xs text-[rgba(0,25,49,1)] font-normal">
                  Downloads
                </h1>
                <h3 className="md:text-[4rem] text-[1rem] text-[rgba(0,25,49,1)] font-extrabold">
                  {downloads}M
                </h3>
              </div>
              <div className="">
                <figure>
                  <img src="/star.png" alt="" className="w-5 h-5" />
                </figure>
                <h1 className="md:text-[1rem] text-xs text-[rgba(0,25,49,1)] font-normal">
                  Average Ratings
                </h1>
                <h3 className="md:text-[4rem] text-[1rem] text-[rgba(0,25,49,1)] font-extrabold">
                  {ratingAvg}
                </h3>
              </div>
              <div className="">
                <figure>
                  <img src="/icon-review.png" alt="" className="w-5 h-5" />
                </figure>
                <h1 className="md:text-[1rem] text-xs text-[rgba(0,25,49,1)] font-normal">
                  Total Reviews
                </h1>
                <h3 className="md:text-[4rem] text-[1rem] text-[rgba(0,25,49,1)] font-extrabold">
                  {reviews}M
                </h3>
              </div>
            </div>
            <button
              disabled={isDisable}
              onClick={handel}
              className="bg-[rgba(0,211,144,1)] text-[rgba(0,25,49,1)] p-2 md:text-[1.25rem] rounded-[4px] px-3 py-1.5  md:px-5 md:py-3 "
            >
              {isDisable ? 'Installed' : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        {/*  */}
        <h1 className=" text-2xl font-semibold p-2 text-[rgba(0,25,49,1)]">
          Ratings
        </h1>
        <div className="space-y-3">
          <div className=" md:h-80 h-60 ">
            <ResponsiveContainer>
              <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={newData}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" reversed={true} />
                <Tooltip />
                <Legend />

                <Bar dataKey="count" barSize={20} fill="#FF8811" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="border border-t-2 border-t-[rgba(0,25,49,1)] opacity-[0.2]"></div>
        {/*  */}
        <div className="">
          <h1 className="text-[1.5rem] text-[rgba(0,25,49,1)] p-2 font-semibold">
            Description
          </h1>
          <p className="md:text-[rgba(98,115,130,1)] text-black text-xs p-2 md:text-[1.25rem] font-normal">
            {description}
          </p>
        </div>
      </Container>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default AppDetails
