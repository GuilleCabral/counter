import React from 'react'

function Increment(props) {
    const {increment} = props
    return ( 
        <div className="inc">
            <button onClick={increment}> +1 </button>
        </div>
    )
}

export default Increment
