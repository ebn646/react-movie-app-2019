import jsonPlaceholder from '../apis/jsonPlaceholder';
import axios from 'axios';

// Action creator
export const fetchMovies = (id) => {
    // Return an action
    return async function(dispatch, getState){
        const response = await axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US&page=1');
        dispatch({ type: 'FETCH_MOVIES', payload: response.data.results })
    }
}

export const openMovieModal = (movieId) => {
    return {
        type: 'OPEN_MODAL',
        payload: movieId
    }
}

export const closeMovieModal = () => {
    console.log('close modal action was called!!!!')
    return {
      type: 'CLOSE_MODAL'
    };
  }

export const getMovieDetails = (movieId) => {
    return async function(dispatch, getState){
        const response = await axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US');
        dispatch({ type: 'GET_MOVIE_DETAILS', payload: response.data })
    }
}
