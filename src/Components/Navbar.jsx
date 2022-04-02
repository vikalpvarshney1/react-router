import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (

    <div>
<Link to="/">HOME</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/users">Users</Link>
<Link to="/login">Login</Link>



    </div>
  )
}

export  {Navbar}