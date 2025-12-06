const dotenv = require('dotenv')
dotenv.config();

const express = require('express')
const app = express();

const rideRoutes = require('./routes/ride.routes')
// const rideRoutes = require();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
const connect = require('./db/db');
connect()

app.use('/',rideRoutes)

const rabbitMq = require('./service/rabbit') 
rabbitMq.connect()

module.exports = app;