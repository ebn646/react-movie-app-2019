import jsonPlaceholder from '../apis/jsonPlaceholder';
// Action creator
export const fetchMovies = () => {
    // Return an action
    return async function(dispatch, getState){
        const response = await jsonPlaceholder.get('/movie/top_rated');
        dispatch({ type: 'FETCH_MOVIES', payload: response.data.results })
    }
}
// export const fetchMovies = async() => {
//     const response = await jsonPlaceholder.get('/posts');
//     // Return an action
//     return {
//         type: 'FETCH_MOVIES',
//         payload: response
//     }
// }

