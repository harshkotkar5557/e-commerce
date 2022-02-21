let hambar = document.getElementById('hambar')
let navbarOption = document.querySelector('.navbarOptions')

hambar ? hambar.addEventListener('click', () => {
    navbarOption.classList.toggle('hambar-navbar-option')
}) : ""
