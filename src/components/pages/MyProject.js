import React from 'react';
import './css/MyProject.scss';
import '../../assets/css/font.css'

const list = [
  {
    link: 'http://wpa.qq.com/msgrd?v=3&uin=11875849&site=qq',
    name: 'QQ',
    icon: 'qq'
  },
  {
    link: 'http://weibo.com/hellodigua',
    name: 'Weibo',
    icon: 'weibo'
  },
  {
    link: 'https://www.zhihu.com/people/hellodigua',
    name: '知乎',
    icon: 'zhihu'
  },
  {
    link: 'mailto:hellodigua@qq.com',
    name: 'Mail',
    icon: 'email'
  },
  {
    link: 'https://www.github.com/hellodigua',
    name: 'Github',
    icon: 'github'
  },
  {
    link: 'http://music.163.com/#/user/home?id=33478590',
    name: '网易云音乐',
    icon: 'netease'
  },
  {
    link: 'https://digua.moe',
    name: '博客',
    icon: 'blog'
  },
  {
    link: 'https://space.bilibili.com/1649520',
    name: 'Bilibili',
    icon: 'bilibili'
  },
  {
    link: 'https://steamcommunity.com/id/hellodigua',
    name: 'Steam',
    icon: 'steam'
  }
]

const Links = () => {
  return (
    <div className="container links">
      {
        list.map((item, index) => (
          <div className="item" key={index}>
            <a href={item.link} target="_blank">
              <div className="cover">
                <div className="frontend">
                  <i className={"iconfont icon-"+item.icon}></i>
                    <div className="content">
                      <span>{item.name}</span>
                    </div>
                </div>
                <div className="backend"></div>
              </div>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Links;