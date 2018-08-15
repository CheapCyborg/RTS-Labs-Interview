import React, { Component } from 'react';
import Search from './components/search'
import store from './store'
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <h2>Stories</h2>
          <Search />
        </div>
      </Provider>
    );
  }
}

export default App;
