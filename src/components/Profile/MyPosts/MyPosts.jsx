import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It`s my first post', likesCount: 25},
    {id: 3, message: 'Hi, how are you?', likesCount: 15}
  ];

  let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/> );

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My Posts</h3>
      </div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>
          Add Post
        </button>
      </div>
      <div className={s.posts}>
        {postsElement}
        
      </div>
    </div>


  )
}

export default MyPosts; 