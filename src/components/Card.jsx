import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Card = ({ img, obj, alt, handleClick}) => {
    // const {title, para} = obj
    let arr = obj
    // console.log(arr.title)

    if(!obj){
        return null
    }
    return (
        <div className='card'>
            <i>
                <img src={img} alt={alt} />
            </i>
            <section>
                <h2 className='cardH2'>{arr.title}</h2>
                <p className='cardP'>{arr.para}</p>
            </section>
            <button onClick={handleClick}>Learn More</button>
        </div>
    )
}

export default Card
