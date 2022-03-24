import React, { useEffect, useState } from 'react';
import { db } from './FireBase/firebase';
import Post from './components/Principal/Post/Post';
import LOGO from "./assets/insta_logo.png";
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  console.log(posts)
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={LOGO}
          alt=""
        />
      </div>
      {
        posts.length > 0 ? (
          posts.map((id, post) => {
            return <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          })
        ) : (
          <div>No posts</div>
        )
        
      }
    </div>
  )
}

export default App
