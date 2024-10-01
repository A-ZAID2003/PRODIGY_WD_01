import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul>
                <li><a onClick={() => setActivePage('home')}>Home</a></li>
                <li><a onClick={() => setActivePage('about')}>About</a></li>
                <li><a onClick={() => setActivePage('services')}>Services</a></li>
                <li><a onClick={() => setActivePage('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
