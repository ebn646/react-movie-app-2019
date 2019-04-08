
export default (state = {},action) => {
    switch(action.type){
        case "GET_CAST":
            return action.payload
        default:
            return state
    }
}