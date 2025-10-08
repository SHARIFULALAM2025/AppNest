import { createBrowserRouter } from 'react-router'
import Root from '../RootPage/Root'
import Error from '../ErrorPage/Error'
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/Apps',
        Component: Apps,
      },
      {
        path: '/Installation',
        Component: Installation,
      },
    ],
  },
])
export { router }