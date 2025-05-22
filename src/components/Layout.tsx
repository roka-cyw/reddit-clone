import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <div className='app-container'>
        <Navbar />
        <div className='main-container'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
