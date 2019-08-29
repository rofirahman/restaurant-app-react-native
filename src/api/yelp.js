import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2e4oYm9tdXwPDpUfTJrnx-pXKlabvhapWvglg3gX5wFN4HxoLofU03HdbNgIAE09NIOAPsFUw19B7twNr_owHycN7gTEWlfiAhgipeuTW_yWyirC7N6l0X3uIUhnXXYx'
    }
})