import React from 'react'
import "./Card.css"

const Card = ({ img, res, alt}) => {

    //fixes a compile error where the render cant read properties of null before the axios request is made
    if(!res){
        return('there has been a problem')
    }

    //returns the card with the information provided passed to it from the app.js
    return (
        <div className='card'>
            <div className="cardImg">
                <i>
                    <img src={img} alt={alt} />
                </i>
            </div>
            <section>
                <h2 className='cardH2'>{res.title}</h2>
                <p className='cardP'>{res.content}</p>
            </section>
            <button>Learn More</button>
        </div>
    )
}

export default Card
