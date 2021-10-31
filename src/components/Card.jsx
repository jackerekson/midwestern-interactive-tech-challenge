import axios from 'axios'
import React, { useState } from 'react'

const Card = ({ img, body, heading, alt}) => {
    const[cardBody, setCardBody] = useState(body)
    const[paragraph, setParagraph] = useState(1)
    const[length, setLength] = useState('short')


    const handleClick = async() => {
        const res = await axios.get(`https://loripsum.net/api/${paragraph}/${length}/plaintest`)
        setCardBody(res.data)
    }
    return (
        <div className='card'>
            <i>
                <img src={img} alt={alt} />
            </i>
            <section>
                <h2 className='cardH2'>{heading}</h2>
                <p className='cardP'>{cardBody}</p>
            </section>
            <button onClick={handleClick}>Learn More</button>
        </div>
    )
}

export default Card
