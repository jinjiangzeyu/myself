import React from 'react';
import './css/MyHome.scss';
import Wx from '../../assets/images/wechat.png'
import Steam from '../../assets/images/steam.png'
import mail from '../../assets/images/mail.png'
import Git from '../../assets/images/github.png'

const Home = () => {
  return (
      <div className="home">
        <h1 className='content_name'>welcome</h1>
        <h1 className='content_motto'>I'm JinJiangzeyu</h1>
        <h1 className='content_text'>我是金江泽禹,一个求知探索的前端工程师</h1>
        <div className='icon_box'>
          <img src={Git} alt=""/>
          <img src={mail} alt=""/>
          <img src={Wx} alt=""/>
          <img src={Steam} alt=""/>
        </div>
      </div>
  );
}

export default Home;