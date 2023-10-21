import React from 'react'
import { Outlet } from 'react-router-dom'

function CareersLayout() {
  return (
    <div className='careers-layout'>
    <h2>Career</h2>
     <p>lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aspernatur iusto asperiores laborum, et eveniet possimus, sapiente maiores eaque placeat autem dignissimos soluta exercitationem numquam tempora nostrum amet ducimus non.</p>

      <Outlet />
    </div>
  )
}

export default CareersLayout
