import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
    <div className='bg-gray-500 p-5 flex justify-between'>
       <div>
       <a>blogSimple</a>
        </div>
        <div className='space-x-4 '>
      <Link to="/" className='hover:cursor-pointer hover:text-white '>Main Page</Link> 
       <Link to="/create-post"> <a className='hover:cursor-pointer hover:text-white '>Create Post</a></Link>
        </div>
        
    </div>
      );
}

