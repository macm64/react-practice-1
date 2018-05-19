//Dependencies
import React, {Component} from 'react';

//Components
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

//Data
import items from './data/menu';

class App extends Component {
  render() {
    return (<div>
      <Header title="DigitalBulb" items={items}/>
      <Content/>
      <Footer copyright="&copy Copyright 2018, DigitalBulb .Inc"/>
    </div>)
  }
}

export default App;
