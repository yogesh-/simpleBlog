import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

// import LikeButton from "./LikeButton";


export default function BlogCard (props){
  // console.log(props.likes)
    const [like,setLike] = useState(props.likes)
    let navigate = useNavigate()
    const updateLike = async(props) => {
      let like_value = like+1
      console.log(like_value,'like value')
      let user_id = props.id
      const response = await fetch(`http://localhost:3001/api/update-like/${like_value}/${user_id}`)
      if(response.status === 200){
        console.log(like,'prior')
        setLike(like_value)
        console.log(like,'after')
      }
    
     
}
    
return <>
<div key={props.id} className=" md:w-6/12 w-8/12 flex flex-col items-center border border- mb-5 mt-5 rounded">
          <h1 className="font-bold underline underline-offset-4 mb-2 mt-2 hover:cursor-pointer hover:text-accent" onClick={()=>{navigate(`/post/${props.id}`)}}>{props.title}</h1>

          <p className="text-center p-4">{props.post_text.length > 200 ? props.post_text.substring(0,200)+'  ...':props.post_text}</p>
          <div className="flex items-center justify-center cursor-pointer">
         <span onClick={()=>updateLike(props)}><FaRegThumbsUp/></span> 
          <p>&nbsp;{like}</p>
          </div>
          {/* <LikeButton like={props.likes} id={props.id}/> */}
          
          <div className="flex space-x-2 mb-2">
          <h4 className="italic">Posted by {props.user_name} on {props.date_posted}</h4>
          </div>
        </div>
</>
}