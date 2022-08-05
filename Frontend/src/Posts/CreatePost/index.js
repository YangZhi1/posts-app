import React, { useState } from 'react';
import './styles.css';

const CreatePost = ({addPost}) => {
  const [post, setPost] = useState('');

  const onChangePost = (e) => {
    setPost(e.target.value);
  }

  const onClickPost = () => {
    addPost(post);
    setPost('');
  }

  return (
    <div className="create-post-container">
      <input
        className="post-input"
        value={post}
        onChange={onChangePost}
        placeholder="Type your post..."
      />

      <button className="post-button" onClick={onClickPost}>Post</button>
    </div>
  )
}

export default CreatePost;
