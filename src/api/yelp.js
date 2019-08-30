import axios from 'axios';
import Config from './Config';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${Config.YELP_API_KEY}`
    }
})