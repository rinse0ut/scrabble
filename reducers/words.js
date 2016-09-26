export const words = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_WORDS':
            return action.words
        default:
            return state
    }
}

export default words
