import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import movieModalReducer from './movieModalReducer';
import movieVideoReducer from './movieVideosReducer';
import movieSearchReducer from './movieSearchReducer';
export default combineReducers({
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    modal: movieModalReducer,
    videos: movieVideoReducer,
    searchResults: movieSearchReducer
})