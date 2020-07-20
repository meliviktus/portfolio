import React from 'react';

import { NavBar } from '../nav-bar/nav-bar.component';
import { NavLogo } from '../nav-logo/nav-logo.component';

import './nav.style.css';

export const Nav = () => (
    <div className="nav">
        <NavLogo />
        <NavBar />
    </div>
);