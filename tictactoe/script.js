const buttons = document.getElementsByClassName("buttons")
const circle = "O"
const eks = "X"
var winner = ""
const message = document.getElementById("message")
const reset = document.getElementById("reset")
var result = "DRAW"

let currentPlayer = "X"

let winningcombi = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

reset.addEventListener("click", startGame)

function startGame() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', myFunc, {once: true})
        buttons[i].innerHTML = ""
    }
    message.style.visibility = "hidden"
    reset.style.visibility = "hidden"
    currentPlayer = "X"
}

function myFunc(e) {
    const cell = e.target
    cell.innerHTML = currentPlayer
    makeArr()
    checkDraw()
    currentPlayer = currentPlayer == "X" ? "O":"X"
}

function makeArr() {
    let points = []
    var buttons = document.getElementsByClassName("buttons");
    var buttArr = Array.from(buttons)
    for (i=0; i < buttArr.length; i++ )
    if (buttArr[i].innerHTML == currentPlayer) {
        points.push(Number(buttArr[i].id))
    }

    checkWin(points)
}

function checkWin(points) {
    let combi = points
    var match = []
            
    for (i=0; i < winningcombi.length; i++) {
        if (winningcombi[i].every(elem => combi.includes(elem))) {
            match.push(true)
        }
        else {
            match.push(false)
        }
    }
    console.log(match)
    console.log(winningcombi[0].every(elem => combi.includes(elem)))
    // MISSING WINNING MESSAGE
    if (match.includes(true)) {
        console.log("WINNER")
        win()
    }
    else {
        match = []
    }

    console.log(points)
        
}

function win() {
    message.style.visibility = "visible"
    reset.style.visibility = "visible"
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', myFunc)
    }
    winner = currentPlayer
    result = `'${currentPlayer}' WON`
    message.innerHTML = result
    console.log(result)
}

function checkDraw() {
    let condition = []
    for (i=0; i<buttons.length;i++){
        if (buttons[i].innerHTML != "") {
            condition.push(true)
        }
        else {condition.push(false)}
    }
    if (!condition.includes(false)) {
        message.style.visibility = "visible"
        reset.style.visibility = "visible"
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener('click', myFunc)
        }
        winner = currentPlayer
        result = `DRAW`
        message.innerHTML = result
        console.log("CONDITION: ", condition)
    }
}
startGame()

