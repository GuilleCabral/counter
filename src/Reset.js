import React from 'react'

function Reset(props) {
    const {reset} = props
    return (
        <div className="res">
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default Reset