import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/workouts">Workouts</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;