
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
return(
   
   <div className='rightnavbar'>
        <Link to='/' className='home'>Home</Link>
        <Link to='/component/About' className='contactus'> About</Link>
        <Link to='/component/Projects' className='testimonials'>projects</Link>
        <button className='getintouch'>Get In Touch</button>
   </div>

);
}
export default Navbar;