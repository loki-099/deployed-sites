const button = document.getElementById('button')
const email = document.getElementById('email')
const emailText = document.getElementById('email-done')
const mainContainer = document.getElementById('main-container')
const mainContainerDone = document.getElementById('main-container-done')
const buttonDone = document.getElementById('button-done')
const errorMessage = document.getElementById('error-message')
button.addEventListener('click', check)
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

function check(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(mailformat)){
    subscribe()
    email.style.borderColor = "var(--neutral-grey)";
    email.style.backgroundColor = "";
    email.style.color = "var(--neutral-dark-slate-grey)";
    errorMessage.style.display = "none"
  }
  else{
    email.style.borderColor = "var(--primary-tomato)";
    email.style.backgroundColor = "var(--error-bg)";
    email.style.color = "var(--primary-tomato)";
    errorMessage.style.display = "inline"
  }
}