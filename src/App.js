import React, { Component } from 'react';
import Navbarr from './js/Navbarr';
import Yangiliklar from './js/Yangiliklar';
export default class App extends Component {
  render() {
    return <div>    
     <Navbarr/>
     <Yangiliklar />
    </div>;
  }
}
