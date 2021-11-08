const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const pool = require('./db')

dotenv.config({path: './config.env'})
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000/'
}))

//hitting my DB endpoints
app.post('/contact', (req,res) => {
    try{
        const {firstName, lastName, title, email, message} = req.body
        pool.query('INSERT INTO messages (first_name, last_name, title, email, para) VALUES ($1,$2,$3,$4,$5)', [firstName, lastName, title, email, message])
    }catch(err){
        res.status(400).send(err)
    }
})

app.get('/cardinfo', async (req,res)=>{
    try{
        const data = await pool.query('SELECT * FROM lorem')
        res.status(200).send(data)
    } catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
})





app.listen(3001, () => console.log('running on 3001'))