import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async searchTerm => {
        console.log('searching...')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    // Call searchAPI function when
    // first rendered components
    useEffect(() => {
        searchAPI('pasta')
    }, [])

    return [searchAPI, results, errorMessage]
}