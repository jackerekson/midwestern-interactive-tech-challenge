import React, {useState, useEffect} from 'react'
import Card from './Card'
import Header from './Header'
import Router from './Router'
import Form from './Form'
import Link from './Link'
import HeadOne from './HeadOne'
import './App.css'
import axios from 'axios'

const App = () => {
    const [cardInfo, setCardInfo] = useState([])
    const [obj, setObj] = useState()
    const [obj2, setObj2] = useState()
    const [obj3, setObj3] = useState()
    const [debounced, setDebounced] = useState()

    const headOne = `Remove the duplicates in 2 Javascript objects and output the list of idstinct names in an unordered list when `
    const headOne2 = ` is clicked. If the operation has been completed already notify the user that htis has already been done.`
    const contactBody = <div><p>Lorem ipsum dolor sit amet, consecteutr adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</p><p>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</p></div>

    const getInfo = async() => {
        const res = await axios.get('http://localhost:3001/cardinfo')
        setCardInfo(res.data.rows)
        setDebounced(1)
    }

    const cardWords = () => {
        if(cardInfo.length === 0){
            return
        }
        setObj(cardInfo[Math.floor(Math.random()*cardInfo.length)])
        setObj2(cardInfo[Math.floor(Math.random()*cardInfo.length)])
        setObj3(cardInfo[Math.floor(Math.random()*cardInfo.length)])
    }

    const handleClick = () => {
        console.log('hit')
    }

    useEffect(() => {

        getInfo()
        cardWords()
    }, [debounced])
    
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
                        <Card handleClick={handleClick} img='../images/Talkie.png' obj={obj} alt='talkie' />
                        <Card handleClick={handleClick} img='../images/Rabbit.png' obj={obj2} alt='rabbit' />
                        <Card handleClick={handleClick} img='../images/Shield.png' obj={obj3} alt='shield' />
                    </section>
                    <footer>
                        <HeadOne obj={obj} body={headOne} body2={headOne2} />
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
                            <HeadOne obj={obj3} contactBody={contactBody} />
                        </section>
                        <section className='contactRight'>
                            <Form obj={obj2} />
                        </section>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
