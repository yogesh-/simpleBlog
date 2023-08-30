import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return(
    <nav className='bg-accent p-5 md:flex md:justify-between flex flex-col sticky h-16'>
      <div className='flex justify-between'>
       <div>
       <a href="/home">blogSimple</a>
        </div>
        <div className='md:space-x-4 flex-col  md:inline hidden'>
       
       <Link to="/create-post"> <a href="!#" className='hover:cursor-pointer hover:text-white '>Create Post</a></Link>
       <Link to="#"><a href="!#" className='hover:cursor-pointer hover:text-white '>My Profile</a></Link>
       <Link to="#"><a href="!#" className='hover:cursor-pointer hover:text-white '>Logout</a></Link>
        </div>

        
       

        {/* mobile menu button */}
        <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        </div>
       

        
</div>
<div>
  
</div>
        {isOpen?<div className='flex flex-col md:hidden justify-center items-center bg-background w-full mt-5 pl-0 border rounded'>
          <Link to="/"><a href="!#" className='p-0.5 hover:cursor-pointer hover:underline '>Main Page</a></Link> 
       <Link to="/create-post"> <a href="!#" className=' p-0.5 hover:cursor-pointer hover:underline'>Create Post</a></Link>
        </div>:""}
    </nav>
      );
}

