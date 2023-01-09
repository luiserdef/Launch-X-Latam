const express = require("express")
const app = express()
const http=require("http")
const server = http.createServer(app)

const {Server} = require("socket.io") 
const io = new Server(server)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

io.on("connection",(socket)=>{
    console.log("se conecto un usuario")

    socket.on("chat message",msg=>{
        io.emit("chat message",msg)
        console.log("el mensaje fue: "+msg)
    })


    socket.on("disconnect",()=>{
        console.log("se desconecto el usuario")
    })
})

server.listen(8080,()=>{
    console.log("escuchando servidor")
})