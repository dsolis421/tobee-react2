import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import ShelterSearch from './ShelterSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <ShelterSearch />
      </div>
    );
  }
}

export default App;
