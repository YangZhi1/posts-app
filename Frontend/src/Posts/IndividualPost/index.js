import React from 'react';
import '../posts.css';

const IndividualPost = (props) => {
  const { post } = props;

  return (
    <div className="post-container">
      <div className="post-header">
        <p className="author">{post.author}</p>
        <p className="date">{post.date_created}</p>
      </div>
      <p>{post.content}</p>
      <p className="likes" onClick={() => onLikePost(post.postid, post.likes)}>{post.likes} Likes</p>
    </div>
  )
}

export default IndividualPost;
