const menu = document.getElementById('menu')
const dropdown = document.getElementById('dropdown')
const icon = document.getElementById('icon')

menu.addEventListener('click', change)

function change() {
    icon.name == "menu" ? showDropdown() : hideDropdown();
}

function showDropdown() {
    icon.name = "close"
    dropdown.classList.remove('opacity-0')
    dropdown.classList.add('opacity-100')
}

function hideDropdown() {
    icon.name = "menu"
    dropdown.classList.remove('opacity-100')
    dropdown.classList.add('opacity-0')
}
