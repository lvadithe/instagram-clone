import React from 'react';
import Post from './components/Principal/Post/Post';
import LOGO from "./assets/insta_logo.png";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={LOGO}
          alt=""
        />
      </div>
      <Post />
      
    </div>
  )
}

export default App