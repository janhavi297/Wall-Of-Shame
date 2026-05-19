const express = require('express')
const app = express()
const mongodb = require('./config/mongodb')
const snippetRouter = require('./routers/snippet.router')
const commentRouter = require('./routers/comment.router')
const port = 3000

// middleware
app.use(express.json())

// routers
app.use('/snippet', snippetRouter)
app.use('/comment', commentRouter)

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log('server listening on port')
})