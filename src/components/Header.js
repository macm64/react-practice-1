//Dependencies
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//Assets
import './css/Header.css';
import logo from './images/digital_bulb.jpg'
class Header extends Component {


  render() {
    const {title, items}= this.props;
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo"/>
            <h2 className="title-text">
              {this.props.title}
            </h2>
            <ul className="Menu">

              {items && items.map( (item,key)=> <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
