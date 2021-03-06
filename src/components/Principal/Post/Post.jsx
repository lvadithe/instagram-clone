import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import "./Post.css";

function Post({username, caption, imageUrl}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar
          className='post__avatar'
          alt='Legrone'
          src='../../../assets/Me-e.jpeg'
        />
        <h3>{username}</h3>
      </div>
      {/* header => avatar + username */}
      <img className='post__image' src={imageUrl} alt="" />
      {/* image */}

      <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post