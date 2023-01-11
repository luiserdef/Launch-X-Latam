document.addEventListener("DOMContentLoaded",()=>{
    const userGrid = document.querySelector(".grid-user")
    const cpuGrip = document.querySelector(".grid-cpu")
    const displayGrid = document.querySelector(".grid-display")

    const ship = document.querySelectorAll(".ship")

    const destroyer = document.querySelector(".destroyer-container")
    const submarine = document.querySelector(".submarine-container")
    const cruiser = document.querySelector(".crusier-container")
    const battleship = document.querySelector(".battleship-container")
    const carrier= document.querySelector(".carrier-container")

    const startButton = document.querySelector("#start")
    const rotateButton = document.querySelector("#rotate")
    const turnDisplay = document.querySelector("#turn")
    const infoDisplay= document.querySelector("#info")

    const setupButton = document.getElementById("setup-buttons")

    const width = 10
    const userSquares = []
    const cpuSquares = [] 

    let inGameOver = false
    let ready = false
    let enemyReady = false
    let allShipPlaced = false
    let playersNum = 0
    let shotsFired = -1
    let currentPlayer = "user"
    let isHorizontal = true;

    const shipsArray = [
        {
            name:"destroyer",
            directions:[
                [0,1],
                [0, width]
            ]
        },
        {
            name:"submarine",
            directions:[
                [0,1,2],
                [0, width,width*2]
            ]
        },
        {
            name:"crusier",
            directions:[
                [0,1,2],
                [0, width,width*2]
            ]
        },
        {
            name:"battleship",
            directions:[
                [0,1,2,3],
                [0, width,width*2,width * 3]
            ]
        },
        {
            name:"carrier",
            directions:[
                [0,1,2,3,4],
                [0, width,width*2,width * 3,width * 4]
            ]
        }
    ]

createBoard(userGrid,userSquares)
createBoard(cpuGrip,cpuSquares)


if (gameMode === "singlePLayer"){
    startSingleplayer()
}else{
    startMultiplayer()
}

function createBoard(grid,squares){
    for(let i = 0;i< width*width;i++){
        const square = document.createElement("div")
        square.dataset.id = i
        grid.appendChild(square)
        squares.push(square)
    }
}

function startSingleplayer(){

}

function generar (){
    let randomDirection = Math.floor(Math.random()*ship.directions.length)
    let current = ship.directions[randomDirection]
    if(randomDirection === 0) directions= 1
    if(randomDirection === 1) directions= 10

    const isTaken = current.some(index=> cpuSquares[index].classList.contains("taken"))

    const isAtRightEdge = current.some(index => (index)%width === width - 1)
    const isAtLeftEdge = current.some(index => (index)%width === width - 1)
}

})