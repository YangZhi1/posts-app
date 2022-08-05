import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import CreatePost from './CreatePost';
import './posts.css';

const Posts = () => {
  const [listOfPosts, setListOfPosts] = useState('');

  const getPosts = (async () => {
    const postUrl = 'http://localhost:3001/posts';
    fetch(postUrl)
    .then(response => response.json())
    .then(data => {
      setListOfPosts(data)
    })
  })

  useEffect(() => {
    getPosts();
  }, [])

  const addPost = (postContent) => {
    const currentId = listOfPosts.length;
    const newPost = {
      author: localStorage.getItem('email'),
      date: Date.now(),
      content: postContent,
      likes: 0
    }
    const postUrl = 'http://localhost:3001/new_post';

    fetch(postUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newPost) })
    .then(response => response.json())
    .then(data => console.log('data:', data))

    const newList = [...listOfPosts, newPost];
    setListOfPosts(newList);
  }

  const onLikePost = (postid, likes) => {
    const data = {
      postid: postid,
      likes: likes+1
    }
    const postLikeUrl = 'http://localhost:3001/update_likes';
    fetch(postLikeUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  }

  return (
    <>
      <Navbar />
      
      <div className="all-posts-container">
        <CreatePost addPost={addPost} />
        {listOfPosts && listOfPosts.map((post, index) => {
          return (
            <div className="post-container" key={index}>
              <div className="post-header">
                <p className="author">{post.author}</p>
                <p className="date">{post.date_created}</p>
              </div>
              <p>{post.content}</p>
              <p className="likes" onClick={() => onLikePost(post.postid, post.likes)}>{post.likes} Likes</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Posts;
