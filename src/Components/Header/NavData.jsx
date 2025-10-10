import { FaHome } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { RiInstallFill } from "react-icons/ri";

const navList = [
  {
    id: 1,
    Name: 'Home',
    path: '/',
    icon: <FaHome className="w-5 h-5"></FaHome>,
  },
  {
    id: 2,
    Name: 'Apps',
    path: '/Apps',
    icon: <FaAppStoreIos className="w-5 h-5"></FaAppStoreIos>,
  },
  {
    id: 3,
    Name: 'Installation',
    path: '/Installation',
    icon: <RiInstallFill className="w-5 h-5"></RiInstallFill>,
  },
]
export { navList }