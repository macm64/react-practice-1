import React, {Component} from 'react';
import './css/Footer.css';

class Footer extends Component {
  render() {
      const {copyright = "&copy Copyright 2018, MACM64"}= this.props
    return (
      <div className="Footer">
        <small dangerouslySetInnerHTML={{ __html: copyright}}></small>
      </div>
    )
  }
}

export default Footer;
