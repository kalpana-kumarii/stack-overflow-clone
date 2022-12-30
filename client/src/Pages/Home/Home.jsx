import React from 'react'
import LeftSideBar from '../../component/LeftSideBar/LeftSideBar'
import RightSideBar from '../../component/RightSideBar/RightSideBar'
import HomeMainBar from '../../component/HomeMainBar/HomeMainBar'
const Home = () => {
  return (
   <div className='home-container-1'>
    <LeftSideBar />
    <div className='home-container-2'> 
      <HomeMainBar />
    <RightSideBar />

    </div>
   </div>

  )
}

export default Home