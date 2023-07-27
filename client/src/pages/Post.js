import axios from "axios";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
const moment = require('moment');


const Post = () => {
    let {id} = useParams()
    const [data,setData] = useState()

    
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/post/${id}`).then((data)=>
        setData(data.data[0])
        )
    },[id])
    

    return (
        <>
        <div className="flex justify-center">
        {data?
        
        <div className="w-9/12 flex flex-col items-center mb-5 mt-5">
          <h1 className="font-bold underline underline-offset-4 mb-2 mt-2">{data.title}</h1>

          <p className="text-center p-4">{data.post_text}</p>
          <div className="flex space-x-2 mb-2">
           
          <h4 className="italic">Posted by {data.user_name} on {moment(data.date_posted).format('D MMMM YYYY')}</h4>
          </div>
        </div>: '...Loading'}
        </div>
        </>
    );
}

export default Post;