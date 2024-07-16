import React from 'react';
import OffersCarousel from './OfferCarousel';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="logo">Restaurant Dashboard</div>
                <nav className="dashboard-nav">
                    <a href="/menu">Browse Menu</a>
                    <a href="/profile">Profile</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/">Logout</a>
                </nav>
            </header>
            <main className="dashboard-main">
                <section className="dashboard-section">
                    <h2>Special Offers</h2>
                    <OffersCarousel />
                </section>
                
            </main>
        </div>
    );
};

export default Dashboard;
