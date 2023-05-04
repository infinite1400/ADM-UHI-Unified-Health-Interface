const dotenv=require('dotenv');
const mongoose=require('mongoose')
const express=require('express')
const socket = require("socket.io")
const app=express();
const cons= require('cors');
const http = require("http")
dotenv.config({path:'./config.env'})
// const User=require('./model/patientSchema');
require('./db/conn')
app.use(express.json());

app.use(cons());
app.use(require('./router/auth'))
app.use(require('./router/authdoc'))
app.use(require('./router/authdocquery'))
app.use(require('./router/patientEdit'))
app.use(require('./router/doctorEdit'))
app.use(require('./router/patientDisplay'))
app.use(require('./router/doctorDisplay'))
app.use(require('./router/appointment'))
app.use(require('./router/docaptdisp'))
app.use(require('./router/docaptdelete'))
app.use(require("./router/chat"))
app.use(require("./router/messages"))

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/about',(req,res)=>{
    res.send('Hello')
})
app.get('/contact',(req,res)=>{
    res.send('Helloc')
})
app.get('/signin',(req,res)=>{
    res.send('Helloc')
})
app.get('/signup',(req,res)=>{
    res.send('Helloc')
})



const server  = http.createServer(app)

const io = socket(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection",socket=>{

})

server.listen(3000,()=>{
    console.log("server running on 3000")
})