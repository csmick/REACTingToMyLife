import React, { Component } from 'react';
import HEADER_CONTENT from './header_config.js'
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header content={HEADER_CONTENT} />
                <div className="background-gradient">
                    <Home />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
