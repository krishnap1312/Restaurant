import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleExploreMenu = () => {
        navigate('/menu');
    };

    return (
        <div className="landing-page">
            <header className="hero">
                <h1>Welcome to Our Restaurant</h1>
                <p>Delicious food, delivered to your doorstep.</p>
                <button onClick={handleExploreMenu}>Explore Menu</button>
            </header>
            <section className="about">
                <h2>About Us</h2>
                <p>We are passionate about providing the best dining experience. Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.</p>
                <img src="https://source.unsplash.com/800x400/?restaurant" alt="About Us" />
                <p>Our restaurant offers a cozy and inviting atmosphere where you can enjoy a great meal with friends and family. Whether you are looking for a place to celebrate a special occasion or just want to enjoy a night out, we have something for everyone.</p>
            </section>
            <section className="services">
                <h2>Our Services</h2>
                <div className="services-list">
                    <div className="service">
                        <h3>Dine-In</h3>
                        <img src="https://source.unsplash.com/400x300/?dine-in" alt="Dine-In" />
                        <p>Enjoy your meal in a cozy atmosphere. Our dining area is designed to provide you with comfort and style.</p>
                    </div>
                    <div className="service">
                        <h3>Takeaway</h3>
                        <img src="https://source.unsplash.com/400x300/?takeaway" alt="Takeaway" />
                        <p>Order ahead and pick up your meal. Our takeaway service ensures that you can enjoy our delicious food wherever you are.</p>
                    </div>
                    <div className="service">
                        <h3>Delivery</h3>
                        <img src="https://source.unsplash.com/400x300/?delivery" alt="Delivery" />
                        <p>Get your favorite dishes delivered to your home. Our delivery service is fast and reliable, bringing our food to your doorstep.</p>
                    </div>
                </div>
            </section>
            <section className="gallery">
                <h2>Gallery</h2>
                <div className="gallery-images">
                    <img src="https://source.unsplash.com/300x200/?food" alt="Food" />
                    <img src="https://source.unsplash.com/300x200/?restaurant-interior" alt="Restaurant Interior" />
                    <img src="https://source.unsplash.com/300x200/?chef" alt="Chef" />
                    <img src="https://source.unsplash.com/300x200/?dessert" alt="Dessert" />
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Get in touch with us for reservations and inquiries. We are here to make your dining experience unforgettable.</p>
                <button>Contact Now</button>
            </section>
        </div>
    );
};

export default LandingPage;
