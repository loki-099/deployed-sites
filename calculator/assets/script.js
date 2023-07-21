const input = document.getElementById('input')
const eq = document.getElementById('equation')

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  const e = event.target
  if (!isButton) {
    return;
  }

  update(e)
})

function update(e) {
    if (e.value == 'del') {
        let str = input.innerText;
        let newstr = str.slice(0, -1);
        newstr == "" ? (input.innerText = "0", eq.style.opacity = "0") : input.innerText = newstr
    }
    else {
        input.innerText == "0" ? input.innerText = e.value : input.innerText += e.value
    }
}

function refresh() {
    input.innerText = "0"
    eq.style.opacity = "0"
}

function equate() {
    try {
        let text = input.innerText
        let evald = eval(input.innerText)
        evald != text ? (eq.innerText = input.innerText, eq.style.opacity = '', input.innerText = evald) : []
    } catch (error) {
        eq.style.opacity = ''
        eq.innerText = "error"
        input.innerText = "0"
    }
}