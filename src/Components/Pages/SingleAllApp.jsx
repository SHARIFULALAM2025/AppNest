import React from 'react'
import { Link } from 'react-router'

const SingleAllApp = ({ item }) => {
  const { image, title, downloads, ratingAvg ,id} = item

  return (
    <div>
      <Link to={`/allApp/${id}`}>
        <div className=" bg-[rgba(255,255,255,1)] shadow-md rounded-[4px] h-[27rem]">
          <div className="p-[1rem] space-y-3">
            <figure>
              <img
                src={image}
                alt=""
                className="w-full h-[16rem] rounded-[8px]"
              />
            </figure>
            <h1 className="md:text-[1.25rem] text-sx text-[rgba(0,25,49,1)] font-medium">
              {title}
            </h1>
            <div className="flex justify-between">
              <button className="flex items-center px-2.5 py-1.5 bg-[rgba(241,245,232,1)] rounded-[4px] text-[rgba(0,211,144,1)] gap-2  text-[1rem] font-medium">
                <figure>
                  <img src="/icon-downloads.png" alt="" className="h-6 w-6" />
                </figure>
                {downloads}M
              </button>
              <button className="flex px-2.5 py-1.5 bg-[rgba(241,245,232,1)] rounded-[4px] items-center gap-2 text-[rgba(255,136,17,1)] text-[1rem] font-medium">
                <figure>
                  <img src="/icon-ratings.png" alt="" className="h-6 w-6" />
                </figure>
                {ratingAvg}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SingleAllApp
