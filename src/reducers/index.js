import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import movieModalReducer from './movieModalReducer';

export default combineReducers({
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    modal: movieModalReducer
})