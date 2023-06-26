const button = document.getElementById('button')
const inputArea = document.getElementsByClassName('main-input-area')
const inputs = document.getElementsByClassName('inputs')
const complete = document.getElementById('complete-container')

button.addEventListener('click', checkInputAreas)

// Check All Input Areas
function checkInputAreas() {
    let inputsArr = Array.from(inputs)
    let anyEmpty = false
    inputsArr.forEach(inputArea => {
        console.log(inputArea)
        inputArea.classList.remove('input-error')
        if (inputArea.value == "") {
            inputArea.classList.add('input-error')
            anyEmpty = true
        }
    })

    if (!anyEmpty) {
        removeInputAreas()
    }
}

// Add Class and Display Error

// Remove Input Areas
function removeInputAreas() {
    Array.from(inputArea).forEach(div => {
        div.style.display = 'none'
    });

    complete.style.display = 'flex'
    button.innerHTML = 'Continue'
    button.removeEventListener('click', checkInputAreas)
}
