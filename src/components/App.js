import React from 'react'
import Card from './Card'
import Header from './Header'
import Router from './Router'
import Form from './Form'
import Link from './Link'
import HeadOne from './HeadOne'
import './App.css'

const App = () => {
    const body = 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
    const headOne = `Remove the duplicates in 2 Javascript objects and output the list of idstinct names in an unordered list when `
    const headOne2 = ` is clicked. If the operation has been completed already notify the user that htis has already been done.`
    const contactBody = <div><p>Lorem ipsum dolor sit amet, consecteutr adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</p><p>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</p></div>
    
    return (
        <div>
            <Router path='/'>
                <div className='homeSize'>
                    <header className='headerHome'>
                        <Header />
                        <Link href='/contact' className='home'>
                            contact
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
                            <Link href='/' className='home'>
                                home
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
