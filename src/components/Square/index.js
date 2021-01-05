import React from 'react'
import './style.css'
import { func, string, number } from 'prop-types'

export const Square = ({ color, id, onDoubleClick }) => {
    return (
        <div className="square" style={{ backgroundColor: color }} onDoubleClick={onDoubleClick}>
            
        </div>
    )
}

Square.defaultProps = {
    color: 'gray'
}

Square.propTypes = {
    onDoubleClick: func.isRequired,
    color: string,
    id: number.isRequired
}