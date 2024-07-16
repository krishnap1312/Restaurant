// src/components/SpecialsTable.js
import React from 'react';
import axios from 'axios';
import './SpecialsTable.css';


const SpecialsTable = ({ specials, onSpecialDeleted, onSpecialEdited }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/specials/${id}`);
            onSpecialDeleted(id);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {specials.map((special) => (
                    <tr key={special._id}>
                        <td>{special.name}</td>
                        <td>{special.description}</td>
                        <td>
                            <img src={special.imageUrl} alt={special.name} />
                        </td>
                        <td>
                            <button onClick={() => onSpecialEdited(special)}>Edit</button>
                            <button onClick={() => handleDelete(special._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SpecialsTable;
