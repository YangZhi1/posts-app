import React from 'react';
import Navbar from '../Navbar';
import './posts.css';

const Posts = () => {
  const allPosts = [
    {
      author: "User1",
      post_id: 0,
      date_created: Date.now(),
      date: "05 May 2021",
      content: "Hello world"
    },
    {
      author: "User2",
      post_id: 1,
      date_created: Date.now(),
      date: "07 May 2021",
      content: "Hello world 2"
    },
  ];

  return (
    <>
      <Navbar />
      
      <div className="all-posts-container">
        {allPosts && allPosts.map((post, index) => {
          return (
            <div className="post-container" key={index}>
              <div className="post-header">
                <p className="author">{post.author}</p>
                <p className="date">{post.date}</p>
              </div>
              <p>{post.content}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Posts;
