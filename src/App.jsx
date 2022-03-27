import React, { useState } from 'react';
import Posts from './components/Principal/Posts/Posts';
import LOGO from "./assets/insta_logo.png";
import { Input, Modal } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './App.css';
import Nav from './components/Secondary/Nav/Nav';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (event) => {

  }

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <img
            className="app__headerImage"
            src={LOGO}
            alt=""
          />
          <Input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type='text'
            placeholder='email'
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='text'
            placeholder='password'
            value={username}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </Modal>
      <Nav />
      <Button onClick={() => setOpen(true)}>Sign up</Button>
      <Posts />
    </div>
  )
}

export default App
