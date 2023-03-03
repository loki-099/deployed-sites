const buttons = document.getElementsByClassName("buttons")
const arrOfButtons = Array.from(buttons)
const reset = document.getElementById("reset")
let playerOne = "X"
let bot = "O"
let turn = playerOne

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
        buttons[i].addEventListener('click', putMark, {once: true})
        buttons[i].innerHTML = ""
    }
    message.innerHTML = "Your Turn..."
    reset.style.visibility = "hidden"
    turn = playerOne
}

// PUT MARK FOR PLAYER
function putMark(e) {
    const targetCell = e.target
    if (targetCell.innerHTML == "") {
        targetCell.innerHTML = playerOne
        makePoints(playerOne)
    }
}

function makePoints(player) {
    let points = []
    for (i=0; i < arrOfButtons.length; i++ )
    if (arrOfButtons[i].innerHTML == player) {
        points.push(Number(arrOfButtons[i].id))
    }
    checkWinner(points, player)
}

//PUT MARK FOR BOT
function botTurn() {
    let emptyButtons = []
    let emptyButton 
    for (i=0;i < arrOfButtons.length; i++){
        if (arrOfButtons[i].innerHTML == "") {
            emptyButtons.push(i)
        }
    }
    emptyButton = Math.floor(Math.random() * emptyButtons.length)
    emptyButton = emptyButtons[emptyButton]
    buttons[emptyButton].innerHTML = bot
    message.innerHTML = "Your Turn..."
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', putMark, {once: true})
    }
    makePoints(bot)
}

// CHECK WINNER
function checkWinner(points, player) {
    var matches = []
    for (i=0; i < winningcombi.length; i++) {
        if (winningcombi[i].every(elem => points.includes(elem))) {
            matches.push("match")
        }
        else {
            matches.push("notMatch")
        }
    }
    if (matches.includes("match")) {
        displayWin(player)
    }
    else {
        matches = []
        checkDraw()
    }
}

function displayWin(winnerPlayer) {
    message.style.visibility = "visible"
    reset.style.visibility = "visible"
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', putMark)
    }
    let result = `'${winnerPlayer}' WON`
    message.innerHTML = result
}

// CHECK DRAW
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
            buttons[i].removeEventListener('click', putMark)
        }
        winner = playerOne
        result = `DRAW`
        message.innerHTML = result
    }
    else {
        changeTurn()
    }
}

//CHANGE TURN
function changeTurn() {
    turn = turn == "X" ? "O":"X"
    if (turn == "O") {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener('click', putMark)
        }
        setTimeout(botTurn, 1000)
        message.innerHTML = "Bot's Turn..."
    }
}

startGame()
