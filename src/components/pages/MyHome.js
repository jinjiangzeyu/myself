import React from 'react';
import './css/MyHome.scss';
import head from '../../assets/images/head.jpg'

const Home = () => {
  return (
    <div className="container home">
      <div className="avatar">
        <a href="https://h.bilibili.com/7409">
          <img src={head} alt="" />
        </a>
      </div>
      <div className="content">
        <h1>I'm Huskar</h1>
        <h1>I Believe: Even the darkest night will end and the sun will rise</h1>
      </div>
    </div>
  );
}

export default Home;