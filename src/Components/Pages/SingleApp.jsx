import React from 'react';

const SingleApp = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app
    return (
      <div>
        <div className=" bg-[rgba(255,255,255,1)] rounded-[4px]">
          <div className="p-[1rem] space-y-3">
            <figure>
              <img
                src={image}
                alt=""
                className="w-full h-[16rem] rounded-[8px]"
              />
            </figure>
            <h1 className="">{title}</h1>
            <div className="flex justify-between">
              <button className="flex items-center gap-2">
                <figure>
                  <img src="../icon-downloads.png" alt="" className="h-6 w-6" />
                </figure>
                {downloads}M
              </button>
              <button className="flex items-center gap-2">
                <figure>
                  <img src="../icon-ratings.png" alt="" className="h-6 w-6" />
                </figure>
                {ratingAvg}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleApp;