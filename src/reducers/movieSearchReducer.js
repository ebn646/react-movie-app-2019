
export default (state = {},action) => {
    switch(action.type){
        case "GET_SEARCH_RESULTS":
        console.log('search payload = ',action.payload)
            return action.payload
        default:
            return state
    }
}