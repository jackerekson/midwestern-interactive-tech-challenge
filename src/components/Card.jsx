import axios from 'axios'
import React, { useState } from 'react'

const Card = ({ img, body, heading, alt}) => {
    const[cardBody, setCardBody] = useState(body)
    const[paragraph, setParagraph] = useState(1)
    const[length, setLength] = useState('short')
    const[title, setTitle] = useState('')
    let arr = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adispiscing', 'Elit', 'At', 'Verte', 'Gravius', 'Mihi', 'Inquam', 'Qui', 'Te', 'Id', 'Ipsum', 'Rogavi', 'Vide', 'Quantum']
    const rando = arr[Math.floor(Math.random()*arr.length)]
    const rando2 = arr[Math.floor(Math.random()*arr.length)]
    let titleArr = []
    titleArr.push(rando)
    titleArr.push(rando2)
    const makeTitle = titleArr.join(' ')

    const handleClick = async() => {
        const res = await axios.get(`https://loripsum.net/api/${paragraph}/${length}/plaintest`)
        setCardBody(res.data)
        setTitle(makeTitle)
        sendLorem()
    }

    const sendLorem = () => {
        axios.post('http://localhost:3001/lorem', {cardBody, title})
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
