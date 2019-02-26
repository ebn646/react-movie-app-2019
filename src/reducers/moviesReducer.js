// Maintain a list of movies in an array

export default (state = [], action) => {
    switch(action.type){
        case "FETCH_MOVIES":
        console.log('Fetch reducer was called!!')
            return action.payload;
        default:
            return state;
    }
}