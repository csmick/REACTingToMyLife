import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import HEADER_CONTENT from './header_config.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header content={HEADER_CONTENT} />
                <Home />
            </div>
        );
    }
}

export default App;
