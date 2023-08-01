// likeButton.js
import React from 'react';
import useLikeStore from '../state/likeStore';
import { FaRegThumbsUp } from 'react-icons/fa';

const LikeButton = ({ like,id }) => {
  // const likeCount = useLikeStore((state) => state.likeCount);
//   const incrementLike = useLikeStore((state) => state.incrementLike);
  // const initializeLikeCount = useLikeStore((state) => state.initializeLikeCount);
  const updateLikeCount = useLikeStore((state) => state.updateLikeCount);

  // useEffect(() => {
  //   // Fetch the initial like count when the component mounts
  //   // initializeLikeCount(id);
  //   // console.log('useEffect runs')
  // },[]);

  const handleLikeClick = (like,id) => {
    updateLikeCount(like,id);
    console.log(like,id);
  };

  return (
    <div className='flex items-center justify-center cursor-pointer'>
       <span onClick={()=>handleLikeClick(like,id)}><FaRegThumbsUp/></span> 
          <p>&nbsp;{like}</p>
    </div>
  );
};

export default LikeButton;





