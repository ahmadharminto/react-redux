import React from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { AddSquareButton } from '../AddSquareButton'
import { Square } from '../Square'
import { addSquareWithRule, removeSquare } from '../../features/Grid/actions'

const colors = ['red', 'blue', 'green', 'gray', 'yellow']

export const Grid = () => {
    let gridSquares = useSelector(state => state.grid)
    let dispatch = useDispatch()

    return (
        <div className="grid">
            <div className="grid__button">
                {colors.map(color => {
                    return <AddSquareButton key={color} color={color} onClick={(e) => dispatch(addSquareWithRule(color))} />
                })}
                <p>Click the square above to make a grid</p>
            </div>
            <div className="grid__squares">
                {gridSquares.map((square, i) => {
                    return <Square key={i} {...square} onDoubleClick={(e) => dispatch(removeSquare(square.id))} />
                })}
            </div>
            {gridSquares.length > 0 && <p>Double click the square to remove it from grid</p>}
        </div>
    )
}
