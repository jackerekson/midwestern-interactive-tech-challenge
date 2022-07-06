import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Router from '../Link/Router/Router'
import Form from '../Form/Form'
import Link from '../Link/Router/Link'
import HeadOne from '../HeadOne/HeadOne'
import './App.css'

const App = () => {
    let [res, setRes] = useState(null)
    let [page, setPage] = useState('home')
    const body = 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
    const headOne = `Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list when `
    const headOne2 = ` is clicked. If the operation has been completed already notify the user that this has already been done.`
    const contactBody = <div><p>Lorem ipsum dolor sit amet, consecteutr adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</p><p>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</p></div>
    
    const handleContact = () => setPage('contact')
    const handleHome = () => setPage('home')

    const getPageInfo = () => {
        // if(page = 'contact'){
        //     axios.get('https://api.mwi.dev/content/contact').then(res => setRes(res.data))
        // } else {
        //     axios.get('https://api.mwi.dev/content/home').then(res => setRes(res.data))
        // }
        console.log('hit')
    }

    useEffect(()=> {
        getPageInfo()

    }, [page])
    console.log(res)

    return (
        <div className='page'>
            <Router path='/home'>
                <div className='homeSize'>
                    <header className='headerHome'>
                        <Header setPage={setPage} />
                        <Link href='/contact' className='home' >
                            <button onClick={handleContact} >contact</button>
                        </Link>
                    </header>
                    <section className='cardList'>
                        <Card img='../images/Talkie.png' body={body} heading='Heading Two' alt='talkie' />
                        <Card img='../images/Rabbit.png' body={body} heading='Heading Two' alt='rabbit' />
                        <Card img='../images/Shield.png' body={body} heading='Heading Two' alt='shield' />
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
                            <Link href='/home' className='home' >
                                <button onClick={handleHome} >home</button>
                            </Link>
                    </header>
                    <div className='contact'>
                        <section className='contactLeft'>
                            <HeadOne heading='Heading One' body={contactBody} />
                        </section>
                        <section className='contactRight'>
                            <Form headTwo='Heading Two' />
                        </section>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
