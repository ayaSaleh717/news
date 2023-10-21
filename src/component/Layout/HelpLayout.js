import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

function Help() {
  return (
    <div className='help-layout'>
     <h2>WEBSITE HELP</h2>
     <p>lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aspernatur iusto asperiores laborum, et eveniet possimus, sapiente maiores eaque placeat autem dignissimos soluta exercitationem numquam tempora nostrum amet ducimus non.</p>

     <nav>
        <h1>ROUTER</h1>
        <NavLink to='faq'>Viw the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
        

      </nav>

      <Outlet />
    </div>
  )
}

export default Help
