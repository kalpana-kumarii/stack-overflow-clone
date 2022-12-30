import React from 'react'
import './RightSideBar.css'
import comment from '../../assests/comment-alt-solid.svg'
import pen from '../../assests/pen-alt-solid.svg'
import blackLogo from '../../assests/black-logo.png'

const Widget = () => {
  return (
    <div className='widget'>
<h4>The Overflow Blogs</h4>
<div className='right-sidebar-div-1'>
<div className='right-sidebar-div-2'>
    <img src={pen} alt='pen' width='18' />
    <p>Observability is key to future of software (and your devops career) </p>
</div>

<div className='right-sidebar-div-2'>
    <img src={pen} alt='pen' width='18' />
    <p>Podcast 374: How valueable is your screen name?</p>
</div>

</div>


<h4>Featured on Meta</h4>
<div className='right-sidebar-div-1'>
<div className='right-sidebar-div-2'>
    <img src={comment} alt='pen' width='18' />
    <p>Observability is key to future of software (and your devops career) </p>
</div>

<div className='right-sidebar-div-2'>
    <img src={comment} alt='pen' width='18' />
    <p>Podcast 374: How valueable is your screen name?</p>
</div>
<div className='right-sidebar-div-2'>
    <img src={blackLogo} alt='pen' width='18' />
    <p>Podcast 374: How valueable is your screen name?</p>
</div>
</div>


<h4>Hot Meta Posts</h4>
<div className='right-sidebar-div-1'>
<div className='right-sidebar-div-2'>
    <p>38</p>
    <p>Observability is key to future of software (and your devops career) </p>
</div>

<div className='right-sidebar-div-2'>
    <p>20</p>
    <p>Podcast 374: How valueable is your screen name?</p>
</div>

<div className='right-sidebar-div-2'>
    <p>14</p>
    <p>Podcast 374: How valueable is your screen name?</p>
</div>
</div>



    </div>
  )
}

export default Widget