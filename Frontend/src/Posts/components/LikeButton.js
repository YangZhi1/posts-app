import React from 'react';
import '../posts.css';

const LikeButton = (props) => {
  const { numLikes, isLiked, postid, onLikePost } = props;

  const onLike = () => {
    
  }

  return (
    <>
      <p className="likes" onClick={onLike}>{numLikes} Likes</p>
    </>
  )
}

export default LikeButton;
