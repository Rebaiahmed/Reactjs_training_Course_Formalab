import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// Simple (stateless) React component
const Headline = () => {
    return <h1>React stateless Component </h1>
}

import Intro from './StatelessComponent';


ReactDOM.render(<Intro />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
