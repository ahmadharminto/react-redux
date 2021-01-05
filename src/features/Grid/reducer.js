import { ADD_SQUARE, REMOVE_SQUARE } from './constants'

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SQUARE:
            const nextId = state.length + 1;
            const newSquare = {
                id: nextId,
                color: action.color
            }
            return [...state, newSquare]
        case REMOVE_SQUARE:
            return state.filter(square => square.id != action.id)
    
        default:
            return state;
    }
}

export default reducer