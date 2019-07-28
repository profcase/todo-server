const config = require('config')     // keep constants in files not code
const cors = require('cors')         // cross origin resourse sharing
const express = require('express')   // web framework for Node.js
const mongoose = require('mongoose') // MongoDB object modeling  
const morgan = require('morgan')     // HTTP request logger middleware 

const DEFAULT_PORT = config.get("port")

// create Express app
const app = express()

// use middleware to parse requests containing json payloads
app.use(express.json())

// use middleware to enable cross-origin-resource-sharing for all requests
app.use(cors())

// use middleware to log HTTP requests with morgan
app.use(morgan('combined'))

// Use middleware to set up routes
app.use('/todo', require('./routes/todo'));
app.use('/', (req,res)=> {res.send('Try /todo')})

// Configure data access with Mongoose
const dbURI = config.get("mongoURI")

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.log(err))

// Use hosting values if available, otherwise default 
const port = process.env.PORT || DEFAULT_PORT;
const environment = process.env.NODE_ENV || 'development'

app.listen(port, () =>{
   // tell user where app is running
   console.log(`App running on ${port} in ${environment}.`)
})