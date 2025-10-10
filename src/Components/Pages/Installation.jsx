import { useEffect, useState } from 'react'
import Container from '../Container/Container'
import { toast, ToastContainer } from 'react-toastify'
import InstallApp from './InstallApp'
const Installation = () => {
  const [install, setInstall] = useState([])
  const [sort, setSort] = useState('none')
  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem('wishInstallation'))
    if (saveData) {
      setInstall(saveData)
    }
  }, [])
  const sortItem = (() => {
    if (sort === 'size-asc') {
      return [...install].sort((a, b) => a.downloads - b.downloads)
    } else if (sort === 'size-desc') {
      return [...install].sort((a, b) => b.downloads - a.downloads)
    } else {
      return install
    }
  })()


  const handelRemove = (id) => {
    const existingData = JSON.parse(localStorage.getItem('wishInstallation'))
    let updateData = existingData.filter((item) => item.id !== id)

    setInstall(updateData)
    localStorage.setItem('wishInstallation', JSON.stringify(updateData))
    toast.success('App Uninstall !')
  }

  return (
    <div className="bg-[#D9D9D9]">
      <Container>
        <InstallApp></InstallApp>
        <div className="flex md:justify-between justify-around items-center">
          <h1 className="text-[1.25rem] font-medium text-[rgba(0,25,49,1)]">
            Apps Found:{install.length}
          </h1>
          <fieldset className="">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-3 border-[4px] text-[#627382] font-normal text-[1rem]  border-[rgba(210,210,210,1)]"
            >
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low-&gt;High</option>
              <option value="size-desc">High-&gt;Low</option>
            </select>
          </fieldset>
        </div>
        <div className="">
          {sortItem.map(
            ({ image, title, downloads, ratingAvg, size, id }, index) => (
              <div key={index} className="">
                <div className="bg-[rgba(255,255,255,1)] md:flex justify-between gap-4 mt-4 items-center  md:p-[1.625rem] rounded-[.25rem] p-2">
                  <div className="md:flex items-center gap-1 md:gap-[1rem]   ">
                    <div className="">
                      <figure>
                        <img
                          src={image}
                          alt=""
                          className="md:w-[5rem] md:h-[5rem] rounded-[8px] w-full bg-cover"
                        />
                      </figure>
                    </div>
                    <div className="">
                      <h1 className="text-[rgba(0,25,49,1)] text-[.5rem] md:text-[1.25rem] md:font-medium font-bold">
                        {title}
                      </h1>
                      <div className="flex items-center  gap-5">
                        <div className="md:flex gap-1 md:gap-3 flex items-center ">
                          <figure>
                            <img
                              src="/icon-downloads.png"
                              alt=""
                              className="md:h-5 h-2 w-2 md:w-5"
                            />
                          </figure>

                          <h3 className=" text-[1rem] text-[rgba(0,211,144,1)] font-medium">
                            {downloads}M
                          </h3>
                        </div>
                        <div className="flex  gap-1 md:gap-3 items-center">
                          <figure>
                            <img
                              src="/star.png"
                              alt=""
                              className="md:h-5 h-2 w-2 md:w-5"
                            />
                          </figure>

                          <h3 className=" text-[1rem] text-[rgba(255,136,17,1)] font-medium">
                            {ratingAvg}
                          </h3>
                        </div>
                        <div className="">
                          <span className="text-[rgba(98,115,130,1)] text-[1rem] font-normal">
                            {size}MB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button
                      onClick={() => handelRemove(id)}
                      className="md:px-4 px-1.5 md:py-3 py-1
                       bg-[rgba(0,211,144,1)] rounded-[.25rem] text-[.5rem]"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
          <ToastContainer></ToastContainer>
        </div>
      </Container>
    </div>
  )
}

export default Installation
