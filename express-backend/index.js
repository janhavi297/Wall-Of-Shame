const express = require('express')
const app = express()
const mongodb = require('./config/mongodb')
const port = 3000

// middleware
app.use(express.json())

// routers

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log('server listening on port')
})