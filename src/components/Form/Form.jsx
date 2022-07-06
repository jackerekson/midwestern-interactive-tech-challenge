import React, { useState } from 'react';
import axios from 'axios';
import "./Form.css"

const Form = ( {res} ) => {
    //creating the state for all the items that will be collected and sent to the back end in the form
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState('');
    const [required, setRequired] = useState(false);

    //adding a timeout so the state isnt updated every time it changes, instead it will wait 1000 ms
    const updateEmail = (e) => {
        setRequired(false);
        setTimeout(() => {
            setEmail(e.target.value);
        }, 1000);
    };
    const updateFirstName = (e) => {
        setTimeout(() => {
            setFirstName(e.target.value);
        }, 1000);
    };
    const updateLastName = (e) => {
        setTimeout(() => {
            setLastName(e.target.value);       
        }, 1000);
    };
    const updateTitle = (e) => {
        setTimeout(() => {
            setTitle(e.target.value);  
        }, 1000);
    };
    const updateMessage = (e) => {
        setTimeout(() => {
            setMessage(e.target.value);
        }, 1000);
    };

    //if the email slot is empty it will display the red box around it, if it is not empty it will take all the information collected and send it to the back end
    const handleClick = () => {
        if(!email){
            return setRequired(true);
        };

        axios.post('http://localhost:3001/contact', {firstName, lastName, title, email, message})
        .then(alert('Your message has been received.'));
    };

    if(!required){
        return (
            <div className='form'>
                <h2 className='formH2'>{res.title}</h2>
                <div className='contactform'>
                    <div className="topInputRow">
                        <input className='message1' onChange={updateFirstName} type='text' placeholder='First Name'></input>
                        <input className='message1' onChange={updateLastName} type='text' placeholder='Last Name'></input>    
                    </div>
                    <div className="bottomInputRow">
                        <input className='message1' onChange={updateTitle} type='text' placeholder='Title'></input>
                        <div className='message1 messageDiv'>
                        <label className='messageDiv' htmlFor='email'></label>
                            <input required={required} className='required' onChange={updateEmail} type='email' name='email' placeholder='Email'></input>
                        </div>
                    </div>
                    <textarea form='contactForm' onChange={updateMessage} className='message' type='textarea' placeholder='Message'></textarea>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        );
    };

    return (
        <div className='form'>
            <h2 className='formH2'>{res.title}</h2>
            <div className='contactform'>
                <div className="topInputRow">
                    <input className='message1' onChange={updateFirstName} type='text' placeholder='First Name'></input>
                    <input className='message1' onChange={updateLastName} type='text' placeholder='Last Name'></input>    
                </div> 
                <div className="bottomInputRow">   
                    <input className='message1' onChange={updateTitle} type='text' placeholder='Title'></input>
                    <div className='message1 messageDiv'>
                        <label className='messageDiv' htmlFor='email'>Required</label>
                        <input required={required} className='required' onChange={updateEmail} type='email' name='email' placeholder='Email'></input>
                    </div>
                </div>
                <textarea form='contactForm' onChange={updateMessage} className='message' type='textarea' placeholder='Message'></textarea>
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
};

export default Form
