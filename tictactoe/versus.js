const buttons = document.getElementsByClassName("buttons")
const arrOfButtons = Array.from(buttons)
const reset = document.getElementById("reset")
const message = document.getElementById("message")
let turn = "X"

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
    turn = "X"
    message.innerHTML = `${turn}'s Turn`
    reset.style.visibility = "hidden"
}

// PUT MARK FOR PLAYER
function putMark(e) {
    const targetCell = e.target
    targetCell.innerHTML = turn
    makePoints(turn)
}

function makePoints(player) {
    let points = []
    for (i=0; i < arrOfButtons.length; i++ )
    if (arrOfButtons[i].innerHTML == player) {
        points.push(Number(arrOfButtons[i].id))
    }
    checkWinner(points, player)
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
    let result = `'${winnerPlayer}' WIN`
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
        winner = turn
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
    message.innerHTML = `${turn}'s Turn`
}

startGame()
