import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div>
        My Posts
      </div>
      <textarea></textarea>
      <button>
        Add Post
      </button>
      <Post message='Hi, how are you?' likesCount='15'/>
      <Post message="It`s my first post" likesCount='25'/>
      
    </div>


  )
}

export default MyPosts; 