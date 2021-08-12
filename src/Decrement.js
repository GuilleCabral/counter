import React from 'react'

function Decrement(props) {
    const {decrement} = props
    return (
        <div className="dec">
            <button onClick={decrement}> -1 </button>
        </div>
    )
}

export default Decrement

