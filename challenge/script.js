const cardName = document.getElementById('card-name')
const inputCardName = document.getElementById('card-name-input')
const cardNumber = document.getElementById('card-number')
const inputCardNumber = document.getElementById('card-number-input')
const cardDateMM = document.getElementById('card-date-mm')
const cardDateYY = document.getElementById('card-date-yy')
const inputCardDateMM = document.getElementById('card-date-mm-input')
const inputCardDateYY = document.getElementById('card-date-yy-input')
const cardDate = document.getElementById('card-date')
const cardCVC = document.getElementById('card-cvc')
const inputCardCVC = document.getElementById('card-cvc-input')

setInterval(displayName, 50);
setInterval(displayNumber, 50);
setInterval(displayDate, 50);
setInterval(displayCVC, 50);

function displayName() {
    if (inputCardName.value !== "") {
        cardName.innerHTML = inputCardName.value;
    }
    else {
        cardName.innerHTML = "Ian Muico";
    }
}

function displayNumber() {
    if (inputCardNumber.value !== "") {
        cardNumber.innerHTML = inputCardNumber.value;
    }
    else {
        cardNumber.innerHTML = "0000 0000 0000 0000";
    }
}

function displayDate() {
    if (inputCardDateMM.value !== "" && inputCardDateYY.value !== "") {
        cardDateMM.innerHTML = inputCardDateMM.value;
        cardDateYY.innerHTML = inputCardDateYY.value;
    }
    else {
        cardDateMM.innerHTML = "00";
        cardDateYY.innerHTML = "00";
    }
}

function displayCVC() {
    if (inputCardCVC.value !== "") {
        cardCVC.innerHTML = inputCardCVC.value;
    }
    else {
        cardCVC.innerHTML = "123";
    }
}