import React, { Component } from 'react';
import SocketForm from './components/SocketForm/index';

class App extends Component {
    render() {
      return (
        <div className="container">
          <SocketForm />
        </div>
      );
    }
}

export default App;
