const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rstakhi2005:rohan@cluster0.ccvh4.mongodb.net/").then(()=>{
    console.log("database connected")
}).catch((err)=>console.error(err))
const app = express()
const port = 3000



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
