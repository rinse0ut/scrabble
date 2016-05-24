import R from 'ramda'

const initialState = {
    responses: ['AAH']
}

const wordTest = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RESPONSE':
            return Object.assign({}, state, {
                responses: R.append(action.response, state.responses)
            })
        default:
            return state
    }
}

export default wordTest
