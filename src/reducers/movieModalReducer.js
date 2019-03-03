
const initialState = {
    isOpen: false,
    movieId: 0
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_MODAL':
            console.log('Open Modal reducer was called!! ',action.payload)
            var newState = {...state, isOpen: true, movieId: action.payload}
            console.log('newState = ',newState)
            return newState
        case 'CLOSE_MODAL':
        console.log('Close Modal reducer was called!! ',action.payload)

            return {...state, isOpen: false}
        default:
            return state
    }
}