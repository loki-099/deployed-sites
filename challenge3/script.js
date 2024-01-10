const button = document.getElementById('button')
const email = document.getElementById('email')
const emailText = document.getElementById('email-done')
const mainContainer = document.getElementById('main-container')
const mainContainerDone = document.getElementById('main-container-done')
const buttonDone = document.getElementById('button-done')
button.addEventListener('click', subscribe)
buttonDone.addEventListener('click', goBack)

function subscribe(){
  mainContainer.style.display = 'none'
  mainContainerDone.style.display = 'flex'
  emailText.innerText = email.value
}

function goBack(){
  mainContainer.style.display = 'flex'
  mainContainerDone.style.display = 'none'
  email.value = ""
}