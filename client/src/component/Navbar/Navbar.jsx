import React from "react";
import { Link } from "react-router-dom";


import logo from '../../assests/logo.svg';
import search from '../../assests/search-icon.svg';
import Avatar from '../Avatar/Avatar.jsx'

import  './Navbar.css'
const Navbar=()=>{
var User= null
return(
    <nav className="nav1">
        <div className="navbar">
            <Link to="/" className="nav-item nav-btn">
            <img src={logo} alt="logo" className="nav-logo" />
            </Link>
            <Link to="/" className="nav-item nav-btn">About</Link>
            <Link to="/" className="nav-item nav-btn">Products</Link>
            <Link to="/" className="nav-item nav-btn">For Teams</Link>
           
            <form>
          <input type="text"placeholder="search.."  />
                <img src={search} alt="search" width="18"  className="search-icon"/>
          </form>

          
          
                
           

        { (User===null) ?
        <Link to="Auth" className="nav-item nav-links">Log in</Link>:
        <>
        <Avatar  backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to='/User'  style={{color:"white", textDecoration:'none'}}>m</Link></Avatar>
            <button>Log out</button>
        </>
        }
        </div>
    </nav>
)
}
export default Navbar