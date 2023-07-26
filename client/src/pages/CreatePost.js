import React, { useState } from 'react';
import Axios from 'axios'

export default function CreatePost(){
    const [userName,setUserName] = useState('')
    const [title,setTitle] = useState('')
    const [blog,setBlog] = useState('')

    const submitPost = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/api/create',{user:userName,blogTitle:title,blogPost:blog}).then(setBlog(''),setTitle(''),setUserName(''));
        
    }

    return (
        <div className='  w-screen h-screen flex justify-center items-center'>
            <div className='w-7/12 border py-4 border-black rounded flex flex-col items-center justify-center space-y-5'>
            <p>Write your blog post</p>
           <input className='border border-black' type='text' placeholder='Enter your username' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/> 
           <input className='border border-black' type='text' placeholder='Title' style={{ width: "390px" }} value={title} onChange={(e)=>{setTitle(e.target.value)}}/> 

           <textarea className='border-4 border-sky-500' type='textarea' rows='8' cols='50' placeholder='Start writing here...' value={blog} onChange={(e)=>{setBlog(e.target.value)}}/>
           <button className='border border-green-300 bg-white p-1 rounded hover:bg-blue-300' onClick={(e) =>submitPost(e)}>Submit</button>
           </div>
           </div>
    )
}