import React,{ useState } from 'react';
import Names from './Names';
import "./HeadOne.css"

const HeadOne = ({ body, heading, body2 }) => {
    const [arr, setArr] = useState([]);
    let oneOfEachName = {};
    let arr2 = [];
    let firstSetOfNames = ['Matt Johnson','Bart Paden','Ryan Doss','Jared Malcom'];
    let secondSetOfNames = ['Matt Johnson','Bart Paden','Jordan Heigle','Tyler Viles'];

    const handleClick = (e) => {
        e.preventDefault();
        if(arr.length !== 0){
            return alert(`You've already done that!`)
        };
        for(let i=0;i<firstSetOfNames.length;i++){
            arr2.push(firstSetOfNames[i]);
            arr2.push(secondSetOfNames[i]);
        };
        arr2.forEach(e=>{
            if(!oneOfEachName[e]){
                oneOfEachName[e]=true
            };
        });
        arr2=Object.keys(oneOfEachName);
        setArr(arr2);
    };

    if(!body2){
        return(
            <div className='contactHeadOne'>
                <h1 className='contactH1'>{heading}</h1>
                {body}
            </div>
        );
    };

    return (
        <div className='footer'>
            <h1 className='cardH1'>{heading}</h1>
            <p className='footerP'>{body}<a onClick={handleClick} href='/'>this link</a>{body2}</p>
            <Names arr={arr} />
        </div>
    );

};

export default HeadOne;
