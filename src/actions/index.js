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

export const getVideos = (movieId) =>{
    return async function(dispatch){
        const response = await axios.get('https://api.themoviedb.org/3/movie/'+movieId+'/videos?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US')
        console.log('response = ',response)
        dispatch({ type: 'GET_VIDEOS', payload: response.data.results})
    }
}

export const search = (query) => {
    return async function(dispatch){
        const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US&query='+query+'&page=1&include_adult=false')
        console.log('search response  = ',response)
        dispatch({ type: 'GET_SEARCH_RESULTS', payload: response.data.results})
    }
}

// https://api.themoviedb.org/3/movie/550/credits?api_key=1cec0394fa447a1f03d7a744faf9cbc9
export const getCast = (id) =>{
    console.log('ID = ',id)
    return async function(dispatch){
        const response = await axios.get('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=1cec0394fa447a1f03d7a744faf9cbc9')
        console.log('getCast response  = ',response)
        dispatch({ type: 'GET_CAST', payload: response.data})
    }
}