import React from 'react';
import LOGO from '../../../assets/reactjs.png';
import "./Post.css";

function Post() {
  return (
    <div className='post' >
      <h3>Username</h3>
      {/* header => avatar + username */}
      <img className='post__image' src={LOGO} alt="" />
      {/* image */}

      <h4 className='post__text'><strong>cleverqazi</strong> WOW day three</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post