import React from 'react'
import { useEffect } from 'react/cjs/react.development'

const Names = ({ arr }) => {

    useEffect(() => {
        
    })
    const showObj3 = arr.map(e=>{
        console.log('hit')
        return(<li key={e}>{e}</li>)
    })

    return (
        <ul className='namesYo'>
            {showObj3}
        </ul>
    )
}

export default Names
