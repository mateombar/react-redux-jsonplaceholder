import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
const Navbar = (props) => (
    <nav className="Navbar">
        <div className="Navbar_link">
            <Link className="Navbar_link--item" to="/users">Users</Link>
            <Link className="Navbar_link--item" to="/tasks">Tasks</Link>
        </div>
    </nav>
)


export default Navbar;
