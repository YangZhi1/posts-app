import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import CreatePost from './CreatePost';
import IndividualPost from './IndividualPost';
import './posts.css';
import SearchPost from './SearchPost';

const Posts = () => {
  const [listOfPosts, setListOfPosts] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchValue, setSearchValue] = useState('');

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
    const postUrl = 'http://localhost:3001/posts/new_post';

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

  const onClickSearch = () => {
    console.log('searchvalue:', searchValue);
    console.log('searchType:', searchType);
    if(searchType === 'Author') {
      const newList = listOfPosts.filter((post) => {
        return (post.author === searchValue);
      })
      setListOfPosts(newList);
    } else if (searchType === 'Content') {
        const newList = listOfPosts.filter((post) => {
          return (post.content.includes(searchValue));
        })
        setListOfPosts(newList);
    }
  }

  return (
    <>
      <Navbar />
      
      <div className="all-posts-container">
        <SearchPost
          setSearchType={setSearchType}
          onClickSearch={onClickSearch}
          setSearchValueParent={setSearchValue}
        />
        <CreatePost addPost={addPost} />
        {listOfPosts && listOfPosts.map((post, index) => {
          return (
            <IndividualPost post={post} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default Posts;
