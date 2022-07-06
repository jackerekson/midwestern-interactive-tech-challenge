import React from 'react';
import "./ExtraInfo.css";

const Names = ({ arr }) => {
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
