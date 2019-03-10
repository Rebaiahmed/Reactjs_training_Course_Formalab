import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

import {StatelessOne, StatelesTwo}  from './StatelessComponent';


class App extends Component {

  

  render() {
    return (
      <div>
     <HelloWorld />
     <HelloWorld />
     <h1>aaa</h1>
     <StatelessOne />
     <StatelesTwo />
     </div>

    );
  }
}

export default App;
