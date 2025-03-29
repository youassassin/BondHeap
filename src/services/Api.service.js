import axios from 'axios';
import marksFile from '../resources/MarksFile.json'
import Person from '../models/Person.model.js';

class ApiService {
    constructor() {
        this.apiBaseUrl = '/c:/Users/geoff/workspace/bond-heap/MarksFile.json';
    }
    async get(endpoint, params = {}) {
        try {
            const response = await axios.get(`${this.apiBaseUrl}${endpoint}`, { params });
            return response.data;
        } catch (error) {
            console.error('GET request failed:', error.message);
            throw error;
        }
    }

    async post(endpoint, data = {}) {
        try {
            const response = await axios.post(`${this.apiBaseUrl}${endpoint}`, data);
            return response.data;
        } catch (error) {
            console.error('POST request failed:', error.message);
            throw error;
        }
    }

    async put(endpoint, data = {}) {
        try {
            const response = await axios.put(`${this.apiBaseUrl}${endpoint}`, data);
            return response.data;
        } catch (error) {
            console.error('PUT request failed:', error.message);
            throw error;
        }
    }

    async delete(endpoint) {
        try {
            const response = await axios.delete(`${this.apiBaseUrl}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('DELETE request failed:', error.message);
            throw error;
        }
    }

    async readJsonFile() {
        return new Promise((resolve) => {
            resolve(marksFile);
        })
    }

    async getPeople() {
        return this.readJsonFile().then((data) => {
            const result = [];
            for (const person of data.relations) {
                result.push(new Person(
                    {
                        fullName: {
                            first: person.fullName.first,
                            last: person.fullName.last
                        },
                        notes: person.notes
                    }));
            }
            return result;
        });
    }
}

export default ApiService;

// Example usage:
// const apiService = new ApiService('https://your-api-gateway-url.amazonaws.com');
// apiService.get('/example-endpoint').then(console.log).catch(console.error);