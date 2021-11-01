import React from 'react'

const Card = ({ img, obj, alt, handleClick}) => {
    let arr = obj

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
                <p className='cardP'>{obj.para.split('<p>').join('').split('</p>').join('')}</p>
            </section>
            <button onClick={handleClick}>Learn More</button>
        </div>
    )
}

export default Card
