import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'; 

const App = () => {
    const [activePage, setActivePage] = useState('home');

    const renderContent = () => {
        switch (activePage) {
            case 'home':
                return (
                    <div className={`page home`}>
                        <h1>Welcome to Home Page</h1>
                    </div>
                );
            case 'about':
                return (
                    <div className={`page about`}>
                        <h1>About Us</h1>
                    </div>
                );
            case 'services':
                return (
                    <div className={`page services`}>
                        <h1>Our Services</h1>
                    </div>
                );
            case 'contact':
                return (
                    <div className={`page contact`}>
                        <h1>Contact Us</h1>
                    </div>
                );
            default:
                return (
                    <div className={`page home`}>
                        <h1>Welcome to Home Page</h1>
                    </div>
                );
        }
    };

    return (
        <div>
            <Navbar setActivePage={setActivePage} />
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default App;
