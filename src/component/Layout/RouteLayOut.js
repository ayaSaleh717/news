import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const RouteLayOut = () => {
  return (
    <div className='root-layout'>
     <header>
      <nav>
        <h1>ROUTER</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/help'>Help</NavLink>
        <NavLink to='/careers'>Careers</NavLink>

      </nav>
    </header>
    
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RouteLayOut
