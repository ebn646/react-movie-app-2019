
export default (state = {},action) => {
    switch(action.type){
        case "GET_MOVIE_DETAILS":
        console.log('payload = ',action.payload)
            return action.payload
        default:
            return state
    }
}