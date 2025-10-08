import React, { useState } from 'react';
import useAppData from '../Hooks/useAppData';
import Container from '../Container/Container';
import SingleAllApp from './SingleAllApp';

const Apps = () => {
    const { allApp } = useAppData()
    const [search, setSearch] = useState('')
    const filterSearch = search.trim().toLowerCase();
    const allFilterSearch = filterSearch
      ? allApp.filter((app) => app.title.toLowerCase().includes(filterSearch))
      : allApp



    return (
      <div className="bg-[#D9D9D9]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              {' '}
              <h1 className="text-[1.5rem] font-semibold text-[rgba(0,25,49,1)]">
                [{allFilterSearch.length}]App Found
              </h1>
            </div>
            <div className="">
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  required
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[1rem] ">
            {allFilterSearch.map((item, index) => (
              <SingleAllApp item={item} key={index}></SingleAllApp>
            ))}
          </div>
        </Container>
      </div>
    )
};

export default Apps;