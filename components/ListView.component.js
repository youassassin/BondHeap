import React from 'react';
import Person from '../models/Person.model';

const ListView = ({ people }) => {
    return (
        <ul>
            {people.map((person, index) => (
                <li>{person}</li>
            ))}
        </ul>
    );
};

export default ListView;