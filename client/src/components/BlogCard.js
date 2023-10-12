import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

import useUpdateLike from "../utils/useUpdateLike";

export default function BlogCard(props) {
  let navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [like, updateLike] = useUpdateLike(props.likes, props.id);
  const [likeCount, setLikeCount] = useState(props.likes);
  const likeHandler = () => {
    if (isLiked) {
      console.log("like count", likeCount);
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
    console.log("clicked");
  };

  return (
    <>
      <div
        key={props.id}
        className=" md:w-6/12 w-8/12 flex flex-col items-center border border- mb-5 mt-5 rounded dark:border-background"
      >
        <h1
          className="font-bold underline underline-offset-4 mb-2 mt-2 hover:cursor-pointer hover:text-accent dark:hover:text-accent  dark:text-background"
          onClick={() => {
            navigate(`/post/${props.id}`);
          }}
        >
          {props.title}
        </h1>

        <p className="text-center p-4  dark:text-background">
          {props.post_text.length > 200
            ? props.post_text.substring(0, 200) + "  ..."
            : props.post_text}
        </p>
        <div className="flex items-center justify-center cursor-pointer dark:text-background">
          <span onClick={likeHandler}>
            {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          </span>
          {/* <p>&nbsp;{props.likes}</p> */}
          <p>&nbsp;{likeCount}</p>
        </div>
        <div className="flex space-x-2 mb-2 dark:text-background">
          <h4 className="italic">
            Posted by {props.user_name} on {props.date_posted}
          </h4>
        </div>
      </div>
    </>
  );
}
