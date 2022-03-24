import React, { useState } from 'react';
import Post from './components/Principal/Post/Post';
import LOGO from "./assets/insta_logo.png";
import './App.css';

function App() {
  const [post, setPost] = useState([])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={LOGO}
          alt=""
        />
      </div>
      <Post username="Legrone" caption="WOW day three" imageUrl="https://www.onlydogs.info/wp-content/uploads/2016/04/Doberman01ok-1000x1000.jpg" />
      <Post username="asdfhlkd" caption="WOW day asdasdas" imageUrl="https://a3.cdn.japantravel.com/photo/3016-18546/738x553.5!/tokyo-shibuya-crossing-18546.jpg" />
      <Post username="sdffv" caption="WOW dsadas three" imageUrl="https://wortev.capital/wp-content/uploads/2021/07/principales-paises-que-mas-invierten-en-criptomonedas.jpg.webp" />
      <Post username="sddffv" caption="WOW fdsfff three" imageUrl="https://concepto.de/wp-content/uploads/2019/04/Nebulosa-de-Orion-e1554813166944.jpg" />
      <Post username="sfrr" caption="WOW day fds" imageUrl="https://cdn.pixabay.com/photo/2020/04/04/15/07/sushi-5002639_1280.jpg" />

    </div>
  )
}

export default App