import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Profile from './components/Profile';
import AddMenuItem from './components/AddMenuItem';
import EditMenuItem from './components/EditMenuItem';
import MenuList from './components/MenuList';
import OffersManagement from './components/OffersManagement';
import Dashboard from './components/DashBoard';
import SpecialsPage from './components/SpecialsPage';
import FeedbackForm from './components/FeedbackForm';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        // additional logout logic
    };

    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/feedback" element={<FeedbackForm/>} />


                <Route path="/AddMenuItem" element={<AddMenuItem/>} />
                <Route path="/EditMenuItem" element={<EditMenuItem/>} />
                <Route path="/MenuList" element={<MenuList/>} />
                <Route path="/offers-management" element={<OffersManagement />} />
                <Route path="/specials" element={<SpecialsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
