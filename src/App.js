import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/font-awesome/css/all.css';
import TourList from './components/TourList';


class App extends Component {
  render() {
    return (
      <main>
      <Navbar />
      <TourList />
      </main>  
    );
  }
}

export default App;