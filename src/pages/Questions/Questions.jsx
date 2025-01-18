import React from 'react'
import '../../App.css'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'


const Questions = () => {
  return (
    <div className='home-container-1 '>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
      </div>
    </div>
  )
}

export default Questions