import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyMenu.scss'
// import { Link } from 'react-router-dom'

const navigaion = [
    {
      name: '/',
      label: '首页'
    }, {
      name: 'about',
      label: '简介'
    }, {
      name: 'skills',
      label: '技能'
    }, {
      name: 'project',
      label: '项目'
    }, {
      name: 'hobby',
      label: '爱好'
    }, {
      name: 'blog',
      label: '博客'
    }
];

class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.flip = this.flip.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  flip = (status) => {
    // if (this.state.active === status) return !1
    // this.setState({
    //   active: status,
    //   flipState: !this.state.flipState
    // });
    setTimeout(() => {
      this.context.router.history.push(status)
    }, 50)
  };

  render () {
    return (
      <ul className="navigation">
        {
          navigaion.map((item, index) => (
            <li key={index}>
              <a onClick={() => this.flip(item.name)}>{item.label}</a>
              {/* <Link to={item.name}>{item.label}</Link> */}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default MyMenu