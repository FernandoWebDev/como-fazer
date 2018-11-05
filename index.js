const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

app.get('/', async(req, res) => {
    const content = await axios.get('https://como-fazer-53212.firebaseio.com/teste.json')
    console.log(content.data)
    res.render('index', {i: content.data})
})

app.use('/categoria', categorias)

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err){
        console.log('error: ' + err)
    } else {
        console.log('como-fazer Server is running... on port: ', port)
    }
})