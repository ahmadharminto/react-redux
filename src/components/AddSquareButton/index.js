import React from 'react'
import './style.css'
import { func, string } from 'prop-types'

export const AddSquareButton = ({ onClick, color }) => {
    return (
        <div className="addSquareButton" style={{ backgroundColor: color }} onClick={onClick} />
    )
}

AddSquareButton.propTypes = {
    onClick: func.isRequired,
    color: string.isRequired
}
