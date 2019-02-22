import React from 'react';
import './css/MyHome.scss';
import Wx from '../../assets/images/wechat.png'
import Steam from '../../assets/images/steam.png'
import mail from '../../assets/images/mail.png'
import Git from '../../assets/images/github.png'

const Home = () => {
  return (
    <div className="container home">
      <div className="content">
        <div>
          <h1 className='content_name'>I'm JinJiangzeyu</h1>
          <h1 className='content_motto'>Even the darkest night will end and the sun will rise</h1>
          <img src={Wx} alt=""/>
          <img src={Steam} alt=""/>
          <img src={mail} alt=""/>
          <img src={Git} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;