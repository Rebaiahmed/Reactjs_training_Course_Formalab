import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

import {StatelessOne, StatelesTwo}  from './StatelessComponent';


class App extends Component {

  constructor()
  {

  }

  componentDidMount()
  {

  }

  render() {
    return (
      <div>
     <HelloWorld />
     <HelloWorld />
     <h1>aaa</h1>
     <StatelessOne />
     </div>

    );
  }
}

export default App;
