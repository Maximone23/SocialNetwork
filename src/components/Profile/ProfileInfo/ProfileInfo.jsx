import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://wallpaperaccess.com/full/124578.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        Ava+description
      </div>
      
    </div>
  )
}

export default ProfileInfo; 