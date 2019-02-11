import { combineReducers } from 'redux';


const moviesReducer = () =>{
    return [
        {
            title: 'Movie 1',
            description: 'I am movie one'
        },
        {
            title: 'Movie 2',
            description: 'I am movie two'
        },
        {
            title: 'Movie 3',
            description: 'I am movie three'
        },
        {
            title: 'Movie 4',
            description: 'I am movie four'
        },
        {
            title: 'Movie 5',
            description: 'I am movie five'
        },
        {
            title: 'Movie 6',
            description: 'I am movie six'
        },
        {
            title: 'Movie 7',
            description: 'I am movie seven'
        },
        {
            title: 'Movie 8',
            description: 'I am movie eight'
        }
    ]
}

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