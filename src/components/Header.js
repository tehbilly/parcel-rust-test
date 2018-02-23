import React from 'react';
import logo from '../img/safeandunsafe.svg';

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt=""/>
                </a>
            </div>
        </nav>
    </header>
)

export default Header
