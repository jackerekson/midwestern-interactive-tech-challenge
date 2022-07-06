import React from 'react'
import "./Card.css"

const Card = ({ img, body, heading, alt}) => {

    return (
        <div className='card'>
            <div className="cardImg">
                <i>
                    <img src={img} alt={alt} />
                </i>
            </div>
            <section>
                <h2 className='cardH2'>{heading}</h2>
                <p className='cardP'>{body}</p>
            </section>
            <button>Learn More</button>
        </div>
    )
}

export default Card
