import React, { useEffect, useState } from 'react';
import useAppData from '../Hooks/useAppData';
import Container from '../Container/Container';
import SingleAllApp from './SingleAllApp';
import Application from './Application';
import ErrorData from '../ErrorPage/ErrorData';

const Apps = () => {
    const { allApp,  } = useAppData()
    const [search, setSearch] = useState('')
    // const filterSearch = search.trim().toLowerCase();
    // const allFilterSearch = filterSearch
    //   ? allApp.filter((app) => app.title.toLowerCase().includes(filterSearch))
    // : allApp


const [foundData,setFoundData]=useState([])
const [searchData,setSearchData]=useState(false)
  useEffect(() => {
    if (!search.trim()) {
      setFoundData(allApp)
      return
    }
    setSearchData(true)
    const late=setTimeout(() => {
      const filter = allApp.filter((app) => app.title.toLowerCase().includes(search.toLowerCase())
    )
        setFoundData(filter)
        setSearchData(false)

    }, 800);
    return()=>clearTimeout(late)
},[search,allApp])


    return (
      <div className="bg-[#D9D9D9]">
        <Container>
          <Application></Application>
          <div className="md:flex justify-between  items-center p-2 space-y-3 ">
            <div className="">
              {' '}
              <h1 className="text-[1.5rem] font-semibold text-[rgba(0,25,49,1)]">
                [{foundData.length}]App Found
              </h1>
            </div>
            <div className="">
              <label className="input">
                <svg
                  className="h-5 w-5 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  className="outline-none md:px-8 md:py-3 "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  required
                  placeholder="Search App"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[1rem] md:mt-[1.75rem] ">
            {searchData ? (
              <div className="flex justify-center items-center ">
                <div className="">
                  <span className="loading loading-bars loading-xl text-red-700"></span>
                </div>
              </div>
            ) : foundData.length === 0 ? (
              <ErrorData></ErrorData>
            ) : (
              foundData.map((item, index) => (
                <SingleAllApp item={item} key={index}></SingleAllApp>
              ))
            )}
          </div>
        </Container>
      </div>
    )
};

export default Apps;