import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US&page=1'
});