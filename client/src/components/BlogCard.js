import React from "react";
import {useNavigate} from 'react-router-dom';

export default function BlogCard (props){
    let navigate = useNavigate()
return <>
<div key={props.id} className=" md:w-6/12 w-8/12 flex flex-col items-center border border- mb-5 mt-5 rounded">
          <h1 className="font-bold underline underline-offset-4 mb-2 mt-2 hover:cursor-pointer hover:text-accent" onClick={()=>{navigate(`/post/${props.id}`)}}>{props.title}</h1>

          <p className="text-center p-4">{props.post_text.length > 200 ? props.post_text.substring(0,200)+'  ...':props.post_text}</p>
          <div className="flex space-x-2 mb-2">
          <h4 className="italic">Posted by {props.user_name} on {props.date_posted}</h4>
          </div>
        </div>
</>
}