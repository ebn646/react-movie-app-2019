import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const getMovieDetailReducer = ( selectedMovie = null, action ) => {
    if(action.type === 'SELECTED_MOVIE'){
        return action.payload
    }

    return selectedMovie
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: getMovieDetailReducer
})