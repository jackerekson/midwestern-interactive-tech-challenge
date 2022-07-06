import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import "./HeadOne.css";

const Names = ({ arr }) => {

    useEffect(() => {
        
    });
    const showObj3 = arr.map(e=>{
        return(<li key={e}>{e}</li>);
    });

    return (
        <ul className='namesYo'>
            {showObj3}
        </ul>
    );
};

export default Names;
