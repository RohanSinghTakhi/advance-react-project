const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://rstakhi2005:rohan@cluster0.ccvh4.mongodb.net/").then(()=>{
    console.log("database connected")
}).catch((err)=>console.error(err))

const port = 3000

const userRoutes = require('./routes/user');
app.use('/api', userRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
