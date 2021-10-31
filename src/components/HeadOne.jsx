import React,{ useState } from 'react'
import Names from './Names'

const HeadOne = ({ body, heading, body2 }) => {
    const [arr, setArr] = useState([])
    let obj1 = {
        'Matt Johnson': true,
        'Bart Paden': true,
        'Ryan Doss': true,
        'Jared Malcom': true
    }
    let obj2 = {
        'Matt Johnson': true,
        'Bart Paden': true,
        'Jordan Heigle': true,
        'Tyler Viles': true
    }
    let obj3 = {}
    let arr2 = []

    const handleClick = (e) => {
        e.preventDefault()
        if(arr.length !== 0){
            return alert(`You've already done that!`)
        }
        Object.keys(obj1).forEach(key => {
            arr2.push(key)
        })
        Object.keys(obj2).forEach(key => {
            arr2.push(key)
        })
        arr2.forEach(e=>{
            if(!obj3[e]){
                obj3[e]=true
            }
        })
        arr2=Object.keys(obj3)
        setArr(arr2)
    }

    if(!body2){
        return(
            <div className='contactHeadOne'>
                <h1 className='contactH1'>{heading}</h1>
                <div className='goldLine'>
                </div>
                {body}
            </div>
        )
    }

    return (
        <div className='footer'>
            <h1 className='cardH1'>{heading}</h1>
            <p className='footerP'>{body}<a onClick={handleClick} href='/'>this link</a>{body2}</p>
            <Names arr={arr} />
        </div>
    )

}

export default HeadOne
