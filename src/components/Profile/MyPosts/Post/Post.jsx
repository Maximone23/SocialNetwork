import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
    
      <div className={s.item}>
        <img src="https://banner2.cleanpng.com/20180430/vcq/kisspng-computer-icons-avatar-encapsulated-postscript-tomato-face-5ae78e3c71e6a4.0699443615251246684666.jpg" alt=""/>
        {props.message}
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
        
     
    </div>
       
    
  )
}

export default Post; 