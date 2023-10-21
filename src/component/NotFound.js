import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=''>
    <h2>Page Not Found</h2>
    <p>lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aspernatur iusto asperiores laborum, et eveniet possimus, sapiente maiores eaque placeat autem dignissimos soluta exercitationem numquam tempora nostrum amet ducimus non.</p>

     <p>Go to the <NavLink to='/'>Homepage</NavLink> .</p>
    </div>
  )
}

export default NotFound
