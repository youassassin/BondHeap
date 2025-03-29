import ApiService from '../services/Api.service';
import { useEffect, useState } from 'react';

const getPeople = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            setPeople(await new ApiService().getPeople());
        };
        fetchPeople();
    }, []);

    return people;
};

export default getPeople;