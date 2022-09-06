const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./router/users.router');

// add middle wear 
app.use(cors())
app.use(express.json())

// using the router 
app.use('/user',router)


app.all('*', (req, res) => {
    res.send('Welcome To Tanjin Hossain. User Collection Backend API page ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})