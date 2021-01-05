import { ADD_SQUARE, REMOVE_SQUARE } from './constants'

export const addSquare = (color) => {
    return {
        type: ADD_SQUARE,
        color,
        created_at: Date.now()
    }
}

export const removeSquare = (id) => {
    return {
        type: REMOVE_SQUARE,
        id
    }
}

export const addSquareWithRule = (color) =>  {
    return (dispatch, getState) => {
        if (getState().grid.length < 12) {
            dispatch(addSquare(color))
        }
    }
}