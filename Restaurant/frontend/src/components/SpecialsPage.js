// src/pages/SpecialsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpecialsForm from '../components/SpecialsForm';
import SpecialsTable from '../components/SpecialsTable';
import './SpecialsPage.css';
    

const SpecialsPage = () => {
    const [specials, setSpecials] = useState([]);
    const [editingSpecial, setEditingSpecial] = useState(null);

    useEffect(() => {
        const fetchSpecials = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/specials');
                setSpecials(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSpecials();
    }, []);

    const handleSpecialAdded = (newSpecial) => {
        setSpecials([...specials, newSpecial]);
    };

    const handleSpecialDeleted = (id) => {
        setSpecials(specials.filter((special) => special._id !== id));
    };

    const handleSpecialEdited = (special) => {
        setEditingSpecial(special);
    };

    return (
        <div>
            <h1>Manage Specials</h1>
            <SpecialsForm onSpecialAdded={handleSpecialAdded} />
            <SpecialsTable
                specials={specials}
                onSpecialDeleted={handleSpecialDeleted}
                onSpecialEdited={handleSpecialEdited}
            />
        </div>
    );
};

export default SpecialsPage;
