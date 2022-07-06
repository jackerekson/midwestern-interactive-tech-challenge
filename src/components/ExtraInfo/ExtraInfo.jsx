import React,{ useState } from 'react';
import Names from './Names';
import "./ExtraInfo.css"

const HeadOne = ({ res, body, heading, body2 }) => {
    const [arr, setArr] = useState([]);
    let oneOfEachName = {};
    let arr2 = [];
    //the list of names from the tech-challenge provided
    let firstSetOfNames = ['Matt Johnson','Matt Johnson','Bart Paden','Ryan Doss','Jared Malcom'];
    let secondSetOfNames = ['Matt Johnson','Bart Paden','Bart Paden','Jordan Heigle','Jordan Heigle','Tyler Viles'];
    
    //loops threw the two arrays provided in the tech-challenge, using an object to allow only one of each name then sets the state to an array of the object keys
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

    //this will display the title and content information from the api request on the contact page
    if(!body2){
        return(
            <div className='contactHeadOne'>
                <h1 className='contactH1'>{res.title}</h1>
                <p>{res.content}</p>
            </div>
        );
    };

    //if body2 is truthy this will display the names problem on the home page
    return (
        <div className='footer'>
            <h1 className='cardH1'>{heading}</h1>
            <p className='footerP'>{body}<a onClick={handleClick} href='/'>this link</a>{body2}</p>
            <div className="listOfNames">
                <Names arr={arr} />
            </div>
        </div>
    );

};

export default HeadOne;
