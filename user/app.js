const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const app= express()
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const connect = require('./db/db')

connect();
app.use('/', (req,res) => {

})

module.exports = app;