const textInput = document.getElementById('text-input')
const emojiInput = document.getElementById('emoji-input')
const resultArea = document.getElementById('result')
const copied = document.getElementById('copied')

function update() {
    setInterval(checkInputs, 100);
}

function checkInputs() {
    if (textInput.value != "" && emojiInput.value != "") {
        changeTextArea();
        document.getElementById('button').style.display = "inline"
    }
    else {
       resultArea.innerText = "";
       document.getElementById('button').style.display = "none"
    }
}

function changeTextArea() {
    let emojified = emojify();
    resultArea.innerText = emojified;
}

function emojify() {
    let text = textInput.value;
    let emoji = emojiInput.value;
    let emojified = text.replace(/ /g, emoji);
    return emojified;
}

function copy() {
    let result = resultArea
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand('copy')
    displayCopied()
}

function displayCopied() {
    copied.style.opacity = 1
    setTimeout(function() {
        copied.style.opacity = 0;
    }, 1000)
}

update();