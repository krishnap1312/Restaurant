import React from 'react';
import { useAuth } from '../context/AuthContext';

const PostLoginNavbar = () => {
    const { logout } = useAuth();

    return (
        <nav>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/offers-management">Offers</a></li>
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default PostLoginNavbar;
