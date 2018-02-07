import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


class Index extends Component {
    render() {
      return <App name=" joseph" /> 
    }
}

ReactDOM.render(<Index /> ,document.getElementById('root'));

