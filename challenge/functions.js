const button = document.getElementById('button')
const inputArea = document.getElementsByClassName('main-input-area')
const inputs = document.getElementsByClassName('inputs')
const complete = document.getElementById('complete-container')

button.addEventListener('click', checkInputAreas)

document.querySelector('card-number-input').oninput = function () {
    var foo = this.value.split(" ").join("");
    if (foo.length > 0) {
        foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    this.value = foo;
};

// Check All Input Areas
function checkInputAreas() {
    let inputsArr = Array.from(inputs)
    let anyEmpty = false
    inputsArr.forEach(inputArea => {
        inputArea.classList.remove('input-error')
        if (inputArea.value == "") {
            inputArea.classList.add('input-error')
            anyEmpty = true
        }
    })

    if (!anyEmpty) {
        removeInputAreas()
    }

    displayError()
}

// Add Class and Display Error
function displayError() {
    let areasArr = Array.from(inputArea)
    areasArr.forEach(parents => {
        if (!parents.classList.contains('third')) {
            parents.childNodes[5].innerHTML = "";
            if (parents.childNodes[3].classList.contains('input-error')) {
                let child = parents.childNodes[5]
                displayErrorMessage(child)
            }
        }
        else {
            for (let i = 1; i < 4; i = i+2) {
                if (i == 1) {
                    let dateContainer = parents.childNodes[1]
                    let mmAndyyContainer = dateContainer.childNodes[3]
                    let mmInput = mmAndyyContainer.childNodes[1]
                    let yyInput = mmAndyyContainer.childNodes[3]
                    let child = dateContainer.childNodes[5]
                    child.innerHTML = ""
                    if (mmInput.classList.contains('input-error') || yyInput.classList.contains('input-error')) {
                        displayErrorMessage(child)
                    }
                }
                else if (i == 3) {
                    let cvcContainer = parents.childNodes[3]
                    let cvcInput = parents.childNodes[3].childNodes[3]
                    let child = cvcContainer.childNodes[5]
                    child.innerHTML = ""
                    if (cvcInput.classList.contains('input-error')) {
                        displayErrorMessage(child)
                    }
                }
            }
        }
    }) 
}

// Add Error MEssage to P
function displayErrorMessage(targetChild) {
    let child = targetChild
    child.innerHTML = "Can't be blank"
}

// Remove Input Areas
function removeInputAreas() {
    Array.from(inputArea).forEach(div => {
        div.style.display = 'none'
    });

    complete.style.display = 'flex'
    button.innerHTML = 'Continue'
    button.removeEventListener('click', checkInputAreas)
}

function removeError(event) {
    let targetEvent = event.target
    if (targetEvent.classList.contains('input-error')) {
        targetEvent.classList.remove('input-error')
    }
}
