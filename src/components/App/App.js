import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Router from '../Link/Router/Router'
import Form from '../Form/Form'
import Link from '../Link/Router/Link'
import HeadOne from '../ExtraInfo/ExtraInfo'
import './App.css'

const App = () => {
    //setting response state and page state
    let [res, setRes] = useState([])
    let [page, setPage] = useState('home')
    //making the home page lower information text
    const headOne = `Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when `
    const headOne2 = ` is clicked. If the operation has been completed already notify the user that this has already been done.`
    
    //creating functions to change the page state for the axios call bellow
    const handleContact = () => setPage('contact')
    const handleHome = () => setPage('home')

    //the useEffect will run the getPageInfo function every time the page is changed to get the information needed to render the page and set the res state to that information
    useEffect(()=> {
        const getPageInfo = async() => {
                await axios.get(`https://api.mwi.dev/content/${page}`).then(res => setRes(res.data.data))
            }
        getPageInfo()
    }, [page])
    
    //returns the path of the URL either '/' or '/contact'
    return (
        <div className='page'>
            <Router path='/'>
                <div className='homeSize'>
                    <header className='headerHome'>
                        <Header setPage={setPage} />
                        <Link href='/contact' className='home' >
                            <button onClick={handleContact} className='pageLink'>contact</button>
                        </Link>
                    </header>
                    <section className='cardList'>
                        <Card img='../images/Talkie.png' res={res[0]} alt='talkie' />
                        <Card img='../images/Rabbit.png' res={res[1]} alt='rabbit' />
                        <Card img='../images/Shield.png' res={res[2]} alt='shield' />
                    </section>
                    <footer>
                        <HeadOne heading='Heading One' body={headOne} body2={headOne2} />
                    </footer>
                </div>
            </Router>
            <Router path='/contact'>
                <div className='back'>
                    <header className='header'>
                            <Header />
                            <Link href='/' className='home' >
                                <button onClick={handleHome} className='pageLink'>home</button>
                            </Link>
                    </header>
                    <div className='contact'>
                        <section className='contactLeft'>
                            <HeadOne  res={res[0]} />
                        </section>
                        <section className='contactRight'>
                            <Form res={res[0]} headTwo='Heading Two' />
                        </section>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
