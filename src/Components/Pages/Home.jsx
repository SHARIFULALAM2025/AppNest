import Banner from './Banner'
import Review from './Review'
import Trending from './Trending'
import useAppData from '../Hooks/useAppData'
import SingleApp from './SingleApp'
import Container from '../Container/Container'
import '../../App.css'
import { useNavigate } from 'react-router'

const Home = () => {
  const { allApp } = useAppData()
  const totalApp = allApp.slice(0, 8)
  const navigate = useNavigate()
  const handelNavigate = () => {
    navigate('/Apps')
  }
  return (
    <div className="bg-[#D9D9D9]">
      <Banner></Banner>
      <Review></Review>
      <Trending></Trending>
      <div className="bg-[#D9D9D9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[1rem] md:mt-[5rem]">
            {totalApp.map((app, index) => (
              <SingleApp key={index} app={app}></SingleApp>
            ))}
          </div>
          <div className="flex justify-center items-center md:mt-[2.5rem] mt-3">
            <button
              onClick={handelNavigate}
              className="text-[rgba(255,255,255,1)] md:mb-6 mb-3 font-semibold text-[1rem] rounded-[4px] px-12 py-4 review"
            >
              Show All
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Home
