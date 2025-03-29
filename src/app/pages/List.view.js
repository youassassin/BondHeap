import React from 'react';
import Person from '../../models/Person.model';

const ListView = ({ people }) => {
    return (
        <ul>
            {people.map((person, index) => {
                const castedPerson = new Person(person);
                return <li key={index}>{castedPerson.getFullName()} - {castedPerson.notes}</li>;
            })}
        </ul>
    );
};

export default ListView;