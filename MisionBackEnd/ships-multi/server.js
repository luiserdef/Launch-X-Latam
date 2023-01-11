const express = require("express")
const path = require("path")
const http = require("http")
const socket = require ("socket.io")
const app = express()

const server = http.createServer()
const io = socket(server)

app.use(express.static(path.join(__dirname,"public")))

server.listen(PORT, ()=>console.log("servidor encendido"))

const connections = [null,null]

io.on("connection",socket =>{
    let playerIndex = -1
    for(const i in connections){
        if(connections[i] === null){
            playerIndex = i
            break;
        }
    }
    socket.emit("player-number",playerIndex)
    console.log("jugador: "+playerIndex + " se ha conectado")
    if(playerIndex === -1) return
    connections[playerIndex] =false

    socket.broadcast.emit("player-connection", playerIndex)
    socket.on("disconnect",()=>{
        console.log("el jugador "+playerIndex+" se ha deconectado")
        connections[playerIndex] === null
        socket.broadcast.emit("player-connection", playerIndex)
    })

    socket.on("player-ready", ()=>{
        socket.broadcast.emit("enemy-ready",playerIndex)
        connections[playerIndex] = true
    })

    socket.on("check-players",()=>{
        const players = []
        for(const i in connections){
                connections[i] === null ? 
                    players.push({connected:false,ready:false}) :
                    players.push({connected:true,ready:connections[i]})
        }
        socket.emit("check-playes",players)    
    })

    socket.on("fire", (id)=>{
        console.log("disparo de "+ playerIndex + " "+id)
        socket.broadcast.emit("fire",id)
    })

    socket.on("fire-replay", square =>{
        console.log(square)
        socket.broadcast.emit("fire-reply",square)
    })

    setTimeout(()=>{
        connections[playerIndex] = null
        socket.emit("timeout AFK")
        socket.disconnet()
    },600000 )
})
