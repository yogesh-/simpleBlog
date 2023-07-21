import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
    <div className='bg-accent p-5 flex justify-between'>
       <div>
       <a href="!#">blogSimple</a>
        </div>
        <div className='space-x-4 '>
      <Link to="/"><a href="!#" className='hover:cursor-pointer hover:text-white '>Main Page</a></Link> 
       <Link to="/create-post"> <a href="!#" className='hover:cursor-pointer hover:text-white '>Create Post</a></Link>
        </div>
        
    </div>
      );
}

