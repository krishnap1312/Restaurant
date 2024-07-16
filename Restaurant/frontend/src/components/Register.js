import { useState } from 'react';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner'; // Import ColorRing
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username,
                password,
                email,
                mobile,
                address,
                location
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Registration failed. Please try again.');
        }
    };

    const handleGeolocation = () => {
        if (navigator.geolocation) {
            setLoading(true); // Set loading to true
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    try {
                        const response = await axios.get(`http://localhost:5000/api/location/geocode?lat=${lat}&lon=${lon}`);
                        const address = response.data.display_name;
                        setLocation(address);
                    } catch (error) {
                        setMessage('Error fetching location');
                    } finally {
                        setLoading(false); // Set loading to false
                    }
                },
                () => {
                    setMessage('Geolocation is not supported or permission denied');
                    setLoading(false); // Set loading to false
                }
            );
        } else {
            setMessage('Geolocation is not supported by this browser');
        }
    };

    return (
        <div className="register-container">
        <div className="header-buttons">
                <Link to="/">
                    <img src="/images/Logo.jpg" alt="Logo" />
                </Link>
                <Link to="/">
                    <button className="login-button">Home</button>
                </Link>
                <Link to="/login">
                    <button className="login-button">Login</button>
                </Link>
                <Link to="/register">
                    <button className="register-button">Register</button>
                </Link>
            </div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <button type="button" onClick={handleGeolocation}>Use Current Location</button>
                    {loading && (
                        <ColorRing
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{ marginTop: '10px' }}
                            colors={['#007bff', '#00bfff', '#1e90ff', '#87cefa', '#add8e6']}
                        />
                    )} {/* Loader */}
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
