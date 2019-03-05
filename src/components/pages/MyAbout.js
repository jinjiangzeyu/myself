import React, { Component } from 'react';
import './css/MyAbout.scss';
class About extends Component {
  constructor(props,context) {
      super(props,context)
      this.state = {
        timer: null,
        content1: `我叫金江泽禹，一个90后平凡的前端工程师！`,
        content2: `2015年入行,一边工作一边积累经验,喜欢了解一些前端的新技术.`,
        content3: `大家都说19年是互联网的‘寒冬’,公司被迫解散了部门,我也顺利的成为了一名‘野生程序猿’.`,
        content4: `也是这样的机缘巧合让我有了给自己建站的想法,在这个‘超长的年假’,我正好学习了一下react框架,从而决定就使用它来搭建我的个人网站.`,
        content5: `刚刚工作的时候,前端还只是个就是写页面的‘美工’,随着框架的诞生,前后端分离的推广,使得前端越发的像一个程序员了.强大的同时也带来了前所未有的挑战.从刚刚接触vue到现在可以独立管理项目,发现了数据驱动视图的强大与便捷,让我更有兴趣学习这个技术.`,
        content6: `每当项目上线,看着自己辛苦几个月的项目有那么多人在使用,油然而生的自豪,让我越来越喜欢这个职业,也是我坚持的动力.`,
        content7: `我的目标是做全栈工程师,尽管路还很长,但我会努力的!`,
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
      }
  }
  componentDidMount () {
    let i = this.state.content5.length
    let j = 0
    let arr1 = this.state.content1.split('')
    let arr2 = this.state.content2.split('')
    let arr3 = this.state.content3.split('')
    let arr4 = this.state.content4.split('')
    let arr5 = this.state.content5.split('')
    let arr6 = this.state.content6.split('')
    let arr7 = this.state.content7.split('')
    this.setState({timer: setInterval(() => {
      i--
      if(arr1[j]) {
        this.setState((prevState) => ({
          text1: prevState.text1 += arr1[j]
        }))
      }
      if(arr2[j]) {
        this.setState((prevState) => ({
          text2: prevState.text2 += arr2[j]
        }))
      }
      if(arr3[j]) {
        this.setState((prevState) => ({
          text3: prevState.text3 += arr3[j]
        }))
      }
      if(arr4[j]) {
        this.setState((prevState) => ({
          text4: prevState.text4 += arr4[j]
        }))
      }
      if(arr5[j]) {
        this.setState((prevState) => ({
          text5: prevState.text5 += arr5[j]
        }))
      }
      if(arr6[j]) {
        this.setState((prevState) => ({
          text6: prevState.text6 += arr6[j]
        }))
      }
      if(arr7[j]) {
        this.setState((prevState) => ({
          text7: prevState.text7 += arr7[j]
        }))
      }
      j++
      if (i <= 0) {
        clearInterval(this.state.timer)
      }
    }, 50)})
  }
  render () {
    return (
          <div className="about">
            <div>{this.state.text1}</div>
            <div>{this.state.text2}</div>
            <div>{this.state.text3}</div>
            <div>{this.state.text4}</div>
            <div>{this.state.text5}</div>
            <div>{this.state.text6}</div>
            <div>{this.state.text7}</div>
          </div>
        );
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
}

export default About;

// content: `我叫金江泽禹，一个90后平凡的前端工程师！
// 2015年入行,一边工作一边积累经验,喜欢了解一些前端的新技术.
// 大家都说19年是互联网的‘寒冬’,公司被迫解散了部门,我也顺利的成为了一名‘野生程序猿’.
// 也是这样的机缘巧合让我有了给自己建站的想法,在这个‘超长的年假’,我正好学习了一下react框架,从而决定就使用它来搭建我的第一个个人网站.
// 刚刚工作的时候,前端还只是个就是写页面的‘美工’,随着框架的诞生,前后端分离的推广,使得前端越发的像一个程序员了.
// 强大的同时也带来了前所未有的挑战.从刚刚接触vue到现在可以独立管理项目,发现了数据驱动视图的强大与便捷,让我更有兴趣学习这个技术.
// 每当项目上线,看着自己辛苦几个月的项目有那么多人在使用,油然而生的自豪,让我越来越喜欢这个职业,也是我坚持的动力.
// 我的目标是做全栈工程师,尽管路还很长,但我会努力的!`,