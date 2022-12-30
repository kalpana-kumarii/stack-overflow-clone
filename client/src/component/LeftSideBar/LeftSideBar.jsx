import React from 'react'
import {NavLink}  from 'react-router-dom'
import Globe from '../../assests/globe.svg'
import './LeftSideBar.css'
const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>  
        <div className='side-nav-div'>
        <NavLink to='/Tags' className='side-nav-links'activeClassName="active" style={{paddingLeft:'40px'}}  >
                <p>Home</p>
            </NavLink>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links'  activeClassName='active' style={{paddingLeft:'40px'}}  >
                <img src={Globe}  width='20' alt='lobe' />
                <p style={{paddingLeft: '10px'}} >Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}  >
                <p>Tags</p>
            </NavLink>

            <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}  >
                <p>Users</p>
            </NavLink>
        </div>
        </nav>       
    </div>
  )
}

export default LeftSideBar