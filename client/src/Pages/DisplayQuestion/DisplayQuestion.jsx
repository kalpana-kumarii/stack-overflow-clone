import React from 'react'
import LeftSideBar from '../../component/LeftSideBar/LeftSideBar'
import RightSideBar from '../../component/RightSideBar/RightSideBar'
import QuestionDetails from './QuestionDetails.jsx'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftSideBar />
    <div className='home-container-2'> 
   <QuestionDetails />
    <RightSideBar />

    </div>
   </div>
  )
}

export default DisplayQuestion