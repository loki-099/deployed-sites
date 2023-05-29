document.addEventListener('click', function(e) {
    console.log(e.target);
    const target = e.target

    if (target.classList.contains('title') || target.classList.contains('content-main-container')) {
        var cont = target.parentNode.querySelector('#poem-content');
        checkDisplay(cont)    }
    else if (target.classList.contains('para')) {
        console.log(target.parentNode)
        target.parentNode.style.display = 'none';
    }
    else if (target.classList.contains('poem-content')) {
        target.style.display = 'none';
    }

})

function checkDisplay(thePoem) {
    if (thePoem.style.display == 'block') {
        thePoem.style.display = 'none';
    }
    else {
        thePoem.style.display = 'block';
    }
}
