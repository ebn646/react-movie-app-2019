import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import movieModalReducer from './movieModalReducer';
import movieVideoReducer from './movieVideosReducer';
import movieSearchReducer from './movieSearchReducer';
import movieCastReducer from './movieCastReducer';
export default combineReducers({
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    credits: movieCastReducer,
    modal: movieModalReducer,
    videos: movieVideoReducer,
    searchResults: movieSearchReducer
})