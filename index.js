const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors())
app.use(express.json())



app.all('*', (req, res) => {
    res.send('Welcome To Tanjin Backend page ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})